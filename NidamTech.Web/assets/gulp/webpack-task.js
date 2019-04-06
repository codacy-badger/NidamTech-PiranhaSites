import gulp from "gulp";
import paths from "../paths";
import webpack from "webpack-stream";
import webpackconfig from '../../webpack.config.js'
import named from 'vinyl-named'

gulp.task('webpack', function (done) {
    gulp.src([
        paths.webpack + 'base.js',
        paths.webpack + "default-theme.js",
        paths.webpack + 'nidamtech-theme.js',
        paths.webpack + 'sundhedmedalette-theme.js',
    ])
        .pipe(named())
        .pipe(webpack(
            webpackconfig
        ))
        .pipe(gulp.dest(paths.dest))
    done();
});