## Todos:
  - 代码分割，按需加载
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

## 常用loader

### style-loader/css-loader/postcss-loader/sass-loader/MiniCssExtractPlugin.loader
style-loader: 把css样式插入到DOM style标签中

css-loader: 解析@import和url()
```js
  options: {
    module: true, // 开启css module
  }
  // 不开启css module，也能防止作用域污染
  :local(className) {
    //**
  }
```
postcss-loader: 配合一些插件使用，如autoprefixer
```js
  // postcss.config.js
  module.exports = {
    plugins: [
      require('autoprefixer')({
        browsers: [
          "defaults",
          "not ie < 11",
          "last 2 versions",
          "> 1%",
          "iOS 7",
          "last 3 iOS versions"
        ]
      })
    ]
  };
```

sass-loader: 解析sass文件

MiniCssExtractPlugin.loader: 将css生成单独的文件(不再需要style-loader)

### file-loader
```
options: {
  name: '文件名', [path]/[name].[hash].[ext]
  outputPath: '输出位置',
  publicPath: '前缀',
}
```

### url-loader
功能与file-loader类似，但是可以把小文件转为base64
```
options: {
  limit: 10000// kb
}
```

### babel-loader
presets:
- babel-preset-env: 等于preset-2015 + preset-2016 + preset-2017
- babel-preset-react: 支持react jsx语法
- babel-plugin-stage-n: 非正式提案

plugins: 
- babel-plugin-transform-decorators-legacy: 支持es装饰器语法
- babel-plugin-transform-class-properties: 支持类属性新写法
- babel-plugin-transform-runtime: 支持es新APIs,如Map,Set,Promise

```
.babelrc
{
  presets: [
    'env',
    'react',
    'stage-n'
  ],
  plugins: [
    "transform-decorators-legacy",
    "transform-class-properties",
    "transform-runtime"
  ]
}
```

## 常用插件

### HtmlWebpackPlugin

Usage
```js
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
```js
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
