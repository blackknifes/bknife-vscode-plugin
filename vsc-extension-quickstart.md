＃欢迎来到您的VS代码扩展

##文件夹中有什么

*此文件夹包含扩展程序所需的所有文件。
*`package.json`-这是您声明扩展名和命令的清单文件。
  *示例插件注册命令并定义其标题和命令名称。使用此信息，VS代码可以在命令调色板中显示命令。它不需要加载插件。
*``src/extension.ts`-这是您将提供命令实现的主要文件。
  *文件导出一个函数`activate'，这被称为第一次激活扩展名（在这种情况下，通过执行命令）。在“激活”函数中，我们称为``registerCommand''。
  *我们将包含该命令作为第二个参数实现的函数传递给`regissionCommand'。

＃＃ 设置

*安装推荐的扩展程序（amodio.tsl-Problem-MATCHER和DBAEUMER.VSCODE-ESLINT）


##起床并立即奔跑

*按`f5`在带有扩展名加载的新窗口打开新窗口。
*通过按下（`ctrl+shift+p`+p`或`cmd+shift+p`在Mac上）从命令调色板中运行命令，然后输入`Hello world'。
*在“ src/extension.ts”内部的代码中设置断点进行调试。
*从调试控制台中的扩展程序中查找输出。

＃＃ 做出改变

*在更改`src/extension.ts'中的代码之后，可以从调试工具栏重新启动扩展名。
*您还可以重新加载（Mac上的ctrl+r`或`cmd+r`）VS代码窗口带有扩展名来加载更改。


##探索API

*当您打开文件`node_modules/@types/vscode/index.d.ts`时，都可以打开我们的API。

##运行测试

*打开调试视图（`ctrl+shift+d`或`cmd+shift+d`在Mac上）和从启动配置下拉访问pick p pick`扩展测试'打开。
*按`f5`在新窗口中运行测试，并加载扩展名。
*请参阅调试控制台中测试结果的输出。
*更改`src/test/suite/extension.test.ts`或在“ test/suite”文件夹中创建新的测试文件。
  *提供的测试跑步者将仅考虑匹配名称模式`**。test.ts'的文件。
  *您可以在“ Test”文件夹中创建文件夹，以任何您想要的方式构建测试。

##走得更远

*通过[捆绑扩展名]（https://code.visualstudio.com/api/working-with-with-extensions/bundling-extension）来减少扩展大小并改善启动时间。
* [发布您的扩展名]（https://code.visualstudio.com/api/working-with-with-extensions/publishish-publishish-extension）在VSCODE扩展市场上。
*通过设置[连续集成]（https://code.visualstudio.com/api/working-with-with-extensions/continouul-integration）来自动构建。