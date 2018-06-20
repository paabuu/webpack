const path = require('path');
const SimplePlugin = require('../plugins/simple-example');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
    mode: 'production',
    entry: {
      index: path.resolve(__dirname, 'src/index.js'),
      page2: path.resolve(__dirname, 'src/page2.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[chunkhash].js'
    },
    resolve: {
        extensions: ['.css', '.js']
    },
    module: {
        rules: [
            {
                test: /\.css/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader'
                ]
            },
            {
                test: /\.(jpg|png|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 4000
                        }
                    }
                ]
            }
        ] 
    },
    optimization: {
        runtimeChunk: {
            name: 'manifest'
        },
        splitChunks: {
            cacheGroups: {
                commons: {
                    name: 'vendor',
                    chunks: 'initial',
                    // test: /react/,
                    minSize: 0,
                    minChunks: 2
                }
            }
        }
    },
    plugins: [
        new CleanWebpackPlugin(path.resolve(__dirname, 'dist')),
        new SimplePlugin(),
        new HtmlWebpackPlugin({
            title: '首页',
            meta: {
                description: 'this is home page'
            },
            chunks: ['manifest', 'vendor', 'index']
            // hash: true
        }),
        new HtmlWebpackPlugin({
            title: "第二页",
            filename: 'page2.html',
            chunks: ['mainfest', 'page2']
        }),
        new OptimizeCssAssetsWebpackPlugin({}),
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css'
        })
    ],
    devServer: {
        contentBase: path.resolve(__dirname, 'dist')
    }
}