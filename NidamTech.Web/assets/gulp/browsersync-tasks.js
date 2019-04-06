import gulp from 'gulp'
import {create} from 'browser-sync'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpack from "webpack";
import webpackConfig from '../../webpack.config'

const bundler = webpack(webpackConfig);
const bs1 = create('proxy1');
const bs2 = create('proxy2');

gulp.task('bs-reload', function (done) {
    bs1.reload();
    bs2.reload();
    done()
});

gulp.task('bs-reload:stream', function (done) {
    bs1.reload({stream: true});
    bs2.reload({stream: true});
    done()
});

gulp.task('bs-serve', gulp.series(function (done) {
    setTimeout(function () {
        bs1.init({
            proxy: 'http://localhost:5000',
            port: 3000,
            ui: {
                port: 3001
            },
            middleware: [
                webpackDevMiddleware(bundler),
            ]
        });
        bs2.init({
            proxy: 'http://sundhedmedalette:5000',
            port: 4000,
            ui: {
                port: 4000
            }
        });
        done()
    }, 9000)
}));
