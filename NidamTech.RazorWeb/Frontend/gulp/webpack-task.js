import gulp from "gulp";
import plumber from 'gulp-plumber';
import webpack from 'webpack-stream'
import webpackdevconfig from '../webpack.development.js';
import webpackprodconfig from '../webpack.production.js';

gulp.task('webpack-development', function () {
    return gulp.src('./Frontend/src/index.js')
        .pipe(webpack(webpackdevconfig))
        .pipe(plumber())
        .pipe(gulp.dest('./wwwroot/'));
});

gulp.task('webpack-production', function () {
    return gulp.src('./Frontend/src/index.js')
        .pipe(webpack(webpackprodconfig))
        .pipe(plumber())
        .pipe(gulp.dest('./wwwroot/'));
}); 