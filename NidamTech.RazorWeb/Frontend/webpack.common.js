import postcssconfig from "./postcss.config"
import webpack from 'webpack'
import fs from "fs"
import path from "path"

module.exports = {
    output: {
        chunkFilename:
            'chunks/[name].[chunkhash].js',
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            Popper: ['popper.js', 'default']
        }),
        function () {
            this.plugin("done", function (stats) {
                fs.writeFileSync(
                    path.join("", "webpackstats.json"),
                    JSON.stringify(stats.toJson()));
            });
        },
    ],
    module:
        {
            rules: [
                {
                    test: /\.scss$/,
                    use: [
                        {loader: 'style-loader',},
                        {loader: 'css-loader',},
                        {loader: 'postcss-loader', options: postcssconfig},
                        {loader: 'sass-loader'},
                        {loader: 'webpack-import-glob-loader',}
                    ]
                },
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: [
                        {loader: 'babel-loader',},
                        {loader: 'eslint-loader',},
                        {loader: 'webpack-import-glob-loader',}
                    ]
                }]
        }
};