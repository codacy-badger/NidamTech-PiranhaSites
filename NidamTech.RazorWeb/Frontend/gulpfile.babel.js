import gulp from 'gulp'
import requireDir from 'require-dir'

requireDir('./gulp', {recurse: true});

gulp.task('default', gulp.series('clean', 'webpack', function (done) {
    done()
}));

gulp.task('watch', gulp.series('default', 'bs-serve', function () {
    gulp.watch('./src/**/*.scss', gulp.series('webpack', 'bs-reload'));
    gulp.watch('./src/**/*.js', gulp.series('webpack', 'bs-reload'));
    gulp.watch('../Views/**/*.cshtml', gulp.series('bs-reload'));
}));


