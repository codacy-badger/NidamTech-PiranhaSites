var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minifycss = require('gulp-cssmin');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');

var bs1 = browserSync.create("proxy1");
var bs2 = browserSync.create("proxy2");
var bs3 = browserSync.create("proxy3");


gulp.task('browser-sync', function () {
    bs1.init({
        proxy: "http://sundhedmedalette:5000",
        port: 2000,
        ui: {
            port: 2001
        }
    });
    bs2.init({
        proxy: "http://localhost:5000",
        port: 3000,
        ui: {
            port: 3001
        }
    });
    bs3.init({
        proxy: "http://nidam-corp:5000",
        port: 4000,
        ui: {
            port: 4001
        }
    });
});

gulp.task('bs-reload', function () {
    browserSync.reload();
});

gulp.task('styles', function (done) {
    gulp.src(['assets/scss/**/*.scss'])
        .pipe(plumber({
            errorHandler: function (error) {
                console.log(error.message);
                this.emit('end');
            }
        }))
        .pipe(sass())
        .pipe(autoprefixer('last 2 versions'))
        .pipe(rename({dirname: "", suffix: '.min', }))
        .pipe(minifycss())
        .pipe(gulp.dest('wwwroot/css/'))
        .pipe(browserSync.reload({stream: true}))
    done();
});

gulp.task('scripts', function (done) {
    return gulp.src('assets/js/**/*.js')
        .pipe(plumber({
            errorHandler: function (error) {
                console.log(error.message);
                this.emit('end');
            }
        }))
        .pipe(concat('main.js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('wwwroot/js/'))
        .pipe(browserSync.reload({stream: true}))
    done();
});

gulp.task('default', gulp.series('browser-sync', function () {
    gulp.watch("assets/scss/**/*.scss", ['styles']);
    gulp.watch("assets/js/**/*.js", ['scripts']);
    gulp.watch("Views//**/*.cshtml", ['bs-reload']);
}));







