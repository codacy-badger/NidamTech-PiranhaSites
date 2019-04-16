import postcssconfig from "./postcss.config"
import webpack from 'webpack'

module.exports = {
    mode: "none",
    output: {
        filename: '[name].js?[hash]',
        chunkFilename: 'chunks/[name].[chunkhash].js',
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