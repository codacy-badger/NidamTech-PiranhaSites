import gulp from 'gulp'
import requireDir from 'require-dir'

requireDir('./Frontend/gulp', {recurse: true});

gulp.task('default', gulp.series('clean', 'webpack', function (done) {
    done()
}));

gulp.task('watch', gulp.series('bs-serve', function () {
    gulp.watch('./Frontend/src/**/*.scss', gulp.series('webpack', 'bs-reload'));
    gulp.watch('./Frontend/src/**/*.js', gulp.series('webpack', 'bs-reload'));
    gulp.watch('./Pages/**/*.cshtml', gulp.series('bs-reload'));
}));


