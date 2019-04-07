import gulp from "gulp";
import paths from "../paths";
import webpack from "webpack-stream";
import webpackconfig from '../../webpack.config.js'
import named from 'vinyl-named'

gulp.task('webpack', function () {
    return gulp.src([
        paths.src+ 'base.js',
        paths.src + "default-theme.js",
        paths.src + 'nidamtech-theme.js',
        paths.src + 'sundhedmedalette-theme.js',
    ])
        .pipe(named())
        .pipe(webpack(
            webpackconfig
        ))
        .pipe(gulp.dest(paths.dest))
});