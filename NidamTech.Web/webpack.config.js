import postcssconfig from "./postcss.config"

module.exports = {
    mode: "none",
    output: {
        filename: '[name].bundle.js',
    },
    externals: {
        jQuery: "jQuery"
    },
    module: {
        rules: [{
            test: /\.(scss)$/,
            use: [{loader: 'style-loader',},
                {loader: 'css-loader',},
                {loader: 'postcss-loader', options: postcssconfig},
                {loader: 'sass-loader'}]
        },]
    }
};