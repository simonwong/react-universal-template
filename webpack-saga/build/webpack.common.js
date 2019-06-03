const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')

const PATHS = {
    build: __dirname,
    public: path.join(__dirname, '../public'),
    src: path.join(__dirname, '../src'),
    dist: path.join(__dirname, '../dist'),
}

module.exports = {
    entry: {
        app: [
            // 'react-hot-loader/patch',
            path.join(PATHS.src, 'index'),
        ],
        // vendor: ['react', 'react-dom', 'react-router-dom'],
    },
    output: {
        filename: '[name].[hash:8].js',
        // publicPath: PATHS.public,
        path: PATHS.dist,
    },
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                // 将第三方模块提取出来
                vendors: {
                    test: /node_modules/,
                    name: 'vendors',
                    enforce: true,
                    chunks: 'initial',
                },
            },
        },
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader?cacheDirectory',
                    'react-hot-loader/webpack',
                ],
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true, // css模块加载
                            localIdentName: '[name]-[local]-[hash:base64:5]', // class的命名，文件名+类名+哈希
                            importLoaders: 1,
                        },
                    },
                    'postcss-loader',
                ],
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true, // css模块加载
                            localIdentName: '[name]-[local]-[hash:base64:5]', // class的命名，文件名+类名+哈希
                            importLoaders: 2,
                        },
                    },
                    'postcss-loader',
                    'sass-loader',
                ],
            },
            // {
            //     test: /\.(png|jpg|gif|JPG|GIF|PNG|BMP|bmp|JPEG|jpeg)$/,
            //     exclude: /node_modules/,
            //     use: [
            //         {
            //             loader: 'url-loader',
            //             options: {
            //                 limit: 8192,
            //             },
            //         },
            //     ],
            // },
            // {
            //     test: /\.(eot|woff|ttf|woff2|svg)$/,
            //     use: 'url-loader',
            // },
        ],
    },
    resolve: {
        // 配置默认拓展名。在import的时候就不用写后缀了
        extensions: ['.js', '.jsx', '.scss'],
        alias: {
            Components: path.join(PATHS.src, 'components'),
            Containers: path.join(PATHS.src, 'containers'),
            '@': path.join(PATHS.src),
            'react-dom': '@hot-loader/react-dom',
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'React App',
            template: path.join(PATHS.build, 'template/index.html'),
            favicon: path.join(PATHS.public, 'favicon.ico'),
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css',
        }),
    ],
}
