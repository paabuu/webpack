## 常用插件

### HtmlWebpackPlugin

Useage
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