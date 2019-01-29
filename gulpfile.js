//Plugins - Must be installed with NPM
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    cssmin = require("gulp-cssmin"),
    autoprefixer = require("gulp-autoprefixer"),
    rename = require("gulp-rename"),
    uglify = require("gulp-uglify"),
    concat = require("gulp-concat"),
    browserSync = require('browser-sync').create();

//Input & output paths
var inputJS = {
    js: [
        //Path to js here
    ]
};
var outputJS = 'wwwroot/js';
var inputSCSS = 'assets/scss/**/*.scss';
var inputSCSS_themes = 'assets/scss/themes/**/*.scss';
var inputSCSS_base = 'assets/scss/base/**/*.scss';
var outputCSS = 'wwwroot/css';

//Tasks
gulp.task('default', function () {
    return minifySCSS_base(), minifySCSS_themes() /*,minifyScripts()*/;
});

gulp.task('watch', function () {
    setTimeout(function () {
        browserSync.init({
            proxy: "localhost:5000",
            port: 5000
        });
    }, 10000);
    gulp.watch("Views/**/**/*.cshtml").on('change', browserSync.reload);
    gulp.watch(inputSCSS.scss, minifySCSS_base, minifySCSS_themes).on('change', browserSync.reload);
    //gulp.watch(inputJS, minifyScript()).on('change', browserSync.reload);
});


//Methods
function minifySCSS_base() {
    return gulp.src(inputSCSS_base)
        .pipe(sass().on('error', sass.logError))
        .pipe(cssmin())
        .pipe(autoprefixer())
        .pipe(rename({
            suffix: ".min"
        }))
        .pipe(gulp.dest(outputCSS))
        .pipe(browserSync.stream());
}

function minifySCSS_themes() {
    return gulp.src(inputSCSS_themes)
        .pipe(sass().on('error', sass.logError))
        .pipe(cssmin())
        .pipe(autoprefixer())
        .pipe(rename({
            dirname: "themes",
            suffix: ".min"
        }))
        .pipe(gulp.dest(outputCSS))
        .pipe(browserSync.stream());
}

function minifyScripts() {
    return gulp.src(inputJS.js, {base: "."})
        .pipe(uglify())
        .pipe(concat('main.js'))
        .pipe(rename(path)({
            suffix: ".min"
        }))
        .pipe(gulp.dest(outputJS))
        .pipe(browserSync.stream());
}



