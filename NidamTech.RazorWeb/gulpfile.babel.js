import gulp from 'gulp'
import requireDir from 'require-dir'

requireDir('./Frontend/gulp', {recurse: true});

gulp.task('default', gulp.series('clean', 'webpack-development', function (done) {
    done()
}));

gulp.task('production', gulp.series('clean', 'webpack-production', function (done) {
    done()
}));

gulp.task('watch', gulp.series('bs-serve', function () {
    gulp.watch('./Frontend/src/**/*.scss', gulp.series('webpack-development', 'bs-reload'));
    gulp.watch('./Frontend/src/**/*.js', gulp.series('webpack-development', 'bs-reload'));
    gulp.watch('./Pages/**/*.cshtml', gulp.series('bs-reload'));
}));

