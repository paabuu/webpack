 module.exports = {
     mode: 'development',
     entry: './index.js',
     output: {
         filename: 'bundle.js',
         path: __dirname + '/public'
     },
     module: {
         rules: [
             {
                 test: /\.jsx?$/,
                 exclude: /node_modules/,
                 use: 'babel-loader'
             }
         ]
     }
 }