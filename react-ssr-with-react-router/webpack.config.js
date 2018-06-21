const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

const browserConfig = {
    mode: 'production',
    entry: './src/browser/index.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            { test: /\.jsx?$/, use: 'babel-loader' }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            __isBrowser__: true
        })
    ]
};

const serverConfig = {
    mode: "production",
    entry: './src/server/index.js',
    output: {
        filename: 'server.js',
        path: __dirname,
        publicPath: '/'
    },
    target: 'node',
    externals: [nodeExternals()],
    module: {
        rules: [
            { test: /\.jsx?$/, use: 'babel-loader' }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            __isBrowser__: false
        })
    ]
};

module.exports = [browserConfig, serverConfig];
