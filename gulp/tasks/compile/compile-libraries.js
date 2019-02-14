const gulp = require('gulp'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify');

const libraries = ['node_modules/jquery/dist/jquery.slim.min.js', 'node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'];
gulp.task('compile-libraries', function (done) {
    gulp.src(libraries)
        .pipe(rename(
            {dirname: "lib"}
        ))
        .pipe(uglify())
        .pipe(gulp.dest('wwwroot/js/'));
    done();
});