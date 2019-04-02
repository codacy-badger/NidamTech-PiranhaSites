import gulp from "gulp";
import uglify from "gulp-uglify";
import concat from "gulp-concat";
import rename from "gulp-rename";
import plumber from "gulp-plumber";
import paths from "../paths";

gulp.task('compile-scripts', function (done) {
    gulp.src(paths.src.scripts + '**/*.js')
        .pipe(plumber({
            errorHandler: function (error) {
                console.log(error.message);
                this.emit('end');
            }
        }))
        .pipe(concat('main.js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest(paths.dest.scripts));
    done();
});