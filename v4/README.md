## Todos:
  - 代码分割，按需加载
  - 常用loader
  - 服务器端渲染
  - 脚手架

# Webpack v4

## 新增功能

### mode
mode: development | production
设为production时:
  - process.env.NODE_ENV为production
  - 开启所有的优化代码
  - 去除掉只在开发阶段运行的代码
  - 自动进行代码压缩
  - tree-shaking

### optimization
```
  {
    optimization: {
      minimize: '生产环境默认开启',
      minimizer: '压缩文件的配置',
      splitChunks: {
        cacheGroups: {
          name: 'xxx'
        }
      },
      runtimeChunk: {
        //把运行环境放到一个独立的文件中
      }
    }
  }
```

## 常用插件

### HtmlWebpackPlugin

Usage
```
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: 'index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'index_bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin()
  ]
}

```
Options

Name | Type | Default | Description
--- | --- | --- | ---
title | {string} | Webpack App | 文档标题
filename | {string} | index.html | 生成的文件名
template | {string} | -- | 模板文件
inject | {boolean|String} | true | javascript文件插入的位置(head|body)
favicon | {string} | -- | 网站favicon
meta | {Object} | -- | meta标签
minify | {Boolean} | false | 是否压缩文件
hash | {Boolean} | false | 是否所有的文件地址都加hash
cache | {Boolean} | true | 只有文件变化时才重新生成
showErrors | {Boolean} | true | 把错误打印到html中
chunks | {?} | ? | 允许只添加一些代码块
excludeChunks | {Array.<string>} | -- | 忽略指定代码块

多页面
调用多个HtmlWebpackPlugin

### mini-css-extract-plugin

Usage
```
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== 'production'

module.exports = {
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: devMode ? '[name].css' : '[name].[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
    })
  ],
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      }
    ]
  }
}
```

### OptimizeCssAssetsWebpackPlugin
压缩css文件
