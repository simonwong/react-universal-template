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
        overlay: true, // 编译错误时，将错误显示在页面上
        quiet: true, // 不输出打包的信息
        // compress: true, // gzip 压缩
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
})
