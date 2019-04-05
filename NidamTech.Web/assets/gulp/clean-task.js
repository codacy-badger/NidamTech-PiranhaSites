import gulp from "gulp";
import del from "del";
import paths from "../paths";
import gutil from "gulp-util";

gulp.task('clean', function (done) {
    del([paths.dest + "**/*"]).then(paths => {
        gutil.log('Deleted build folders:\n', paths.join('\n '))
        done()
    })
})