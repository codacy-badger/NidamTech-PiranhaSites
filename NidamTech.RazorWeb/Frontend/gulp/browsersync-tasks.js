import gulp from 'gulp'
import {create} from 'browser-sync'

const bs1 = create('nikolaiemildammproxy');
const bs2 = create('nidamtechproxy');
const bs3 = create('sundhedmedaletteproxy');

gulp.task('bs-reload', function (done) {
    bs1.reload();
    bs2.reload();
    bs3.reload();
    done()
});

gulp.task('bs-reload:stream', function (done) {
    bs1.reload({stream: true});
    bs2.reload({stream: true});
    bs3.reload({stream: true});
    done()
});

gulp.task('bs-serve', gulp.series(function (done) {
    setTimeout(function () {
        bs1.init({
            proxy: 'http://nikolaiemildamm:5000',
            port: 3000,
            ui: {
                port: 3001
            }
        });
        bs2.init({
            proxy: 'http://nidamtech:5000',
            port: 3010,
            ui: {
                port: 3011
            }
        });
        bs3.init({
            proxy: 'http://sundhedmedalette:5000',
            port: 3020,
            ui: {
                port: 3021
            }
        });
        done();
    }, 9000)
}));
