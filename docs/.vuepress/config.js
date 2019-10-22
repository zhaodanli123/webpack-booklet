module.exports = {
  title: 'webpack小册',
  description: '',
  markdown: {
    lineNumbers: true, // 代码块显示行号
  },
  themeConfig: {
    lastUpdated: 'Last Updated', // string | boolean  最后更新时间
    smoothScroll: true, //启用页面滚动效果
    nav: [ //导航栏
      {
        text: '手册',
        link: '/guide/concepts'
      },
      {
        text: '配置',
        link: '/configuration/config'
      },
      {
        text: 'API',
        link: '/api/guide'
      },
      {
        text: '指南',
        link: '/booklets/'
      },
      {
        text: 'loader',
        link: '/loaders/loader'
      },
      {
        text: 'plugin',
        link: '/plugins/'
      }
    ],
    sidebar: [{
      title: '概念', // 必要的
      collapsable: true, // 可选的, 默认值是 true,
      sidebarDepth: 1, // 可选的, 默认值是 1
      children: [{
          title: '概念', // 必要的
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 2, // 可选的, 默认值是 1
          path: '/guide/concepts',
        },
        {
          title: '入口起点', // 必要的
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 2, // 可选的, 默认值是 1
          path: '/guide/entry_points',
        },
        {
          title: '输出', // 必要的
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 2, // 可选的, 默认值是 1
          path: '/guide/output',
        },
        {
          title: '模式', // 必要的
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 2, // 可选的, 默认值是 1
          path: '/guide/mode',
        },
        {
          title: 'loader', // 必要的
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 2, // 可选的, 默认值是 1
          path: '/guide/loaders',
        },
        {
          title: '插件', // 必要的
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 2, // 可选的, 默认值是 1
          path: '/guide/plugins',
        },
        {
          title: '配置', // 必要的
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 2, // 可选的, 默认值是 1
          path: '/guide/configuration',
        },
        {
          title: '模块', // 必要的
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 2, // 可选的, 默认值是 1
          path: '/guide/modules',
        },
        {
          title: '模块解析', // 必要的
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 2, // 可选的, 默认值是 1
          path: '/guide/module_resolution',
        },
        {
          title: '依赖图', // 必要的
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 2, // 可选的, 默认值是 1
          path: '/guide/dependency_graph',
        },
        {
          title: 'manifest', // 必要的
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 2, // 可选的, 默认值是 1
          path: '/guide/the_manifest',
        },
        {
          title: '部署目标', // 必要的
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 2, // 可选的, 默认值是 1
          path: '/guide/targets',
        },
        {
          title: '模块热替换', // 必要的
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 2, // 可选的, 默认值是 1
          path: '/guide/hot_module_replacement',
        },
      ]
    },{
      title: '配置', // 必要的
      collapsable: true, // 可选的, 默认值是 true,
      sidebarDepth: 1, // 可选的, 默认值是 1
      children: [{
        title: '配置', // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        path: '/configuration/config',
      }, {
        title: '使用不同语言进行配置', // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        path: '/configuration/configuration-languages',
      }, {
        title: '多种配置类型', // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        path: '/configuration/configuration-types',
      }, {
        title: '入口和上下文', // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        path: '/configuration/entry-context',
      }, {
        title: '输出', // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        path: '/configuration/output',
      }, {
        title: '模块', // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        path: '/configuration/module',
      }, {
        title: '解析', // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        path: '/configuration/resolve',
      }, {
        title: '优化', // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        path: '/configuration/optimization',
      }, {
        title: '插件', // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        path: '/configuration/plugins',
      }, {
        title: '开发中Server(DevServer)', // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        path: '/configuration/dev-server',
      }, {
        title: 'devtool', // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        path: '/configuration/devtool',
      }, {
        title: '构建目标', // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        path: '/configuration/target',
      }, {
        title: 'watch 和 watchOptions', // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        path: '/configuration/watch',
      }, {
        title: '外部扩展', // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        path: '/configuration/externals',
      }, {
        title: 'Node.js', // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        path: '/configuration/node',
      }, {
        title: '性能', // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        path: '/configuration/performance',
      }, {
        title: '统计信息', // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        path: '/configuration/stats',
      }, {
        title: '其他选项', // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        path: '/configuration/other-options',
      }
    ]}, {
      title: 'API', // 必要的
      collapsable: true, // 可选的, 默认值是 true,
      sidebarDepth: 1, // 可选的, 默认值是 1
      children: [{
        title: '引导', // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        path: '/api/guide',
      }, {
        title: '命令行接口', // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        path: '/api/cli',
      }, {
        title: '包含统计数据的文件', // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        path: '/api/stats',
      }, {
        title: 'Node.js API', // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        path: '/api/node',
      }, {
        title: '模块热替换', // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        path: '/api/hot-module-replacement',
      }, {
        title: 'loader API', // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        path: '/api/loaders',
      }, {
        title: 'MODULES', // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        children: [{
          title: '模块方法', // 必要的
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 2, // 可选的, 默认值是 1
          path: '/api/module-methods',
        }, {
          title: '模块变量', // 必要的
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 2, // 可选的, 默认值是 1
          path: '/api/module-variables',
        }]
      },  {
        title: 'PLUGINS', // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        children: [{
          title: 'plugin API', // 必要的
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 2, // 可选的, 默认值是 1
          path: '/api/plugins',
        }, {
          title: 'compiler 钩子', // 必要的
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 2, // 可选的, 默认值是 1
          path: '/api/compiler-hooks',
        }, {
          title: 'compilation 钩子', // 必要的
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 2, // 可选的, 默认值是 1
          path: '/api/compilation-hooks',
        }, {
          title: 'resolver', // 必要的
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 2, // 可选的, 默认值是 1
          path: '/api/resolvers',
        }, {
          title: 'parser', // 必要的
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 2, // 可选的, 默认值是 1
          path: '/api/parser',
        }]
      }]
    }, {
      title: '指南', // 必要的
      collapsable: true, // 可选的, 默认值是 true,
      sidebarDepth: 1, // 可选的, 默认值是 1
      children: [{
        title: '指南', // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        path: '/booklets/',
      }, {
        title: '安装', // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        path: '/booklets/installation',
      }, {
        title: '起步', // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        path: '/booklets/getting-started',
      }, {
        title: '管理资源', // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        path: '/booklets/asset-management',
      }, {
        title: '管理输出', // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        path: '/booklets/output-management',
      }, {
        title: '开发环境', // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        path: '/booklets/development',
      }, {
        title: '模块热替换', // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        path: '/booklets/hot-module-replacement',
      }, {
        title: 'tree shaking', // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        path: '/booklets/tree-shaking',
      }, {
        title: '生产环境', // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        path: '/booklets/production',
      }, {
        title: '代码分离', // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        path: '/booklets/code-splitting',
      }, {
        title: '懒加载', // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        path: '/booklets/lazy-loading',
      }, {
        title: '缓存', // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        path: '/booklets/caching',
      }, {
        title: '创建 library', // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        path: '/booklets/author-libraries',
      }, {
        title: 'shim 预置依赖', // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        path: '/booklets/shimming',
      }, {
        title: '渐进式网络应用程序', // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        path: '/booklets/progressive-web-application',
      }, {
        title: 'TypeScript', // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        path: '/booklets/typescript',
      }, {
        title: '环境变量', // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        path: '/booklets/environment-variables',
      }, {
        title: '构建性能', // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        path: '/booklets/build-performance',
      }, {
        title: '内容安全策略', // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        path: '/booklets/csp',
      }, {
        title: '开发 - Vagrant', // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        path: '/booklets/development-vagrant',
      }, {
        title: '管理依赖', // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        path: '/booklets/dependency-management',
      }, {
        title: '公共路径', // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        path: '/booklets/public-path',
      }, {
        title: '集成', // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        path: '/booklets/integrations',
      }]
    }, {
      title: 'loader', // 必要的
      collapsable: true, // 可选的, 默认值是 true,
      sidebarDepth: 1, // 可选的, 默认值是 1
      children: [{
        title: 'loader', // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        path: '/loaders/loader',
      }, {
        title: 'babel-loader', // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        path: '/loaders/babel-loader',
      }, {
        title: 'yaml-frontmatter-loader', // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        path: '/loaders/yaml-frontmatter-loader',
      }, {
        title: 'cache-loader', // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        path: '/loaders/cache-loader',
      }, {
        title: 'coffee-loader', // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        path: '/loaders/coffee-loader',
      }, {
        title: 'coffee-redux-loader', // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        path: '/loaders/coffee-redux-loader',
      }, {
        title: 'config-loader', // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        path: '/loaders/config-loader',
      }, {
        title: 'coverjs-loader', // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        path: '/loaders/coverjs-loader',
      }, {
        title: 'css-loader', // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        path: '/loaders/css-loader',
      }, {
        title: 'eslint-loader', // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        path: '/loaders/eslint-loader',
      }, {
        title: 'exports-loader', // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        path: '/loaders/exports-loader',
      }, {
        title: 'expose-loader', // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        path: '/loaders/expose-loader',
      }, {
        title: 'extract-loader', // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        path: '/loaders/extract-loader',
      }, {
        title: 'file-loader', // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        path: '/loaders/file-loader',
      }, {
        title: 'gzip-loader', // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        path: '/loaders/gzip-loader',
      }, {
        title: 'html-loader', // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        path: '/loaders/html-loader',
      }, {
        title: 'i18n-loader', // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        path: '/loaders/i18n-loader',
      }, {
        title: 'imports-loader', // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        path: '/loaders/imports-loader',
      }, {
        title: 'istanbul-instrumenter-loader', // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        path: '/loaders/istanbul-instrumenter-loader',
      }, {
        title: 'jshint-loader', // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        path: '/loaders/jshint-loader',
      }, {
        title: 'json-loader', // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        path: '/loaders/json-loader',
      }, {
        title: 'json5-loader', // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        path: '/loaders/json5-loader',
      }, {
        title: 'bundle-loader', // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        path: '/loaders/bundle-loader',
      }, {
        title: 'mocha-loader', // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        path: '/loaders/mocha-loader',
      }, {
        title: 'multi-loader', // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        path: '/loaders/multi-loader',
      }, {
        title: 'node-loader', // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        path: '/loaders/node-loader',
      }, {
        title: 'null-loader', // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        path: '/loaders/null-loader',
      }, {
        title: 'polymer-webpack-loader', // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        path: '/loaders/polymer-webpack-loader',
      }, {
        title: 'postcss-loader', // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        path: '/loaders/postcss-loader',
      }, {
        title: 'raw-loader', // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        path: '/loaders/raw-loader',
      }, {
        title: 'react-proxy-loader', // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        path: '/loaders/react-proxy-loader',
      }, {
        title: 'restyle-loader', // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        path: '/loaders/restyle-loader',
      }, {
        title: 'sass-loader', // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        path: '/loaders/sass-loader',
      }, {
        title: 'script-loader', // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        path: '/loaders/script-loader',
      }, {
        title: 'source-map-loader', // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        path: '/loaders/source-map-loader',
      }, {
        title: 'style-loader', // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        path: '/loaders/style-loader',
      }, {
        title: 'svg-inline-loader', // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        path: '/loaders/svg-inline-loader',
      }, {
        title: 'thread-loader', // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        path: '/loaders/thread-loader',
      }, {
        title: 'transform-loader', // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        path: '/loaders/transform-loader',
      }, {
        title: 'url-loader', // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        path: '/loaders/url-loader',
      }, {
        title: 'val-loader', // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        path: '/loaders/val-loader',
      }, {
        title: 'worker-loader', // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        path: '/loaders/worker-loader',
      }, {
        title: 'workerize-loader', // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        path: '/loaders/workerize-loader',
      }, {
        title: 'less-loader', // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        path: '/loaders/less-loader',
      }]
    }, {
      title: 'plugin', // 必要的
      collapsable: true, // 可选的, 默认值是 true,
      sidebarDepth: 1, // 可选的, 默认值是 1
      children: [{
        
      }]
    }
    ]
  },
}