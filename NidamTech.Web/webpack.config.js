import postcssconfig from "./postcss.config"
import path from 'path'

module.exports = {
    mode: "none",
    output: {
        path: path.resolve('./wwwroot/'),
        filename: '[name].bundle.js',
    },
    externals: {
        jQuery: "jQuery"
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {loader: 'style-loader',},
                    {loader: 'css-loader',},
                    {loader: 'postcss-loader', options: postcssconfig},
                    {loader: 'sass-loader'}
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'eslint-loader']
            }]
    }
};