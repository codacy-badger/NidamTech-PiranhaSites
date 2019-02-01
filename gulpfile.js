var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    minifycss = require('gulp-cssmin'),
    sass = require('gulp-sass');
var bs1 = require('browser-sync').create("proxy1");
var bs2 = require('browser-sync').create("proxy2");


gulp.task('styles', function (done) {
    return gulp.src(['assets/scss/**/*.scss'])
        .pipe(plumber({
            errorHandler: function (error) {
                console.log(error.message);
                this.emit('end');
            }
        }))
        .pipe(sass())
        .pipe(autoprefixer('last 2 versions'))
        .pipe(rename({dirname: "", suffix: '.min',}))
        .pipe(minifycss())
        .pipe(gulp.dest('wwwroot/css/'))
        .pipe(bs1.stream())
        .pipe(bs2.stream())
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
        .pipe(bs1.reload({stream: true}))
        .pipe(bs2.reload({stream: true}))
    done();
});

gulp.task('bs-reload', function (done) {
    bs1.reload();
    bs2.reload();
    done();
});

gulp.task('serve', gulp.series(gulp.parallel('styles', 'scripts'), function (done) {
    setTimeout(function () {
        bs1.init({
            proxy: "http://localhost:5000",
            port: 3000,
            ui: {
                port: 3001
            }
        }, function () {
            bs1.reload('**/*.css');
        });
        bs2.init({
            proxy: "http://sundhedmedalette:5000",
            port: 4000,
            ui: {
                port: 4000
            }
        }, function () {
            bs2.reload('**/*.css');
        });
        done();
    }, 7000);
}));

gulp.task('default', gulp.series('serve', function () {
    gulp.watch("assets/scss/**/*.scss", gulp.series('styles'));
    gulp.watch("assets/js/**/*.js", gulp.series('scripts'))
    gulp.watch("Views/**/*.cshtml", gulp.series('bs-reload'));
    gulp.watch("Areas/Manager/Views/**/*.cshtml", gulp.series('bs-reload'));
}));




