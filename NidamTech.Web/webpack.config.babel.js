import path from "path";
import paths from "./assets/paths"
import precss from "precss";
import autoprefixer from "autoprefixer";
import CleanWebpackPlugin from "clean-webpack-plugin";
import BrowserSyncPlugin from "browser-sync-webpack-plugin";

module.exports = {
    mode: "none",
    watch: true,
    entry: {
        base: paths.webpackFolder + 'base.js',
        default_theme: paths.webpackFolder + "default-theme.js",
        nidamtech_theme: paths.webpackFolder + 'nidamtech-theme.js',
        sundhedmedalette_theme: paths.webpackFolder + 'sundhedmedalette-theme.js',
    }, plugins: [
        new CleanWebpackPlugin(),
        new BrowserSyncPlugin(
            // BrowserSync options
            {
                // browse to http://localhost:3000/ during development
                host: 'localhost',
                port: 3000,
                // proxy the Webpack Dev Server endpoint
                // (which should be serving on http://localhost:3100/)
                // through BrowserSync
                proxy: 'http://localhost:5001/'
            },
            // plugin options
            {
                // prevent BrowserSync from reloading the page
                // and let Webpack Dev Server take care of this
                reload: false
            }
        )
    ],
    output: {
        filename: '[name].bundle.js',
        path:
            path.resolve(paths.destFolder)
    },
    externals: {
        jQuery: "jQuery"
    },
    module: {
        rules: [
            {
                test: /\.(scss)$/,
                use: [{
                    loader: 'style-loader', // inject CSS to page
                }, {
                    loader: 'css-loader', // translates CSS into CommonJS modules
                }, {
                    loader: 'postcss-loader', // Run post css actions
                    options: {
                        plugins: function () { // post css plugins, can be exported to postcss.config.js
                            return [
                                precss,
                                autoprefixer
                            ];
                        }
                    }
                }, {
                    loader: 'sass-loader' // compiles Sass to CSS
                }]
            },
        ]
    }
};