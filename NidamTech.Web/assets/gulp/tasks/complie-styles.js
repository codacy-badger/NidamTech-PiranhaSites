import gulp from "gulp";
import autoprefixer from "gulp-autoprefixer";
import sass from "gulp-sass";
import cleancss from "gulp-clean-css";
import rename from "gulp-rename";
import plumber from "gulp-plumber";
import paths from "../paths";

gulp.task('compile-styles', function (done) {
    gulp.src(paths.src.styles + '**/*.scss')
        .pipe(plumber({
            errorHandler: function (error) {
                console.log(error.message);
                this.emit('end');
            }
        }))
        .pipe(sass())
        .pipe(autoprefixer('last 2 versions'))
        .pipe(rename({dirname: "", suffix: '.min',}))
        .pipe(cleancss())
        .pipe(gulp.dest(paths.dest.styles))
    done();
});