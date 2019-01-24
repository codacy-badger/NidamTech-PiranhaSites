//Plugins - Must be installed with NPM
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    cssmin = require("gulp-cssmin"),
    rename = require("gulp-rename"),
    uglify = require("gulp-uglify"),
    concat = require("gulp-concat"),
    browserSync = require('browser-sync').create();

//Inputs
var inputJS = {
    js: [
        //Path to js here
    ]
};
var inputSCSS_all = 'assets/scss/**/**/*.scss';
var inputSCSS_base = 'assets/scss/base/style.scss';
var inputSCSS_themes = 'assets/scss/themes/**/*-theme.scss';

//Tasks
gulp.task('default', function () {
    return minifyBase(), minifyThemes()/*,minifyScripts()*/;
});

gulp.task('watch', function () {
    setTimeout(function () {
        browserSync.init({
            proxy: "localhost:5000",
        });
    }, 10000);
    gulp.watch(inputSCSS_all, minifyBase, minifyThemes).on('change', browserSync.reload);
    //gulp.watch(inputJS, minifyScript()).on('change', browserSync.reload);
});


//Methods
function minifyBase() {
    return gulp.src(inputSCSS_base)
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
    return gulp.src(inputSCSS_themes)
        .pipe(sass().on('error', sass.logError))
        .pipe(cssmin())
        .pipe(rename({
            dirname: "themes",
            suffix: ".min"
        }))
        .pipe(gulp.dest('wwwroot/css'))
        .pipe(browserSync.stream());
}

function minifyScripts() {
    return gulp.src(inputJS.js, {base: "."})
        .pipe(uglify())
        .pipe(concat('main.js'))
        .pipe(rename({
            dirname: "",
            suffix: ".min"
        }))
        .pipe(gulp.dest('wwwroot/js'))
        .pipe(browserSync.stream());
}

