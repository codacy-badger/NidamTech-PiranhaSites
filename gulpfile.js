var gulp = require('gulp'),
    sass = require('gulp-sass'),
    watch = require('gulp-watch');
cssmin = require("gulp-cssmin");
rename = require("gulp-rename");

gulp.task('default', ['watch']);

gulp.task('watch', function () {
    gulp.watch('assets/scss/**/*.scss', ['min-css']);
    gulp.watch('assets/scss/*.scss', ['min-css']);
});

gulp.task('min:css', function () {
    return gulp.src('assets/scss/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(cssmin())
        .pipe(rename({
            suffix: ".min"
        }))
        .pipe(gulp.dest('wwwroot/css'));
});
