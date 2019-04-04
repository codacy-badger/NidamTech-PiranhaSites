import gulp from 'gulp'
import {create} from 'browser-sync'

const bs1 = create('proxy1')
const bs2 = create('proxy2')
gulp.task('bs-reload', function (done) {
    bs1.reload()
    bs2.reload()
    done()
})

gulp.task('bs-reload:stream', function (done) {
    bs1.reload({stream: true})
    bs2.reload({stream: true})
    done()
})

gulp.task('bs-serve', gulp.series(function (done) {
    // TODO: Find a better solution, so it waits for .NET Core build to be done, or pings the server.
    setTimeout(function () {
        bs1.init({
            proxy: 'http://localhost:5000',
            port: 3000,
            ui: {
                port: 3001
            }
        })
        bs2.init({
            proxy: 'http://sundhedmedalette:5000',
            port: 4000,
            ui: {
                port: 4000
            }
        })
        done()
    }, 9000)
}))
