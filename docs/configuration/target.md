# 构建目标
webpack 能够为多种环境或 target 构建编译。想要理解什么是 target 的详细信息，请阅读 [target 概念页面](../guide//targets/)。

## target 
`string` | `function (compiler)`

告知 webpack 为目标(target)指定一个环境。

## string 
通过 [WebpackOptionsApply](https://github.com/webpack/webpack/blob/master/lib/WebpackOptionsApply.js) ，可以支持以下字符串值：

todo