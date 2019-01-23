// Load plugins
var browserSync = require('browser-sync').create();
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    cssmin = require('gulp-cssmin'),
    rename = require('gulp-rename');

//Tasks
gulp.task('default', function () {
    return minifyBase(), minifyThemes();
});

gulp.task('watch', function () {
    setTimeout(function() {
        browserSync.init({
            proxy: "localhost:5000",
        });
    }, 10000);
    gulp.watch('assets/scss/base/**/**/*.scss', minifyBase).on('change', browserSync.reload);
    gulp.watch('assets/scss/themes/**/**/**/*.scss', minifyThemes).on('change', browserSync.reload);
});


//Methods
function minifyBase() {
    return gulp.src('assets/scss/base/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(cssmin())
        .pipe(rename({
            dirname: "base",
            suffix: ".min"
        }))
        .pipe(gulp.dest('wwwroot/css'))
        .pipe(browserSync.stream());
}

function minifyThemes() {
    return gulp.src('assets/scss/themes/**/*-theme.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(cssmin())
        .pipe(rename({
            dirname: "themes",
            suffix: ".min"
        }))
        .pipe(gulp.dest('wwwroot/css'))
        .pipe(browserSync.stream());
};
