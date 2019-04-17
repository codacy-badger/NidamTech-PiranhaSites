import merge from 'webpack-merge'
import common from './webpack.common.js'

module.exports = merge(common, {
    mode: 'production',
    output: {
        filename: '[name].[hash].js',
    }
});
