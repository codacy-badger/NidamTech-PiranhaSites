import gulp from "gulp";
import gutil from 'gulp-util';
import webpack from 'webpack-stream'
import webpackconfig from '../webpack.config.js';

gulp.task('webpack', function () {
    return gulp.src('./src/index.js')
        .pipe(webpack(webpackconfig))
        .on('error', (err) => {
            gutil.log('WEBPACK ERROR', err);
        })
        .pipe(gulp.dest('../wwwroot/'));
});