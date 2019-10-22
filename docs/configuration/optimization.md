# 优化
从 webpack 4 开始，会根据你选择的 [`mode`](../guide/mode/) 来执行不同的优化，不过所有的优化还是可以手动配置和重写

## `optimization.minimize`
`boolean`

告知 webpack 使用 [`TerserPlugin`](../plugins/terser-webpack-plugin/) 压缩 bundle。

`production` 模式下，这里默认是 `true`。

webpack.config.js
``` js
module.exports = {
  //...
  optimization: {
    minimize: false
  }
};
```
::: tip
了解 [`mode`](../guide/mode/) 工作机制。
:::
## `optimization.minimizer`
`[<plugin>]` and or `[function (compiler)]`
允许你通过提供一个或多个定制过的 [`TerserPlugin`](../plugins/terser-webpack-plugin/) 实例，覆盖默认压缩工具(minimizer)。
webpack.config.js
``` js
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  optimization: {
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: true, // Must be set to true if using source-maps in production
        terserOptions: {
          // https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
        }
      }),
    ],
  }
};
```
Or, as function:
``` js
module.exports = {
  optimization: {
    minimizer: [
      (compiler) => {
        const TerserPlugin = require('terser-webpack-plugin');
        new TerserPlugin({ /* your config */ }).apply(compiler);
      }
    ],
  }
};
```
## `optimization.splitChunks`
`object`

对于**动态导入模块**，默认使用 `webpack v4+` 提供的全新的通用分块策略(common chunk strategy)。请在 [`SplitChunksPlugin`](../plugins/split-chunks-plugin/) 页面中查看配置其行为的可用选项。

## `optimization.runtimeChunk`
`object` `string` `boolean`

将 `optimization.runtimeChunk` 设置为 `true` 或 `"multiple"`，会为每个仅含有 `runtime` 的入口起点添加一个额外 chunk。此设置是如下设置的别名：

webpack.config.js
``` js
module.exports = {
  //...
  optimization: {
    runtimeChunk: {
      name: entrypoint => `runtime~${entrypoint.name}`
    }
  }
};
```
值 `"single"` 会创建一个在所有生成 chunk 之间共享的运行时文件。此设置是如下设置的别名：

webpack.config.js
``` js
module.exports = {
  //...
  optimization: {
    runtimeChunk: {
      name: 'runtime'
    }
  }
};
```
通过将 `optimization.runtimeChunk` 设置为 `object`，对象中可以设置只有 `name` 属性，其中属性值可以是名称或者返回名称的函数，用于为 runtime chunks 命名。

**默认值是 false**：每个入口 chunk 中直接**嵌入 runtime**。
::: warning
对于每个 runtime chunk，导入的模块会被分别初始化，因此如果你在同一个页面中引用多个入口起点，请注意此行为。你或许应该将其设置为 `single`，或者使用其他只有一个 `runtime` 实例的配置。
:::

## `optimization.noEmitOnErrors`


## `optimization.namedModules`
`boolean: false`

告知 webpack 使用**可读取模块标识符**(readable module identifiers)，来帮助更好地调试。webpack 配置中如果没有设置此选项，默认会在 `mode` development 启用，在 `mode` production 禁用。

webpack.config.js
``` js
module.exports = {
  //...
  optimization: {
    namedModules: true
  }
};
```

## `optimization.namedChunks`

## `optimization.moduleIds` 

## `optimization.chunkIds`

## `optimization.nodeEnv`
`string` `bool: false`

告知 webpack 将 `process.env.NODE_ENV` 设置为一个给定字符串。如果 `optimization.nodeEnv` 不是 `false`，则会使用 [`DefinePlugin`]()，`optimization.nodeEnv` 默认值取决于 [`mode`]()，如果为 `falsy` 值，则会回退到 `"production"`。

可能的值有：

任何字符串：用于设置 `process.env.NODE_ENV` 的值。
false：不修改/设置 `process.env.NODE_ENV`的值。
webpack.config.js
```
module.exports = {
  //...
  optimization: {
    nodeEnv: 'production'
  }
};
```

## `optimization.mangleWasmImports`

## `optimization.removeAvailableModules`
`bool: true`

**如果模块已经包含在所有父级模块中，告知 webpack 从 chunk 中检测出这些模块，或移除这些模块**。将 `optimization.removeAvailableModules` 设置为 `false` 以禁用这项优化。

webpack.config.js
``` js
module.exports = {
  //...
  optimization: {
    removeAvailableModules: false
  }
};
```

## `optimization.removeEmptyChunks`
`bool: true`

**如果 chunk 为空，告知 webpack 检测或移除这些 chunk**。将 `optimization.removeEmptyChunks` 设置为 `false` 以禁用这项优化。

webpack.config.js
``` js
module.exports = {
  //...
  optimization: {
    removeEmptyChunks: false
  }
};
```

## `optimization.mergeDuplicateChunks`
`bool: true`

告知 webpack **合并含有相同模块的 chunk**。将 `optimization.mergeDuplicateChunks` 设置为 `false` 以禁用这项优化。

webpack.config.js
``` js
module.exports = {
  //...
  optimization: {
    mergeDuplicateChunks: false
  }
};
```

## `optimization.flagIncludedChunks`
`bool`

告知 webpack 确定和标记出作为其他 chunk 子集的那些 chunk，其方式是在已经加载过较大的 chunk 之后，就不再去加载这些 chunk 子集。`optimization.flagIncludedChunks` 默认会在 `production` mode 中启用，其他情况禁用。

webpack.config.js
``` js
module.exports = {
  //...
  optimization: {
    flagIncludedChunks: true
  }
};
```

## `optimization.occurrenceOrder`
`bool`

**告诉webpack找出模块的顺序，这将导致最小的初始捆绑**。默认情况下`optimization.occurrenceOrder``在production` 模式下**启用**，否则禁用。

webpack.config.js
``` js
module.exports = {
  //...
  optimization: {
    occurrenceOrder: false
  }
};
```

## `optimization.providedExports`
`bool`

告诉webpack找出模块提供哪些导出，以为生成更有效的代码`export * from ...`。默认情况下 `optimization.providedExports`**启用**。

webpack.config.js
``` js
module.exports = {
  //...
  optimization: {
    providedExports: false
  }
};
```

## `optimization.usedExports`


## `optimization.concatenateModules`

## `optimization.sideEffects`

## `optimization.portableRecords` 