# 概念

本质上，webpack是一个现代js应用程序的**静态模块打包工具**。当webpack处理应用程序时，它会在内部构建一个[依赖图](/guide/dependency-graph)
::: tip
可以在[【模块】](/guide/modules)中了解更多关于js模块和webpack模块的信息
:::
从v4.0.0开始，webpack可以不用再引入一个配置文件来打包项目，然而，但他仍然有着[高度可配置性](/guide/configuration)可以很好满足你的需求

在开始前你需要先理解一些核心概念
[[toc]]

## 入口「entry」

**入口起点**指示webpack应该使用哪个模块，来作为构建其内部[依赖图](/guide/dependency-graph)的开始。进入入口起点后，webpack会找出有哪些模块和库是入口起点依赖的

默认值是 `./src/index.js`,但你可以通过在[webpack configuration](/configuration/config)中配置entry属性，来指定一个(或多个)不同的入口起点
::: tip
去[入口起点](/guide/entry_points)中了解更多
:::


## 输出「output」
output属性告诉webpack**在哪里输出它所创建的bundle，以及如何命名这些文件**,主要输出文件的默认值是`./dist/main.js`,其他生成文件默认放置在`.dist`文件夹中
你可以通过在配置中指定一个 output 字段，来配置这些处理过程：

webpack.config.js
``` js
const path = require('path');

module.exports = {
  entry: './path/to/my/entry/file.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-first-webpack.bundle.js'
  }
};
```
在上面的示例中，我们通过 `output.filename` 和 `output.path` 属性，来告诉 webpack bundle 的名称，以及我们想要 bundle 生成到哪里。可能你想要了解在代码最上面导入的 [path](http://nodejs.cn/api/path.html) 模块是什么，它是一个 [Node.js](http://nodejs.cn/api/) 核心模块，用于操作文件路径。

::: tip
output 属性还有 [许多可配置的特性](/configuration/output)，去[输出](/guide/output)了解更多概念
:::


## loader
**webpack只能理解`js`和`json`文件**。loader 让 webpack 能够去处理其他类型的文件，并将他们转换为有效[模块](/guide/modules)，以供应用程序使用，以及被添加到依赖图中
::: warning
注意，loader 能够 `import` 导入任何类型的模块（例如 `.css` 文件），这是 webpack 特有的功能，其他打包程序或任务执行器的可能并不支持。我们认为这种语言扩展是很有必要的，因为这可以使开发人员创建出更准确的依赖关系图。
:::

在更高层面，在 webpack 的配置中 loader 有两个属性：

1.`test` 属性，用于标识出应该被对应的 loader 进行转换的某个或某些文件。
2.`use` 属性，表示进行转换时，应该使用哪个 loader。

webpack.config.js
``` js
const path = require('path');

module.exports = {
  output: {
    filename: 'my-first-webpack.bundle.js'
  },
  module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' }
    ]
  }
};
```
以上配置中，对一个单独的 module 对象定义了 rules 属性，里面包含两个必须属性：test 和 use。这告诉 webpack 编译器(compiler) 如下信息：
>“嘿，webpack 编译器，当你碰到「在 `require()/import` 语句中被解析为 `'.txt'` 的路径」时，在你对它打包之前，先 使用 raw-loader 转换一下。”
::: warning
重要的是要记住，在 webpack 配置中定义 rules 时，要定义在 `module.rules` 而不是 rules 中。
:::

::: warning
请记住，使用正则表达式匹配文件时，你不要为它添加引号。也就是说，`/\.txt$/` 与 `'/\.txt$/'/ "/\.txt$/"` 不一样。前者指示 webpack 匹配任何以 `.txt` 结尾的文件，后者指示 webpack 匹配具有绝对路径 `'.txt'` 的单个文件; 
:::

::: tip
在使用 loader 时，可以阅读 [loader](/guide/loaders) 章节 查看更深入的自定义配置。
:::


## 插件「plugin」
插件则可以用于执行范围更广的任务。包括：打包优化，资源管理，注入环境变量。
::: tip
[插件接口(plugin interface)](../api/plugins) 功能极其强大，可以用来处理各种各样的任务。
:::

想要使用一个插件，你只需要 `require()` 它，然后把它添加到 `plugins` 数组中。多数插件可以通过选项(option)自定义。你也可以在一个配置文件中因为不同目的而多次使用同一个插件，这时需要通过使用 `new` 操作符来创建它的一个实例。

webpack.config.js
``` js
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装
const webpack = require('webpack'); // 用于访问内置插件

module.exports = {
  module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: './src/index.html'})
  ]
};
```
在上面的示例中，html-webpack-plugin 为应用程序生成 HTML 一个文件，并自动注入所有生成的 bundle。

::: tip
webpack 提供许多开箱可用的插件！查阅 [插件列表](../plugins/plugin) 获取更多。
阅读 [plugin](/guide/plugins) 章节 查看更多概念。
:::



## 模式「mode」
通过选择 `development`, `production` 或 `none` 之中的一个，来设置 `mode` 参数，你可以启用 webpack 内置在相应环境下的优化。其默认值为 `production`。
``` js
module.exports = {
  mode: 'production'
};
```
::: tip
查看 [模式配置](/guide/mode) 章节了解其详细内容和每个值所作的优化。
:::



## 浏览器兼容性「browser compatibility」
webpack 支持所有符合 [ES5 标准](https://kangax.github.io/compat-table/es5/) 的浏览器（不支持 IE8 及以下版本）。webpack 的 `import()` 和 `require.ensure()` 需要 [Promise](http://es6.ruanyifeng.com/#docs/promise)。如果你想要支持旧版本浏览器，在使用这些表达式之前，还需要 提前加载 [polyfill](../booklets/shimming)