const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')

const PATHS = {
    dist: path.join(__dirname, '../dist'),
}

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: PATHS.dist,
        historyApiFallback: true,
        hot: true,
        inline: true,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
})
