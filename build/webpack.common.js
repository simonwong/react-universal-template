const path = require('path')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const PATHS = {
    public: path.join(__dirname, '../public'),
    src: path.join(__dirname, '../src'),
}
const cssLoader = [
    'style-loader', // loader需要按顺序
    {
        loader: 'css-loader',
        options: {
            modules: true, // css模块加载
            localIdentName: '[name]-[local]-[hash:base64:5]', // class的命名，文件名+类名+哈希
            importLoaders: 1
        }
    },
    'postcss-loader',
]

module.exports = {
    entry: {
        app: [
            'react-hot-loader/patch',
            path.join(PATHS.src, 'dist'),
        ],
        // vendor: [ 'react', 'react-dom', 'react-router-dom' ]
    },
    output: {
        filename: '[name]-[hash:8].js',
        publicPath: PATHS.public,
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: cssLoader,
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    ...cssLoader,
                    'sass-loader',
                ]
            },
            {
                test: /\.(png|jpg|gif|JPG|GIF|PNG|BMP|bmp|JPEG|jpeg)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                        }
                    }
                ]
            },
            {
                test: /\.(eot|woff|ttf|woff2|svg)$/,
                use: 'url-loader',
            }
        ]
    },
    resolve: {
        // 配置默认拓展名。在import的时候就不用写后缀了
        extensions: [ '.js', '.jsx', '.scss' ],
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'React App',
            template: './template/index.html'
            // favicon: path.join(PATHS.public, 'favicon.ico'),
            // hash: true,
            // meta: {
            //     viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'
            // },
        }),
    ]
}