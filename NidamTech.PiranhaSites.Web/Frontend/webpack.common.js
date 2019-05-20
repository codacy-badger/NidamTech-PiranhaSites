import postcssconfig from "./postcss.config"
import StatsPlugin from 'stats-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

module.exports = {
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
        new StatsPlugin('stats-full.json', {
            all: true
        }),
        new StatsPlugin('stats-assets.json', {
            all: false,
            assets: true
        })
    ],
    node: {
        fs: 'empty'
    },
    module:
        {
            rules: [
                {
                    test: /\.scss$/,
                    use: [
                        {loader: MiniCssExtractPlugin.loader,},
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