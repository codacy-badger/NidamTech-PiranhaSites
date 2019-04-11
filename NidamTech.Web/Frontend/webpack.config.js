import postcssconfig from "./postcss.config"
import path from 'path'
import webpack from 'webpack'

module.exports = {
    mode: "none",
    output: {
        path: path.resolve('./wwwroot/'),
        filename: '[name].bundle.js',
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            Popper: ['popper.js', 'default']
        })
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {loader: 'style-loader',},
                    {loader: 'css-loader',},
                    {loader: 'postcss-loader', options: postcssconfig},
                    {loader: 'sass-loader'},
                    { loader: 'webpack-import-glob-loader', }
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    { loader: 'babel-loader', },
                    { loader: 'eslint-loader', },
                    { loader: 'webpack-import-glob-loader', }
                ]
            }]
    }
};