import merge from 'webpack-merge'
import common from './webpack.common.js'

module.exports = merge(common, {
    mode: 'development',
    output: {
        filename: '[name].js',
        chunkFilename: 'chunks/[name].js'
    }, 
    devtool: 'inline-source-map'
});