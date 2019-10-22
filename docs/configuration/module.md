# 模块
这些选项决定了如何处理项目中的[不同类型的模块](../guide/modules)

## module.noParse
`RegExp` `[RegExp]` `function(resource)` `string` `[string]`

防止 `webpack` 解析那些任何与给定正则表达式相匹配的文件。忽略的文件中**不应该含有** `import`, `require`, `define` 的调用，或任何其他导入机制。忽略大型的 library 可以提高构建性能。
webpack.config.js
``` js
module.exports = {
  //...
  module: {
    noParse: /jquery|lodash/,
  }
};
``` 
``` js
module.exports = {
  //...
  module: {
    noParse: (content) => /jquery|lodash/.test(content)
  }
};
```
## module.rules
`[Rule]`

创建模块时，匹配请求的[规则](/configuration/module/#rule)数组。这些规则能够修改模块的创建方式。这些规则能够对模块(module)应用 loader，或者修改解析器(parser)。

## Rule
`object`

每个规则可以分为三部分 - **条件**(condition)，**结果**(result)和**嵌套规则**(nested rule)。

### Rule条件
条件有两种输入值：

1. resource：请求文件的绝对路径。它已经根据 [`resolve` 规则](/configuration/resolve)解析。

2. issuer: 被请求资源(requested the resource)**的模块文件**的绝对路径。是导入时的位置。

**ie**: 从 `app.js` 导入 `'./style.css'`，`resource` 是 `/path/to/style.css`. `issuer` 是 `/path/to/app.js`。

在规则中，属性 [`test`](#rule-test), [`include`](#rule-include), [`exclude`](#rule-exclude) 和 [`resource`](#rule-resource) 对 `resource` 匹配，并且属性 [`issuer`](#rule-issuer) 对 `issuer` 匹配。

当使用多个条件时，所有条件都匹配。
::: warning
小心！resource 是文件的_解析路径，这意味着符号链接的资源是真正的路径，而不是_符号链接位置。在使用工具来符号链接包的时候（如 `npm link`）比较好记，像 `/node_modules/` 等常见条件可能会不小心错过符号链接的文件。注意，可以通过 [`resolve.symlinks`](/configuration/resolve#resolve-symlinks) 关闭符号链接解析（以便将资源解析为符号链接路径）。
:::

### Rule结果
规则结果只在规则条件匹配时使用。

规则有两种输入值：
1. 应用的 loader：应用在 resource 上的 loader 数组。
2. Parser 选项：用于为模块创建解析器的选项对象。

这些属性会影响 loader：[`loader`], [`options`], [`use`]。

也兼容这些属性：[`query`], [`loaders`]。

[`enforce`] 属性会影响 `loader` 种类。不论是普通的，前置的，后置的 loader。

[`parser`] 属性会影响 `parser` 选项。


## 嵌套的Rule

## Rule.enforce

## Rule.exclude
`Rule.exclude` 是 `Rule.resource.exclude` 的简写。如果你提供了 `Rule.exclude` 选项，就不能再提供 `Rule.resource`。详细请查看 [`Rule.resource`](#Rule-resource) 和 [`Condition.exclude`](/configuration/module/#条件)。

## Rule.include
`Rule.include` 是 `Rule.resource.include`的简写。如果你提供了 `Rule.include` 选项，就不能再提供 `Rule.resource`。详细请查看 [`Rule.resource`](#Rule-resource) 和 [`Condition.include`](/configuration/module/#条件)。

## Rule.issuer
一个[条件](/configuration/module/#条件)，用来与被发布的 request 对应的模块项匹配。在以下示例中，a.js request 的发布者(issuer)是 index.js 文件的路径。

index.js
``` js
import A from './a.js';
```
这个选项可以用来将 `loader` 应用到一个特定模块或一组模块的依赖中。

## Rule.loader
`Rule.loader` 是 `Rule.use: [ { loader } ] `的简写。详细请查看 [`Rule.use`](#Rule-use) 和 [`UseEntry.loader`](#useentry)。

## Rule.oneOf
[规则](#rule)数组，当规则匹配时，只使用**第一个**匹配规则。

webpack.config.js
``` js
module.exports = {
  //...
  module: {
    rules: [
      {
        test: /\.css$/,
        oneOf: [
          {
            resourceQuery: /inline/, // foo.css?inline
            use: 'url-loader'
          },
          {
            resourceQuery: /external/, // foo.css?external
            use: 'file-loader'
          }
        ]
      }
    ]
  }
};
```

## Rule.options / Rule.query

## Rule.parser
解析选项对象。所有应用的解析选项都将合并。

解析器(parser)可以查阅这些选项，并相应地禁用或重新配置。大多数默认插件，会如下解释值：

将选项设置为 `false`，将禁用解析器。
将选项设置为 `true`，或不修改将其保留为 undefined，可以**启用解析器**。
然而，一些解析器(parser)插件可能不光只接收一个布尔值。例如，内部的 `NodeStuffPlugin` 差距，可以接收一个对象，而不是 `true`，来为特定的规则添加额外的选项。

示例（默认的插件解析器选项）：
``` js
module.exports = {
  //...
  module: {
    rules: [
      {
        //...
        parser: {
          amd: false, // 禁用 AMD
          commonjs: false, // 禁用 CommonJS
          system: false, // 禁用 SystemJS
          harmony: false, // 禁用 ES2015 Harmony import/export
          requireInclude: false, // 禁用 require.include
          requireEnsure: false, // 禁用 require.ensure
          requireContext: false, // 禁用 require.context
          browserify: false, // 禁用特殊处理的 browserify bundle
          requireJs: false, // 禁用 requirejs.*
          node: false, // 禁用 __dirname, __filename, module, require.extensions, require.main 等。
          node: {...} // 在模块级别(module level)上重新配置 node 层(layer)
        }
      }
    ]
  }
}
```

## Rule.resource

## Rule.resourceQuery

## Rule.rules

## Rule.sideEffects

## Rule.test
`Rule.test` 是 `Rule.resource.test` 的简写。如果您提供了一个 `Rule.test` 选项，就不能再提供`Rule.resource`。详细请查看 [`Rule.resource`](#Rule-resource) 和 [`Condition.test`](/configuration/module/#条件) 。
## Rule.type

## Rule.use
`[UseEntry]` `function(info)`

### **`[UseEntry]`**   👇
`Rule.use` 可以是一个压缩模块的 [`UseEntries`](#useentry) 复制。每个入口（entry）指定使用一个加载程序。

传递字符串（如：）`use: [ 'style-loader' ]`是加载程序属性的简写方式（如：）`use: [ { loader: 'style-loader'} ]`。

可以通过传递多个加载程序来链接加载程序，这些加载程序将**从右到左**（最后配置到第一个配置）应用。

webpack.config.js
``` js
module.exports = {
  //...
  module: {
    rules: [
      {
        //...
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          {
            loader: 'less-loader',
            options: {
              noIeCompat: true
            }
          }
        ]
      }
    ]
  }
};
```

### **`function(info)`** 👇
`Rule.use`也可以是一个**函数**，该函数接收描述正在加载的模块的object参数，并且必须返回UseEntry项**数组**。

该info对象的参数有以下字段：

- compiler：当前的webpack编译器（可以未定义）
- issuer：导入正在加载的模块的模块的路径
- realResource：始终是要加载的模块的路径
- resource：要加载的模块的路径，通常等于，realResource除非通过!=!请求字符串中的资源名称覆盖
与数组相同的快捷方式可用于返回值（即use: [ 'style-loader' ]）。
webpack.config.js
``` js
module.exports = {
  //...
  module: {
    rules: [
      {
        use: (info) => ([
          {
            loader: 'custom-svg-loader'
          },
          {
            loader: 'svgo-loader',
            options: {
              plugins: [{
                cleanupIDs: { prefix: basename(info.resource) }
              }]
            }
          }
        ])
      }
    ]
  }
};
```
详细信息请查看[`UseEntry`](#useentry)。

## 条件
条件可以是这些之一：

- **字符串**：匹配输入必须以提供的字符串开始。是的。**目录绝对路径或文件绝对路径**。
- **正则表达式**：test 输入值。
- **函数**：调用输入的函数，必须返回一个真值(truthy value)以匹配。
- **条件数组**：至少一个匹配条件。
- **对象**：匹配所有属性。每个属性都有一个定义行为。
`{ test: Condition }`：匹配特定条件。一般是提供一个正则表达式或正则表达式的数组，但这不是强制的。

`{ include: Condition }`：匹配特定条件。一般是提供一个字符串或者字符串数组，但这不是强制的。

`{ exclude: Condition }`：排除特定条件。一般是提供一个字符串或字符串数组，但这不是强制的。

`{ and: [Condition] }`：必须匹配数组中的所有条件

`{ or: [Condition] }`：匹配数组中任何一个条件

`{ not: [Condition] }`：必须排除这个条件

示例：
``` js
module.exports = {
  //...
  module: {
    rules: [
      {
        test: /\.css$/,
        include: [
          path.resolve(__dirname, 'app/styles'),
          path.resolve(__dirname, 'vendor/styles')
        ]
      }
    ]
  }
};
```

## UseEntry
`object` `function(info)`

### `object` 👇

有必须一个`loader`属性的英文字符串。它使用装载机解析选项（[`resolveLoader`](/configuration/resolve#resolveloader)），对于相配置中的 [`context`](/configuration/entry-context#context) 来解析。

可以有一个 `options` 属性为类别或对象。值可以传递到loader中，将其理解为**loader选项**。

由于兼容性原因，也可能有query属性，它是options属性的别名。使用options属性替代。

注意，**webpack需要生成资源和所有loader的独立模块标识，包括选项**。它尝试对选项对象使用JSON.stringify。这在99.9％的情况下是可以的，但是如果将相同的loader缩小为相同资源的不同选项，并且选项具有一些带字符的值，则可能不是唯一的。

如果选项对象不被字符化（例如循环JSON），它也会中断。因此，你可以在选项对象使用ident属性，作为唯一标识符。

webpack.config.js
``` js
module.exports = {
  //...
  module: {
    rules: [
      {
        loader: 'css-loader',
        options: {
          modules: true
        }
      }
    ]
  }
};
```

### `function(info)` 👇

A UseEntry也可以是一个函数，该函数接收描述正在加载的模块的object参数，并且必须返回options对象。这可用于按模块更改加载程序选项。

该info对象的参数有以下字段：

compiler：当前的webpack编译器（可以未定义）
issuer：导入正在加载的模块的模块的路径
realResource：始终是要加载的模块的路径
resource：要加载的模块的路径，通常等于，realResource除非通过!=!请求字符串中的资源名称覆盖
webpack.config.js
``` js
module.exports = {
  //...
  module: {
    rules: [
      {
        loader: 'file-loader',
        options: {
          outputPath: 'svgs'
        }
      },
      (info) => ({
        loader: 'svgo-loader',
        options: {
          plugins: [{
            cleanupIDs: { prefix: basename(info.resource) }
          }]
        }
      })
    ]
  }
};
```

## 模块上下文(module context) 
