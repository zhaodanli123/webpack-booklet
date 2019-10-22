# 入口和上下文
entry 对象是用于 webpack 查找启动并构建 bundle。其上下文是入口文件所处的目录的绝对路径的字符串。

## `context`
`string`

**基础目录**，**绝对路径**，用于从配置中解析入口起点(entry point)和 `loader`
``` js
module.exports = {
  //...
  context: path.resolve(__dirname, 'app')
};
```
默认使用当前目录，但是推荐在配置中传递一个值。这使得你的配置独立于 CWD(current working directory - 当前执行路径)。



## `entry`
`string | [string] | object { <key>: string | [string] } | (function: () => string | [string] | object { <key>: string | [string] })`

起点或是应用程序的起点入口。从这个起点开始，应用程序启动执行。如果传递一个数组，那么数组的每一项都会执行。

动态加载的模块不是入口起点。

简单规则：每个 HTML 页面都有一个入口起点。单页应用(SPA)：一个入口起点，多页应用(MPA)：多个入口起点。
``` js
module.exports = {
  //...
  entry: {
    home: './home.js',
    about: './about.js',
    contact: './contact.js'
  }
};
```

## 命名 
如果传入一个字符串或字符串数组，chunk 会被命名为 `main`。如果传入一个对象，则每个键(key)会是 chunk 的名称，该值描述了 `chunk` 的入口起点。

## 动态入口 
如果传递了一个函数，那么它将在每个 [`make`](../api/compiler-hooks/#make) 事件上被调用。
::: tip
当webpack启动时，[`make`](../api/compiler-hooks/#make)事件会触发;当观察文件更改时，会看到每次失效
:::
``` js
module.exports = {
  //...
  entry: () => './demo'
};
```
或
``` js
module.exports = {
  //...
  entry: () => new Promise((resolve) => resolve(['./demo', './demo2']))
};
```
ie:可以使用动态条目从外部源(远程服务器、文件系统内容或数据库)获取实际条目:
webpack.config.js
``` js
module.exports = {
  entry() {
    return fetchPathsFromSomeExternalSource(); // returns a promise that will be resolved with something like ['src/main-layout.js', 'src/admin-layout.js']
  }
};
```