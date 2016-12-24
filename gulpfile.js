/*! Micon v2.0.0 | MIT License | http://xtoolkit.github.io/Micon/ */

const gulp = require('gulp')
const rename = require('gulp-rename')
const iconfont = require('gulp-iconfont')
const consolidate = require('gulp-consolidate')

const patch = 'dist'
const fontName = 'micon'
const fontVer = '2.0.155'
const className = 'mi'
const timestamp = Math.round(Date.now() / 1000)
var namedb = require('./name_db.json')

gulp.task('mimake', function() {
    return gulp.src(['icons/mdl2/*.svg', 'icons/webbrand/*.svg'])
        .pipe(iconfont({
            fontName,
            formats: ['ttf', 'eot', 'woff', 'woff2', 'svg'],
            timestamp,
            log: () => {}
        }))
        .on('glyphs', (glyphs) => {
            const options = {
                className,
                fontName,
                fontVer,
                namedb,
                fontPath: '../fonts/',
                glyphs: glyphs.map(mapGlyphs)
            }
            gulp.src(`templates/style-template.css`)
                .pipe(consolidate('lodash', options))
                .pipe(rename({
                    basename: fontName
                }))
                .pipe(gulp.dest(`${patch}/${fontName}/css/`))
            gulp.src(`templates/style-min-template.css`)
                .pipe(consolidate('lodash', options))
                .pipe(rename({
                    basename: fontName + '.min'
                }))
                .pipe(gulp.dest(`${patch}/${fontName}/css/`))
            gulp.src(`templates/html-template.html`)
                .pipe(consolidate('lodash', options))
                .pipe(rename({
                    basename: `html-demo-${fontName}`
                }))
                .pipe(gulp.dest(`${patch}/${fontName}/`))
        })
        .pipe(gulp.dest(`${patch}/${fontName}/fonts/`))
});

function mapGlyphs(glyph) {
    return {
        name: glyph.name,
        codepoint: glyph.unicode[0].charCodeAt(0)
    }
}
