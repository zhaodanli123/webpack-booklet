# 输出
output 位于对象最顶级键(key)，包括了一组选项，指示 webpack 如何去输出、以及在哪里输出你的「bundle、asset 和其他你所打包或使用 webpack 载入的任何内容」。

## `output.auxiliaryComment `
在和 [`output.library`](#output-library) 和 [`output.libraryTarget`](#output-libraryTarget) 一起使用时，此选项允许用户向导出容器(export wrapper)中插入注释。要为 `libraryTarget` 每种类型都插入相同的**注释**，将 `auxiliaryComment` 设置为一个字符串：

webpack.config.js
``` js
module.exports = {
  //...
  output: {
    library: 'someLibName',
    libraryTarget: 'umd',
    filename: 'someLibName.js',
    auxiliaryComment: 'Test Comment'
  }
};
```
将会生成如下：

webpack.config.js
``` js
(function webpackUniversalModuleDefinition(root, factory) {
  // Test Comment
  if(typeof exports === 'object' && typeof module === 'object')
    module.exports = factory(require('lodash'));
  // Test Comment
  else if(typeof define === 'function' && define.amd)
    define(['lodash'], factory);
  // Test Comment
  else if(typeof exports === 'object')
    exports['someLibName'] = factory(require('lodash'));
  // Test Comment
  else
    root['someLibName'] = factory(root['_']);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
  // ...
});
```
对于 libraryTarget 每种类型的注释进行更细粒度地控制，请传入一个对象：

webpack.config.js
``` js
module.exports = {
  //...
  output: {
    //...
    auxiliaryComment: {
      root: 'Root Comment',
      commonjs: 'CommonJS Comment',
      commonjs2: 'CommonJS2 Comment',
      amd: 'AMD Comment'
    }
  }
};
```

## `output.chunkFilename`
`string`

此选项决定了非入口(non-entry) chunk 文件的名称。有关可取的值的详细信息，请查看 [`output.filename`](#output-filename) 选项。

注意，这些文件名需要在 runtime 根据 chunk 发送的请求去生成。因此，需要在 webpack runtime 输出 bundle 值时，将 chunk id 的值对应映射到占位符(如 [name] 和 [chunkhash])。这会增加文件大小，并且在任何 chunk 的占位符值修改后，都会使 bundle 失效。

默认使用 [id].js 或从 [`output.filename`](#output-filename) 中推断出的值（[name] 会被预先替换为 [id] 或 [id].）。



## `output.chunkLoadTimeout`
`integer`

chunk 请求到期之前的毫秒数，默认为 120 000。从 webpack 2.6.0 开始支持此选项。

## `output.crossOriginLoading`
`boolean` `string`

只用于 [`target`](/configuration/target) 是 web，使用了通过 script 标签的 JSONP 来按需加载 chunk。

启用 [`cross-origin` 属性](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#attr-crossorigin) 加载 chunk。以下是可接收的值……

`crossOriginLoading: false` - 禁用跨域加载（默认）

`crossOriginLoading: 'anonymous'` - 不带凭据(credential)启用跨域加载

`crossOriginLoading: 'use-credentials'` - 带凭据(credential)启用跨域加载 with credentials


## `output.jsonpScriptType`
`string`

允许自定义 `script` 的类型，webpack 会将 `script` 标签注入到 DOM 中以下载异步 chunk。可以使用以下选项：

`'text/javascript'`（默认）
`'module'`：与 ES6 就绪代码一起使用。

## `output.devtoolFallbackModuleFilenameTemplate`
`string` | `function(info)`

当上面的模板字符串或函数产生重复时使用的备用内容。

查看 [`output.devtoolModuleFilenameTemplate`](#output-devtoolmodulefilenametemplate)。

## `output.devtoolModuleFilenameTemplate`
`string` | `function(info)`

此选项仅在 「[`devtool`](/configuration/devtool) 使用了需要模块名称的选项」时使用。

自定义每个 source map 的 `sources` 数组中使用的名称。可以通过传递模板字符串(template string)或者函数来完成。例如，当使用 `devtool: 'eval'`，默认值是：

webpack.config.js
``` js
module.exports = {
  //...
  output: {
    devtoolModuleFilenameTemplate: 'webpack://[namespace]/[resource-path]?[loaders]'
  }
};
```
模板字符串(template string)中做以下替换（通过 webpack 内部的 [`ModuleFilenameHelpers`](https://github.com/webpack/webpack/blob/master/lib/ModuleFilenameHelpers.js)）：

| 模板           | 	描述                        |
| ------------- |:---------------------------- |
| [absolute-resource-path]     |  绝对路径文件名 |
| [all-loaders]  |  自动和显式的 loader，并且参数取决于第一个 loader 名称  |
| [hash]  |   模块标识符的 hash   |
|[id]  |    模块标识符 |
|[loaders] | 显式的 loader，并且参数取决于第一个 loader 名称 |
|[resource] | 用于解析文件的路径和用于第一个 loader 的任意查询参数|
|[resource-path] | 不带任何查询参数，用于解析文件的路径|
|[namespace] | 模块命名空间。在构建成为一个 library 之后，通常也是 library 名称，否则为空|

当使用一个函数，同样的选项要通过 `info` 参数并使用**驼峰式**(camel-cased)：
``` js
module.exports = {
  //...
  output: {
    devtoolModuleFilenameTemplate: info => {
      return `webpack:///${info.resourcePath}?${info.loaders}`;
    }
  }
};
```
如果多个模块产生相同的名称，使用 [`output.devtoolFallbackModuleFilenameTemplate`](#output-devtoolfallbackmodulefilenametemplate) 来代替这些模块。

## `output.devtoolNamespace`
`string`

此选项确定 [`output.devtoolModuleFilenameTemplate`](#output-devtoolmodulefilenametemplate) 使用的模块名称空间。未指定时的默认值为：output.library。在加载多个通过 webpack 构建的 [`library`](#output-library) 时，用于防止 source map 中源文件路径冲突。

例如，如果你有两个 library，分别使用命名空间 library1 和 library2，并且都有一个文件 ./src/index.js（可能具有不同内容），它们会将这些文件暴露为 webpack://library1/./src/index.js 和 webpack://library2/./src/index.js。



## `output.filename`
`string` `function`
此选项决定了每个输出 bundle 的名称。这些 bundle 将写入到 [`output.path`](#output-path)选项指定的目录下。
对于单个[入口](/configuration/entry-context)起点, filename 会是一个静态名称。

webpack.config.js
``` js
module.exports = {
  //...
  output: {
    filename: 'bundle.js'
  }
};
```
然而，当通过多个入口起点(entry point)、代码拆分(code splitting)或各种插件(`plugin`)创建多个 `bundle`，应该使用以下一种替换方式，来赋予每个 `bundle` 一个唯一的名称……
使用入口名称：

webpack.config.js
``` js
module.exports = {
  //...
  output: {
    filename: '[name].bundle.js'
  }
};
```

使用内部 chunk id

webpack.config.js
``` js
module.exports = {
  //...
  output: {
    filename: '[id].bundle.js'
  }
};
```

使用每次构建过程中，唯一的 hash 生成

webpack.config.js
``` js
module.exports = {
  //...
  output: {
    filename: '[name].[hash].bundle.js'
  }
};
```

使用基于每个 chunk 内容的 hash：
webpack.config.js
``` js
module.exports = {
  //...
  output: {
    filename: '[chunkhash].bundle.js'
  }
};
```
使用基于每个 extracted 内容的 hash：

webpack.config.js
``` js
module.exports = {
  //...
  output: {
    filename: '[contenthash].bundle.css'
  }
};
```

使用自定义函数返回文件名

webpack.config.js
``` js
module.exports = {
  //...
  output: {
    filename: (chunkData) => {
      return chunkData.chunk.name === 'main' ? '[name].js': '[name]/[name].js';
    },
  }
};
```
::: tip
请确保已阅读过 [指南 - 缓存](../booklets/caching) 的详细信息。这里涉及更多步骤，不仅仅是设置此选项。
:::
注意此选项被称为文件名，但是你还是可以使用像 `js/[name]/bundle.js` 这样的文件夹结构。

注意，此选项不会影响那些「按需加载 chunk」的输出文件。对于这些文件，请使用 [`output.chunkFilename`](#output-chunkFilename) 选项来控制输出。通过loader创建的文件也受影响。在这种情况下，你必须尝试loader特定的可用选项。

可以使用以下替换模板字符串（通过 webpack 内部的[TemplatedPathPlugin][`TemplatedPathPlugin`](https://github.com/webpack/webpack/blob/master/lib/TemplatedPathPlugin.js)）：

| 模板           | 	描述                        |
| ------------- |:---------------------------- |
| [hash]       |  模块标识符(module identifier)的 hash |
| [chunkhash]  |   chunk 内容的 hash |
| [name]       |    模块名称   |
| [id]         |    模块标识符(module identifier)   |
| [query]      |    	模块的 query，例如，文件名 ? 后面的字符串   |
| [function]   |    The function, which can return filename [string]   |

`[hash]` 和 `[chunkhash]` 的长度可以使用 `[hash:16]`（默认为20）来指定。或者，通过指定[`output.hashDigestLength`](#output-hashDigestLength) 在全局配置长度。

如果将这个选项设为一个函数，函数将返回一个包含上面表格中替换信息的对象。

::: tip
在使用 [`ExtractTextWebpackPlugin`](../plugins/extract-text-webpack-plugin) 时，可以用 `[contenthash]` 来获取提取文件的 `hash`（既不是 `[hash]` 也不是 `[chunkhash]`）。
:::

## `output.hashDigest`
在生成 hash 时使用的编码方式，默认为 `'hex'`。支持 Node.js [`hash.digest`](https://nodejs.org/api/crypto.html#crypto_hash_digest_encoding) 的所有编码。对文件名使用 'base64'，可能会出现问题，因为 base64 字母表中具有 / 这个字符(character)。同样的，'latin1' 规定可以含有任何字符(character)。

## `output.hashDigestLength`
散列摘要的前缀长度，默认为 20。

## `output.hashFunction`
`string|function`

散列算法，默认为 `'md4'`。支持 Node.JS [`crypto.createHash`](https://nodejs.org/api/crypto.html#crypto_crypto_createhash_algorithm_options) 的所有功能。从 4.0.0-alpha2 `开始，hashFunction` 现在可以是一个返回自定义 hash 的构造函数。出于性能原因，你可以提供一个不加密的哈希函数(non-crypto hash function)。
``` js
module.exports = {
  //...
  output: {
    hashFunction: require('metrohash').MetroHash64
  }
};
```
确保 hash 函数有可访问的 `update` and `digest` 方法。

## `output.hashSalt`
一个可选的加盐值，通过 Node.JS `hash.update` 来更新哈希。

## `output.hotUpdateChunkFilename`
`string` `function`

自定义热更新 chunk 的文件名。可选的值的详细信息，请查看 output.filename 选项。

占位符只能是 [id] 和 [hash]，默认值是：

webpack.config.js

module.exports = {
  //...
  output: {
    hotUpdateChunkFilename: '[id].[hash].hot-update.js'
  }
};
这里没有必要修改它。

## `output.hotUpdateFunction`
`function`

只在 [`target`](/configuration/target) 是 web 时使用，用于加载热更新(hot update)的 JSONP 函数。

JSONP 函数用于异步加载(async load)热更新(hot-update) chunk。

详细请查看 [`output.jsonpFunction`](#output-jsonpfunction)。

## `output.hotUpdateMainFilename`
`string` `function`

自定义热更新的**主文件名**(main filename)。可选的值的详细信息，请查看 [`output.filename`](#output-filename) 选项

占位符只能是 [hash]，默认值是：

webpack.config.js
``` js
module.exports = {
  //...
  output: {
    hotUpdateMainFilename: '[hash].hot-update.json'
  }
};
```
这里没有必要修改它。

## `output.jsonpFunction`
`string`

只在 [`target`](/configuration/target) 是 web 时使用，用于**按需加载**(load on-demand) chunk 的 JSONP 函数。

JSONP 函数用于**异步加载**(async load) `chunk`，或者拼接多个初始 `chunk`(SplitChunksPlugin, AggressiveSplittingPlugin)。

如果在同一网页中使用了多个（来自不同编译过程(compilation)的）webpack runtime，则需要修改此选项。

如果使用了 [`output.library`](#output-library) 选项，library 名称时自动追加的。

## `output.library`
`string` 或 `object`（从 webpack 3.1.0 开始；用于 libraryTarget: 'umd'）

output.library 的值的作用，取决于[`output.libraryTarget`](#output-libraryTarget) 选项的值；完整的详细信息请查阅该章节。注意，`output.libraryTarget` 的默认选项是 `var`，所以如果使用以下配置选项：

webpack.config.js
``` js
module.exports = {
  //...
  output: {
    library: 'MyLibrary'
  }
};
```
如果生成的输出文件，是在 HTML 页面中作为一个 script 标签引入，则变量 `MyLibrary` 将与入口文件的返回值绑定。
::: warning
注意，如果将数组作为 entry，那么只会暴露数组中的最后一个模块。如果将对象作为 entry，还可以使用 array 语法暴露（具体查看[这个示例](https://github.com/webpack/webpack/tree/master/examples/multi-part-library) for details)）。
:::

::: tip
有关 `output.library `以及 `output.libraryTarget` 详细信息，请查看[创建 library 指南](../booklets/author-libraries)。
::: 

## `output.libraryExport`
`string | string[]`

配置哪些模块将通过libraryTarget公开。它在默认情况下是未定义的，如果你将libraryTarget设置为空字符串，同样的行为也会被应用。它将导出整个(名称空间)对象。下面的示例演示了使用libraryTarget: 'var'时该配置的效果。

支持以下配置:

`libraryExport: 'default'` - 你的入口点的默认导出将被分配给library target:
``` js
// 如果你的 entry 有一个默认的' MyDefaultModule '导出
var MyDefaultModule = _entry_return_.default;
```
`libraryExport: 'MyModule'` - 指定的模块将分配给library target:
``` js
var MyModule = _entry_return_.MyModule;
```
`libraryExport: ['MyModule', 'MySubModule']` - 数组被解释为要分配给 library target 的模块的路径:
``` js
var MySubModule = _entry_return_.MyModule.MySubModule;
```
使用上面指定的libraryExport配置，得到的库可以这样使用:
``` js
MyDefaultModule.doSomething();
MyModule.doSomething();
MySubModule.doSomething();
```

## `output.libraryTarget`
`string: 'var'`

配置如何暴露 library。可以使用下面的选项中的任意一个。注意，此选项与分配给 [`output.library`](#output-library) 的值一同使用。对于下面的所有示例，都假定将 `output.library` 的值配置为 `MyLibrary`。
::: tip
注意，下面的示例代码中的 `_entry_return_` 是入口起点返回的值。在 bundle 本身中，它是从入口起点、由 webpack 生成的函数的输出结果。
:::

### 暴露为一个变量
这些选项将入口起点的返回值（例如，入口起点的任何导出值），在 bundle 包所引入的位置，赋值给 output.library 提供的变量名。

libraryTarget: 'var' - （默认值）当 library 加载完成，入口起点的返回值将分配给一个变量：

var MyLibrary = _entry_return_;

// 在一个单独的 script……
MyLibrary.doSomething();
::: warning
当使用此选项时，将 output.library 设置为空，会因为没有变量导致无法赋值。
:::

`libraryTarget: 'assign'` - 这将产生一个隐含的全局变量，可能会潜在地重新分配到全局中已存在的值（谨慎使用）。
``` js
MyLibrary = _entry_return_;
```
注意，如果 `MyLibrary` 在作用域中未在前面代码进行定义，则你的 library 将被设置在全局作用域内。
::: warning
当使用此选项时，将 output.library 设置为空，将产生一个破损的输出 bundle。
:::

### 通过在对象上赋值暴露 
todo

### 模块定义系统 
todo 

### 其他 Targets 
todo 

## `output.path`
`string`

output 目录对应一个**绝对路径**。

webpack.config.js
``` js
module.exports = {
  //...
  output: {
    path: path.resolve(__dirname, 'dist/assets')
  }
};
```
注意，[hash] 在参数中被替换为**编译过程**(compilation)的 hash。详细信息请查看[指南 - 缓存](../guide/caching)。

## `output.pathinfo`
`boolean`

告知 `webpack` 在 `bundle` 中引入「所包含模块信息」的相关**注释**。此选项在 `development` [模式](../guide/mode/)时的默认值是 true，而在 `production` [模式](../guide/mode)时的默认值是 false。
::: warning
对于在开发环境(development)下阅读生成代码时，虽然通过这些注释可以提供非常有用的数据信息，但在生产环境(production)下，不应该使用。
:::
webpack.config.js
``` js
module.exports = {
  //...
  output: {
    pathinfo: true
  }
};
```
注意，这些注释也会被添加至经过 `tree shaking` 后生成的 `bundle` 中。


## `output.publicPath`
`string: ''` `function`

对于**按需加载**(on-demand-load)或**加载外部资源**(external resources)（如图片、文件等）来说，output.publicPath 是很重要的选项。如果指定了一个错误的值，则在加载这些资源时会收到 404 错误。

此选项指定**在浏览器中**所引用的「**此输出目录对应的公开 URL**」。相对 URL(relative URL) 会被相对于 HTML 页面（或 <base> 标签）解析。相对于服务的 URL(Server-relative URL)，相对于协议的 URL(protocol-relative URL) 或绝对 URL(absolute URL) 也可是可能用到的，或者有时必须用到，例如：**当将资源托管到 CDN 时**。

该选项的值是以 runtime(运行时) 或 loader(载入时) 所创建的每个 URL 为前缀。因此，在多数情况下，此选项的值都会**以 / 结束**。

简单规则如下：[`output.path`](#output-path) 中的 URL 以 HTML 页面为基准。

webpack.config.js
``` js
module.exports = {
  //...
  output: {
    path: path.resolve(__dirname, 'public/assets'),
    publicPath: 'https://cdn.example.com/assets/'
  }
};
```
对于这个配置：
webpack.config.js
``` js
module.exports = {
  //...
  output: {
    publicPath: '/assets/',
    chunkFilename: '[id].chunk.js'
  }
};
```
对于一个 chunk 请求，看起来像这样 `/assets/4.chunk.js`。

对于一个输出 HTML 的 `loader` 可能会像这样输出：
``` js
<link href="/assets/spinner.gif" />
```
或者在加载 CSS 的一个图片时：
``` js
background-image: url(/assets/spinner.gif);
```
`webpack-dev-server` 也会默认从 `publicPath` 为基准，使用它来决定在哪个目录下启用服务，来访问 webpack 输出的文件。

注意，参数中的 `[hash]` 将会被替换为`编译过程`(compilation) 的 hash。详细信息请查看[指南 - 缓存](../guide/caching)。

示例：
``` js
module.exports = {
  //...
  output: {
    // One of the below
    publicPath: 'https://cdn.example.com/assets/', // CDN（总是 HTTPS 协议）
    publicPath: '//cdn.example.com/assets/', // CDN（协议相同）
    publicPath: '/assets/', // 相对于服务(server-relative)
    publicPath: 'assets/', // 相对于 HTML 页面
    publicPath: '../assets/', // 相对于 HTML 页面
    publicPath: '', // 相对于 HTML 页面（目录相同）
  }
};
```
在编译时(compile time)无法知道输出文件的 publicPath 的情况下，可以留空，然后在入口文件(entry file)处使用[自由变量(free variable)](https://stackoverflow.com/questions/12934929/what-are-free-variables) `__webpack_public_path__`，以便在运行时(runtime)进行动态设置。
``` js
__webpack_public_path__ = myRuntimePublicPath;

// 应用程序入口的其他部分
```

有关` __webpack_public_path__` 的更多信息，请查看[此讨论](https://github.com/webpack/webpack/issues/2776#issuecomment-233208623)。


## `output.sourceMapFilename`
`string`

此选项会向硬盘写入一个输出文件，只在 [devtool](/configuration/devtool) 启用了 SourceMap 选项时才使用。

配置 source map 的命名方式。默认使用 '[file].map'。

可以使用 #output-filename 中的 [name], [id], [hash] 和 [chunkhash] 替换符号。除此之外，还可以使用以下替换符号。[file] 占位符会被替换为原始文件的文件名。我们建议只使用 [file] 占位符，因为其他占位符在非 chunk 文件(non-chunk files)生成的 SourceMap 时不起作用。

TODO

## `output.sourcePrefix`
todo

## `output.strictModuleExceptionHandling`
todo

## `output.umdNamedDefine`
todo