const path = require('path');
const express = require('express');
const app = express();
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const config = require('../webpack.config');
const compiler = webpack(config);

app.use(express.static(path.resolve(__dirname, '../public')));

app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
}));

app.use(require("webpack-hot-middleware")(compiler));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../public/index.html'));
});

app.listen(3000, () => {
    console.log('server is running on port 3000!');
});