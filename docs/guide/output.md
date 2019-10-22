# 输出
配置 output 选项可以**控制 webpack 如何向硬盘写入编译文件**。即使可以存在多个 entry 起点，但只指定一个 output 配置。

## 用法
在 webpack 中配置 output 属性的最低要求是，将它的值设置为一个对象，包括以下属性：
- `filename` 用于输出文件的文件名。

webpack.config.js
``` js
module.exports = {
  output: {
    filename: 'bundle.js',
  }
};
```
此配置将一个单独的 `bundle.js` 文件输出到 `dist` 目录中。

## 多个入口起点
如果配置创建了多个单独的 "chunk"（例如，使用多个入口起点或使用像 CommonsChunkPlugin 这样的插件），则应该使用 [占位符(substitutions)](../configuration/output/#output-filename)来确保每个文件具有唯一的名称。

## 高级进阶
以下是对资源使用 `CDN` 和 `hash` 的复杂示例：

webpack.config.js
``` js
module.exports = {
  //...
  output: {
    path: '/home/proj/cdn/assets/[hash]',
    publicPath: 'http://cdn.example.com/assets/[hash]/'
  }
};
```
如果在编译时，不知道最终输出文件的 `publicPath` 是什么地址，则可以将其留空，并且在运行时通过入口起点文件中的 __webpack_public_path__ 动态设置。

``` js
__webpack_public_path__ = myRuntimePublicPath;
// 应用程序入口的其余部分
```