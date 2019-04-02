import gulp from "gulp";
import rename from "gulp-rename";
import uglify from "gulp-uglify";
import paths from "../paths";

gulp.task('compile-libraries', function (done) {
    gulp.src(paths.libraries)
        .pipe(rename(
            {dirname: "lib"}
        ))
        .pipe(uglify())
        .pipe(gulp.dest(paths.dest.scripts));
    done();
});