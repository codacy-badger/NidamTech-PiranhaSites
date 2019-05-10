import postcssconfig from "./postcss.config"
import fs from "fs"
import path from "path"

module.exports = {
    output: {
        chunkFilename:
            'chunks/[name].[chunkhash].js',
    },
    plugins: [
        function () {
            this.plugin("done", function (stats) {
                fs.writeFileSync(
                    path.join("./Frontend", "webpackstats.json"),
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