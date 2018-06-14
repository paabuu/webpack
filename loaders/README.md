# 自定义webpack loader

### transform-text-loader

处理文本，根据options替换文本
```
{
    options: {
        string: "替换字符串"
        regex: /匹配正则表达式/g
    }
}
```

### image-loader

压缩图片，并用hash值重命名
```
{
    options: {
        name: "文件名",
        publicPath: "路径前缀"
    }
}
```