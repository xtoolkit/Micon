/*! Micon v2.1.155 | MIT License | http://xtoolkit.github.io/Micon/ */

const gulp = require('gulp')
const rename = require('gulp-rename')
const iconfont = require('gulp-iconfont')
const consolidate = require('gulp-consolidate')

const path_templates = '.templates';
const path_www = 'www';
const config = require('./config.json')
const namedb = require('./name_db.json')
const cheet = require('./cheet.json')
const orgname = Object.keys(namedb);

gulp.task('ghmake', function() {
    const options = {
        config,
        namedb,
        orgname,
        cheet
    }
    gulp.src(`${path_templates}/sitemap.xml`)
        .pipe(consolidate('lodash', options))
        .pipe(gulp.dest(`${path_www}/`));
    gulp.src(`${path_templates}/index.html`)
        .pipe(consolidate('lodash', options))
        .pipe(gulp.dest(`${path_www}/`));
    gulp.src(`${path_templates}/examples/index.html`)
        .pipe(consolidate('lodash', options))
        .pipe(gulp.dest(`${path_www}/examples/`));
    gulp.src(`${path_templates}/get-started/index.html`)
        .pipe(consolidate('lodash', options))
        .pipe(gulp.dest(`${path_www}/get-started/`));
    gulp.src(`${path_templates}/changelogs/index.html`)
        .pipe(consolidate('lodash', options))
        .pipe(gulp.dest(`${path_www}/changelogs/`));
    gulp.src(`${path_templates}/icons/index.html`)
        .pipe(consolidate('lodash', options))
        .pipe(gulp.dest(`${path_www}/icons/`));
    gulp.src(`${path_templates}/cheatsheet/index.html`)
        .pipe(consolidate('lodash', options))
        .pipe(gulp.dest(`${path_www}/cheatsheet/`));
    for (i in orgname) {
        var loci = orgname[i];
        var options2 = {
            config,
            namedb,
            orgname,
            cheet,
            loci
        }
        gulp.src(`${path_templates}/icon/index.html`)
            .pipe(consolidate('lodash', options2))
            .pipe(gulp.dest(`${path_www}/icon/${loci}/`));
    }
});
gulp.task('cpath', function() {
    gulp.src([`${path_templates}/google6c10eba677472143.html`])
        .pipe(gulp.dest(`${path_www}/`));
    gulp.src([`${path_templates}/css/*.css`])
        .pipe(gulp.dest(`${path_www}/css/`));
    gulp.src([`${path_templates}/js/*.js`])
        .pipe(gulp.dest(`${path_www}/js/`));
    gulp.src([`${path_templates}/image/*`])
        .pipe(gulp.dest(`${path_www}/image/`));
    gulp.src([`${path_templates}/fonts/*`])
        .pipe(gulp.dest(`${path_www}/fonts/`));
});
gulp.task('gbuild', ['cpath', 'ghmake']);
