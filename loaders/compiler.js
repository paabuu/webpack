// 测试loader

const path = require('path');
const webpack = require('webpack');
const memoryfs = require('memory-fs');

module.exports = (fixture, options = {}) => {
    const compiler = webpack({
        context: __dirname,
        entry: `./${fixture}`,
        output: {
            path: path.resolve(__dirname),
            filename: 'bundle.js'
        },
        module: {
            rules: [{
                test: /\.txt$/,
                use: {
                    loader: path.resolve(__dirname, './transform-text-loader'),
                    options: {
                        string: 'haha',
                        regex: /xixi/g
                    }
                }
            }, {
                test: /\.(png|jpg)$/,
                use: {
                    loader: path.resolve(__dirname, './image-loader')
                }
            }]
        }
    });

    compiler.outputFileSystem = new memoryfs();

    return new Promise((resolve, reject) => {
        compiler.run((err, stats) => {
            if (err) reject(err);

            resolve(stats);
        })
    })
}