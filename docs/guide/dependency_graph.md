# 依赖图 [dependency graph]

任何时候，一个文件依赖于另一个文件，webpack就把此视为文件之间有**依赖关系**。
这使得webpack可以接收非代码资源(例如image 、web fonts等)，并且可以把他们作为依赖提供给你的应用程序
webpack从命令行或配置文件中定义的一个**模块列表 (TODO DL:啥？)**开始，处理你的应用程序。从这些[入口起点](/guide/entry_points)开始。
webpack**递归**地构建一个依赖图，这个依赖图包含着应用程序所需的每个模块，然后将所有这些模块打包为少量的bundle