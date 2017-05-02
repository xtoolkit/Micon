/*! Micon v2.2.155 | MIT License | http://xtoolkit.github.io/Micon/ */

const gulp = require('gulp')
const rename = require('gulp-rename')
const iconfont = require('gulp-iconfont')
const consolidate = require('gulp-consolidate')

const path = 'distx'
const path_templates = '.templates'
const fontName = 'micon'
const fontVer = '2.2.155'
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
            gulp.src(`${path_templates}/css/style.css`)
                .pipe(consolidate('lodash', options))
                .pipe(rename({
                    basename: fontName
                }))
                .pipe(gulp.dest(`${path}/${fontName}/css/`))
            gulp.src(`${path_templates}/css/style-min.css`)
                .pipe(consolidate('lodash', options))
                .pipe(rename({
                    basename: fontName + '.min'
                }))
                .pipe(gulp.dest(`${path}/${fontName}/css/`))
            gulp.src(`${path_templates}/html-demo.html`)
                .pipe(consolidate('lodash', options))
                .pipe(rename({
                    basename: `html-demo-${fontName}`
                }))
                .pipe(gulp.dest(`${path}/${fontName}/`))
            gulp.src([`${path_templates}/scss/_*.scss`])
                .pipe(consolidate('lodash', options))
                .pipe(gulp.dest(`${path}/${fontName}/scss/`))
            gulp.src(`${path_templates}/scss/style.scss`)
                .pipe(consolidate('lodash', options))
                .pipe(rename({
                    basename: `${fontName}`
                }))
                .pipe(gulp.dest(`${path}/${fontName}/scss`))
            gulp.src([`${path_templates}/less/animated.less`, `${path_templates}/less/bordered-pulled.less`, `${path_templates}/less/core.less`, `${path_templates}/less/fixed-width.less`, `${path_templates}/less/icons.less`, `${path_templates}/less/larger.less`, `${path_templates}/less/list.less`, `${path_templates}/less/mixins.less`, `${path_templates}/less/path.less`, `${path_templates}/less/rotated-flipped.less`, `${path_templates}/less/screen-reader.less`, `${path_templates}/less/stacked.less`, `${path_templates}/less/variables.less`])
                .pipe(consolidate('lodash', options))
                .pipe(gulp.dest(`${path}/${fontName}/less/`))
            gulp.src(`${path_templates}/less/style.less`)
                .pipe(consolidate('lodash', options))
                .pipe(rename({
                    basename: `${fontName}`
                }))
                .pipe(gulp.dest(`${path}/${fontName}/less`))
        })
        .pipe(gulp.dest(`${path}/${fontName}/fonts/`))
});
function mapGlyphs(glyph) {
    return {
        name: glyph.name,
        codepoint: glyph.unicode[0].charCodeAt(0)
    }
}
