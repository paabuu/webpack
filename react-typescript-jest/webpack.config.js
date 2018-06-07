const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'build/app.js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            { 
                test: /\.tsx?$/, 
                use: [
                   "ts-loader"
                ]
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: true
    }
}