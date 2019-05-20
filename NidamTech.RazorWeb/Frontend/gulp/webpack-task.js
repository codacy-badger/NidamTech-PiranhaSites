import gulp from "gulp";
import plumber from 'gulp-plumber';
import webpack from 'webpack-stream'
import named from 'vinyl-named';
import webpackdevconfig from '../webpack.development.js';
import webpackprodconfig from '../webpack.production.js';

gulp.task('webpack', function () {
    const correctconfig = process.env.NODE_ENV === "production" ? webpackprodconfig : webpackdevconfig;
    return gulp.src(['./Frontend/src/scripts.js', './Frontend/src/styles.js'])
        .pipe(named())
        .pipe(webpack(correctconfig))
        .pipe(plumber())
        .pipe(gulp.dest('./wwwroot/'));
});
