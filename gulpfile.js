// Load plugins
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    cssmin = require('gulp-cssmin'),
    rename = require('gulp-rename');

// Tasks
gulp.task('watch', function () {
    gulp.watch('assets/scss/base/**/*.scss', minifyBase);
    gulp.watch('assets/scss/themes/**/**/*.scss', minifyThemes);
});

gulp.task('default', function () {
    return minifyBase(), minifyThemes();
});

function minifyBase() {
    return gulp.src('assets/scss/base/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(cssmin())
        .pipe(rename({
            suffix: ".min"
        }))
        .pipe(gulp.dest('wwwroot/css'));
}

function minifyThemes() {
    return gulp.src('assets/scss/themes/**/*-theme.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(cssmin())
        .pipe(rename({
            suffix: ".min"
        }))
        .pipe(gulp.dest('wwwroot/css'));
};
