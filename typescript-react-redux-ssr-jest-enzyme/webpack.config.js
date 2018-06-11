const path = require('path');
const webpack = require('webpack');
module.exports = {
    mode: 'development',
    entry: [
        path.resolve(__dirname, 'src/index.tsx'),
        "webpack-hot-middleware/client"
    ],
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'build/app.js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        alias: {
            "@components": path.resolve(__dirname, "./src/components")
        }
    },
    module: {
        rules: [
            { 
                test: /\.tsx?$/, 
                use: [
                    "ts-loader",
                ]
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]
    // devServer: {
    //     contentBase: path.join(__dirname, 'public'),
    //     compress: true,
    //     historyApiFallback: true
    // }
}