# 入口起点

## 单个入口（简写）语法 
用法：`entry: string|Array<string>`

webpack.config.js
``` js
module.exports = {
  entry: './path/to/my/entry/file.js'
};
```

entry 属性的单个入口语法，是下面的简写：
``` js
module.exports = {
  entry: {
    main: './path/to/my/entry/file.js'
  }
};
```
:::tip 
当你向 `entry` 传入一个数组时会发生什么？向 `entry` 属性传入文件路径数组，将创建出一个 多主入口(multi-main entry)。在你想要一次注入多个依赖文件，并且将它们的依赖导向(graph)到一个 chunk 时，这种方式就很有用。
:::

当你正在寻找为「只有一个入口起点的应用程序或工具（即 library）」快速设置 webpack 配置的时候，这会是个很不错的选择。然而，使用此语法在扩展配置时有失灵活性。

## 对象语法
用法：`entry: {[entryChunkName: string]: string|Array<string>}`

webpack.config.js
``` js
module.exports = {
  entry: {
    app: './src/app.js',
    adminApp: './src/adminApp.js'
  }
};
```
对象语法会比较繁琐。然而，这是应用程序中定义入口的最可扩展的方式。
::: tip
“webpack 配置的可扩展”是指，这些配置可以重复使用，并且可以与其他配置组合使用。这是一种流行的技术，用于将关注点从环境(environment)、构建目标(build target)、运行时(runtime)中分离。然后使用专门的工具（如 webpack-merge）将它们合并起来。
:::

## 常见场景

### 分离 app(应用程序) 和 vendor(第三方库) 入口 
在 **webpack < 4** 的版本中，通常将 `vendor` 作为单独的入口起点添加到 `entry` 选项中，以将其编译为单独的文件（与 `CommonsChunkPlugin` 结合使用）。而在 webpack 4 中不鼓励这样做。而是使用 `optimization.splitChunks` 选项，将 vendor 和 app(应用程序) 模块分开，并为其创建一个单独的文件。**不要 为 vendor 或其他不是执行起点创建 entry**

### 多页面应用程序 

webpack.config.js
``` js
module.exports = {
  entry: {
    pageOne: './src/pageOne/index.js',
    pageTwo: './src/pageTwo/index.js',
    pageThree: './src/pageThree/index.js'
  }
};
```
这是什么？我们告诉 webpack 需要三个独立分离的依赖图（如上面的示例）。
为什么？在多页面应用程序中，服务器会传输一个新的 HTML 文档给你的客户端。页面重新加载此新文档，并且资源被重新下载。然而，这给了我们特殊的机会去做很多事：
- 用 `optimization.splitChunks` 为页面间共享的应用程序代码创建 bundle。由于入口起点增多，多页应用能够复用入口起点之间的大量代码/模块，从而可以极大地从这些技术中受益。

DL:  个人理解：可利用浏览器缓存减少资源请求及下载
