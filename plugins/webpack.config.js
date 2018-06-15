const path = require('path');
const SimplePlugin = require('./simple-example');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, './index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new SimplePlugin()
    ]
}