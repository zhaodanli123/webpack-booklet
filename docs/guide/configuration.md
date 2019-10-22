# 配置
你可能已经注意到，很少有 webpack 配置看起来完全相同。这是因为 webpack 的配置文件，是一个导出 webpack [配置对象](../configuration/config) 的 JavaScript 文件。然后 webpack 会根据此配置对象上定义的属性进行处理。

因为 webpack 配置是标准的 `Node.js` `CommonJS` 模块，你可以做到以下事情：
- 通过 `require(...)` 导入其他文件
- 通过 `require(...)` 使用 npm 的工具函数
- 使用 `JavaScript` 控制流表达式，例如 `?:` 操作符
- 对常用值使用常量或**变量**
- 编写和执行函数，来生成部分配置

请在合适的场景下使用这些功能。

虽然技术上可行，但应避免以下做法：
- 在使用 webpack 命令行接口(CLI)时，访问命令行接口(CLI)参数（应该编写自己的命令行接口(CLI)，或 使用 --env）
- 导出不确定的值（调用 webpack 两次应该产生同样的输出文件）
- 编写很长的配置（应该将配置拆分为多个文件）

接下来的例子展示了 webpack 配置(webpack configuration)如何即具有表现力，又具有可配置性，这是因为配置即是代码：

## 基本配置

webpack.config.js
``` js
var path = require('path');

module.exports = {
  mode: 'development',
  entry: './foo.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'foo.bundle.js'
  }
};
```
::: tip
有关所有受支持的配置选项，请参见:[配置章节](../configuration/config)
:::

## 多个target
除了可以将单个配置导出为object, [function](../configuration/configuration-types/#导出为一个函数) 或 [Promise](../configuration/configuration-types/#导出一个 Promise) ,还可以将其导出为多个配置
查看：[导出多个配置](../configuration/configuration-types/#导出多个配置对象)

## 使用其他配置语言
webpack 接受以多种编程和数据语言编写的配置文件。
查看：[配置语言](../configuration/configuration-languages)

