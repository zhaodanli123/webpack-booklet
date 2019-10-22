# loader
loader用于**对模块的源代码进行转换**。`loader` 可以使你在 `import` 或"加载"模块时**预处理文件**。`loader` 可以将文件从不同的语言（如 `TypeScript`）转换为 `JavaScript` 或将内联图像转换为 `data URL`。loader 甚至允许你直接在 `JavaScript` 模块中 `import` CSS文件！

## 示例
例如，你可以使用 loader 告诉 webpack 加载 CSS 文件，或者将 TypeScript 转为 JavaScript。为此，首先安装相对应的 loader：
``` js
npm install --save-dev css-loader
npm install --save-dev ts-loader
```
然后指示 webpack 对每个 `.css` 使用 [`css-loader`](../loaders/css-loader)，以及对所有 `.ts` 文件使用 [`ts-loader`](../loaders/ts-loader)：

webpack.config.js
``` js
module.exports = {
  module: {
    rules: [
      { test: /\.css$/, use: 'css-loader' },
      { test: /\.ts$/, use: 'ts-loader' }
    ]
  }
};
```

## 使用loader
在你的应用程序中，有三种使用 `loader` 的方式：
- [配置（推荐）](#配置)：在 `webpack.config.js` 文件中指定 `loader`
- [内联](#内联)：在每个 `import` 语句中显式指定 loader。
- [CLI](#CLI)：在 shell 命令中指定它们。


## 配置
`module.rules` 允许你在 webpack 配置中指定多个 `loader`。 这种方式是展示 loader 的一种简明方式，并且有助于使代码变得简洁和易于维护。同时让你对各个 loader 有个全局概览：

loader **从右到左地取值(evaluate)/执行(execute)**。在下面的示例中，从 sass-loader 开始执行，然后继续执行 css-loader，最后以 style-loader 为结束。查看 [loader](#loader特性) 功能 了解有关 loader 顺序的更多信息。
``` js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          },
          { loader: 'sass-loader' }
        ]
      }
    ]
  }
};
```

## 内联
可以在 `import` 语句或任何 [等同于 "import" 的方法](../api/module-methods) 中指定 loader。使用 ! 将资源中的 loader 分开。每个部分都会相对于当前目录解析。
``` js
import Styles from 'style-loader!css-loader?modules!./styles.css';
```
使用 `!` 为整个规则添加前缀，可以覆盖配置中的所有 loader 定义。
选项可以传递查询参数，例如 `?key=value&foo=bar`，或者一个 JSON 对象，例如 `?{"key":"value","foo":"bar"}`。
::: tip
尽可能使用 `module.rules`，因为这样可以减少源码中样板文件的代码量，并且可以在出错时，更快地调试和定位 loader 中的问题。
:::


## CLI
``` js
webpack --module-bind jade-loader --module-bind 'css=style-loader!css-loader'
```

## loader特性
- loader 支持链式传递。链中的每个 loader 会将转换应用在已处理过的资源上。一组链式的 loader 将按照**相反的顺序执行**。链中的第一个 loader 将其结果（也就是应用过转换后的资源）传递给下一个 loader，依此类推。最后，链中的最后一个 loader，返回 webpack 期望 JavaScript。
- loader 可以是同步的，也可以是异步的。
- loader 运行在 `Node.js` 中，并且能够执行任何 `Node.js` 能做到的操作。
- loader 可以通过 `options` 对象配置
- 除了常见的通过 `package.json`的 `main` 来将一个 npm 模块导出为 loader，还可以在 `module.rules` 中使用 loader 字段直接引用一个模块。
- **插件(plugin)可以为 loader 带来更多特性**。
- loader 能够产生**额外**的任意文件。

## 解析loader
loader 遵循 [模块解析](/guide/module-resolution/) 标准。多数情况下，loader 将从 [模块路径](/guide/module-resolution/#模块路径) 加载（通常是从 `npm install`, `node_modules` 进行加载）。

通常使用 `npm` 进行管理，但是也可以将自定义 `loader` 作为应用程序中的文件。按照约定，loader 通常被命名为 `xxx-loader`（例如 json-loader）。更多详细信息请查看 [如何编写 loader](../contribute/writing-a-loader)？。