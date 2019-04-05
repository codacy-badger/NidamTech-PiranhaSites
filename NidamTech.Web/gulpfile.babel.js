import gulp from 'gulp'
import del from 'del'
import requireDir from 'require-dir'
import paths from './assets/gulp/paths'

requireDir('./assets/gulp/tasks', { recurse: true })

gulp.task('clean', function (done) {
  del([paths.dest.styles, paths.dest.scripts]).then(paths => {
    console.log('Deleted build folders:\n', paths.join('\n '))
    done()
  })
})

gulp.task('default', gulp.series('clean', gulp.parallel('compile-styles', 'compile-scripts', 'compile-libraries'), function (done) {
  done()
}))

gulp.task('watch', gulp.series('default', 'bs-serve', function () {
  gulp.watch(paths.src.styles + '**/*.scss', gulp.series('compile-styles', 'bs-reload:stream'))
  gulp.watch(paths.src.scripts + '**/*.js', gulp.series('compile-scripts', 'bs-reload'))
  gulp.watch('**/*.cshtml', gulp.series('bs-reload'))
}))
