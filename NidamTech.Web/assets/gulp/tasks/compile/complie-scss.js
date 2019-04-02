const gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename'),
    cleancss = require('gulp-clean-css'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('compile-scss', function (done) {
    gulp.src(['assets/scss/**/*.scss'])
        .pipe(plumber({
            errorHandler: function (error) {
                console.log(error.message);
                this.emit('end');
            }
        }))
        .pipe(sass())
        .pipe(autoprefixer('last 2 versions'))
        .pipe(rename({dirname: "", suffix: '.min',}))
        .pipe(cleancss())
        .pipe(gulp.dest('wwwroot/css/'))
    done();
});