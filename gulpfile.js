// Load plugins
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    cssmin = require('gulp-cssmin'),
    rename = require('gulp-rename');

// Styles
gulp.watch('assets/scss/base/style.scss', baseTask());
gulp.watch('assets/scss/themes/**/*-theme.scss', themesTask());
gulp.task('default', function () {
    baseTask();
    themesTask();
});

function baseTask() {
    return gulp.src('assets/scss/base/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(cssmin())
        .pipe(rename({
            suffix: ".min"
        }))
        .pipe(gulp.dest('wwwroot/css'));
}

function themesTask() {
    return gulp.src('assets/scss/themes/**/*-theme.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(cssmin())
        .pipe(rename({
            suffix: ".min"
        }))
        .pipe(gulp.dest('wwwroot/css'));
};
