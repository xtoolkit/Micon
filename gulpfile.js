/*! Micon v3.0.168 | MIT License | http://xtoolkit.github.io/Micon/ */

const fs = require('fs');
const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const iconfont = require('gulp-iconfont');
const consolidate = require('gulp-consolidate');

const path = 'dist';
const pathTemplates = '.templates';
const timeStamp = Math.round(Date.now() / 1000);
var config = require('./config.json');
var main = {
  name: "Micon",
  ver: "3.0.168"
};
var fonts = [];
var namedb = {};
var namedbcomp = {};
for (var pack of config.iconsPacks) {
  fonts.push(`icons/${pack}/*.svg`);
  namedb[pack] = require(`./icons/${pack}/db.json`);
  namedbcomp = Object.assign(namedbcomp, namedb[pack]);
}

gulp.task('mimake', function() {
  return gulp.src(fonts)
    .pipe(iconfont({
      fontName: config.fontName,
      formats: ['ttf', 'eot', 'woff', 'woff2', 'svg'],
      timestamp: timeStamp,
      log: () => {}
    }))
    .on('glyphs', (glyphs) => {
      const options = {
        config: config,
        main: main,
        glyphs: glyphs.map(mapGlyphs)
      };
      gulp.src(`${pathTemplates}/html-demo.mustache`)
        .pipe(consolidate('mustache', options))
        .pipe(rename({
          basename: `html-demo-${config.fontName}`,
          extname: ".html"
        }))
        .pipe(gulp.dest(`${path}/${config.fontName}/`));
      gulp.src(`${pathTemplates}/less/*.less`)
        .pipe(consolidate('mustache', options))
        .pipe(gulp.dest(`${path}/${config.fontName}/less/`));
      for (var glypx of options.glyphs) {
        namedbcomp[glypx.origin]['unicode'] = glypx.codepoint;
      }
      fs.writeFile(`${path}/${config.fontName}/db.json`, JSON.stringify(namedbcomp, null, "\t"), function(err) {
        if (err) {
          return console.log(err);
        }
      });
      return gulp.src(`${pathTemplates}/scss/*.scss`)
        .pipe(consolidate('mustache', options))
        .pipe(gulp.dest(`${path}/${config.fontName}/scss/`))
        .on('end', () => {
          gulp.src(`${path}/${config.fontName}/scss/style.scss`)
            .pipe(sass())
            .pipe(rename({
              basename: config.fontName,
            }))
            .pipe(gulp.dest(`${path}/${config.fontName}/css/`));
        })
        .on('end', () => {
          gulp.src(`${path}/${config.fontName}/scss/style.scss`)
            .pipe(sass({
              outputStyle: "compressed"
            }))
            .pipe(rename({
              basename: `${config.fontName}.min`,
            }))
            .pipe(gulp.dest(`${path}/${config.fontName}/css/`));
        });
    })
    .pipe(gulp.dest(`${path}/${config.fontName}/fonts/`));
});

function mapGlyphs(glyph) {
  var aliases = [];
  var temp = {};
  var origi = glyph.name;
  var isalias = false;
  if (typeof namedbcomp[glyph.name] == 'undefined') {
    for (var key of Object.keys(namedbcomp)) {
      if (typeof namedbcomp[key].alias != 'undefined') {
        for (var alias of namedbcomp[key].alias) {
          if (alias == glyph.name) {
            origi = key;
            isalias = true;
            aliases.push(key);
          }
        }
      }
    }
  }
  for (var pack of config.iconsPacks) {
    if (typeof namedb[pack][origi] != 'undefined') {
      if (typeof namedb[pack][origi].alias != 'undefined') {
        for (var alias of namedb[pack][origi].alias) {
          if (isalias == true && alias == origi) {
            continue;
          }
          aliases.push(alias);
        }
      }
    }
  }
  return {
    name: glyph.name,
    origin: origi,
    codepoint: (glyph.unicode[0].charCodeAt(0)).toString(16).toUpperCase(),
    names: aliases
  };
}
