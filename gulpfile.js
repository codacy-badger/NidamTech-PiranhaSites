const gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    minifycss = require('gulp-cssmin'),
    sass = require('gulp-sass');
const bs1 = require('browser-sync').create("proxy1");
const bs2 = require('browser-sync').create("proxy2");

const libraries = ['node_modules/jquery/dist/jquery.slim.min.js', 'node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'];

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
    done();
});

gulp.task('libraries', function (done) {
    return gulp.src(libraries)
        .pipe(rename(
            {dirname: "lib"}
        ))
        .pipe(uglify())
        .pipe(gulp.dest('wwwroot/js/'))
    done();
});

gulp.task('bs-reload', function (done) {
    bs1.reload();
    bs2.reload();
    done();
});

gulp.task('default', gulp.series(gulp.parallel('styles', 'scripts', 'libraries'), function (done) {
    done();
}));

gulp.task('serve', gulp.series('default', function (done) {
    //TODO: Find a better solution, so it waits for .NET Core build to be done, or pings the server. 
    setTimeout(function () {
        bs1.init({
            proxy: "http://localhost:5000",
            port: 3000,
            ui: {
                port: 3001
            }
        });
        bs2.init({
            proxy: "http://sundhedmedalette:5000",
            port: 4000,
            ui: {
                port: 4000
            }
        });
        done();
    }, 9000);
}));


gulp.task('watch', gulp.series('serve', function () {
    gulp.watch("assets/scss/**/*.scss", gulp.series('styles'));
    gulp.watch("assets/js/**/*.js", gulp.series('scripts', 'bs-reload'))
    gulp.watch("**/*.cshtml", gulp.series('bs-reload'));
}));




