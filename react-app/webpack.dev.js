const merge = require('webpack-merge');
const base = require('./webpack.base');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        historyApiFallback: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, 'public/index.html')
        })
    ]
};

module.exports = merge(base, config);
