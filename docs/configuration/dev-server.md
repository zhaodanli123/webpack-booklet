# 开发中

[`webpack-dev-server`](https://github.com/webpack/webpack-dev-server) 能够用于快速开发应用程序。起步请查看 [开发](../booklets/development/) 指南。

此页面描述影响 webpack-dev-server(简写为：dev-server) 行为的选项。
::: tip
与 [`webpack-dev-middleware`](https://github.com/webpack/webpack-dev-middleware) 兼容的选项旁边有 🔑。
:::


## devServer.OpenPage

`string`

指定打开浏览器时的导航页面。

webpack.config.js
``` js
module.exports = {
  //...
  devServer: {
    openPage: '/different/page'
  }
};
```
CLI用法
``` js
webpack-dev-server --open-page "/different/page"
```