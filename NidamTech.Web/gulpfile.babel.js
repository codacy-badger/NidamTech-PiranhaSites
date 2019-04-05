import gulp from 'gulp'
import requireDir from 'require-dir'
import paths from './assets/paths'

requireDir('./assets/gulp', {recurse: true});

gulp.task('default', gulp.series('clean', 'webpack', function (done) {
    done()
}));

gulp.task('watch', gulp.series('default', 'bs-serve', function () {
    gulp.watch(paths.src + '**/*.scss', gulp.series('webpack', 'bs-reload:stream'));
    gulp.watch(paths.src + '**/*.js', gulp.series('webpack', 'bs-reload'));
    gulp.watch('**/*.cshtml', gulp.series('bs-reload'));
}));


