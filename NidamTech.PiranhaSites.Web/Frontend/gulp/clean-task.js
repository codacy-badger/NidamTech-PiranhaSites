import gulp from "gulp";
import del from "del";
import gutil from "gulp-util";

gulp.task('clean', function () {
    return del("./wwwroot/**/*", {force: true}).then(paths => {
        gutil.log('Deleted build folders:\n', paths.join('\n '))
    })
})