const gulp = require('gulp'),
    requireDir = require('require-dir');

requireDir('./gulp/tasks', {recurse: true});

gulp.task('default', gulp.series(gulp.parallel('compile-scss', 'compile-scripts', 'compile-libraries'), function (done) {
    done();
}));

gulp.task('watch', gulp.series('default', 'bs-serve', function () {
    gulp.watch("assets/scss/**/*.scss", gulp.series('compile-scss', 'bs-reload:stream'));
    gulp.watch("assets/js/**/*.js", gulp.series('compile-scripts', 'bs-reload'));
    gulp.watch("**/*.cshtml", gulp.series('bs-reload'));
}));




