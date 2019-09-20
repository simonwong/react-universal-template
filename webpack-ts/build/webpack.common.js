const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const Webpackbar = require('webpackbar')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const PATHS = {
    build: __dirname,
    public: path.join(__dirname, '../public'),
    src: path.join(__dirname, '../src'),
    dist: path.join(__dirname, '../dist'),
}

module.exports = {
    entry: {
        app: path.join(PATHS.src, 'index.tsx'),
        // app: [
        //     // 'react-hot-loader/patch',
        //     path.join(PATHS.src, 'index.tsx'),
        // ],
        // vendor: ['react', 'react-dom', 'react-router-dom'],
    },
    output: {
        filename: '[name].[hash].js', // [name]-[hash:8].js
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
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader',
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
                            modules: {
                                localIdentName: '[name]_[local]-[hash:base64:5]',
                            },
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
                            modules: {
                                localIdentName: '[name]_[local]-[hash:base64:5]',
                            },
                            importLoaders: 2,
                        },
                    },
                    'postcss-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(png|jpg|gif|JPG|GIF|PNG|BMP|bmp|JPEG|jpeg)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                        },
                    },
                ],
            },
            {
                test: /\.(eot|woff|ttf|woff2|svg)$/,
                use: 'url-loader',
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        alias: {
            '@': path.join(PATHS.src),
            'react-dom': '@hot-loader/react-dom',
        },
    },
    plugins: [
        new Webpackbar({
            name: '🚚 React Template',
            color: '#3f51b5',
        }),
        new ForkTsCheckerWebpackPlugin({
            tsconfig: path.join(__dirname, '../tsconfig.json'),
            eslint: true,
        }), // 在单独的进程上运行TypeScript类型检查器
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
