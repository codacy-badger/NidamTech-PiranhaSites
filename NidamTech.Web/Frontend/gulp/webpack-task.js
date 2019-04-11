import gulp from "gulp";
import gutil from 'gulp-util';
import webpack from "webpack-stream";
import named from 'vinyl-named';
import webpackconfig from '../webpack.config.js';

gulp.task('webpack', function () {
    return gulp.src([
        './src/base.js',
        './src/default-theme.js',
        './src/nidamtech-theme.js',
        './src/sundhedmedalette-theme.js',
    ])
        .pipe(named())
        .pipe(webpack(webpackconfig)
            .on('error', (err) => {
                gutil.log('WEBPACK ERROR', err);
            }))
        .pipe(gulp.dest('../wwwroot/'))
});