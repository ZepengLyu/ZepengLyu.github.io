---
title: "VsCode configuration"
date: "2026-02-06"
slug: "vscode-configuration"
category: "blog post"
---

`tasks.json`：配置和管理自动化任务，如编译、构建、运行脚本

`launch.json`：配置调试器，定义调试会话的启动和运行参数

tasks.json 为 launch.json 提供了运行环境

settings.json 文件可以包含用户的自定义设置，以覆盖 VS Code 默认设置，满足不同用户及不同工作区的需求。

c_cpp_properties.json 文件，可以用来为不同的编译器配置参数，例如编译器路径、标准库、调试设置等。

### HTML 的调试
![example](./csrf-attack/example.png)

一个调试 HTML 的 launch.json 实例

```
{  "type": "chrome",
	"request": "launch",  
	"name": "debugHTML",
	"sourceMaps": true, 
	"webRoot":"${workspaceFolder}", 
	// "userDataDir": "${tmpdir}", //会自动生成一个${tmpdir}文件名，如果报错可以开启这个选项 
	"file":"${file}",  
	// "port":8090 }
```

`sourceMaps` 能够保持源码映射，因为从开发环境到生产环境，JS 代码可能会发生如下变化：
1. 压缩，减小体积
2. 多个文件合并，减少 HTTP 请求数
3. 其他语言编译成 JavaScript
`sourceMaps` 可以帮助我们更好的在实际环境中 debug


##### C/C++ 的调试

使用 Command+Shift+P 进行 Configuration UI 界面， 设定 includePath，例如 
`/opt/homebrew/Cellar/openssl@3/3.5.0/**`，之后生成 c_cpp_properties.json 文件

launch.json 用于设置调试选项
在 launch.json 文件中，设置
`"program": "${fileDirname}/${fileBasenameNoExtension}",`
即每次选择当前文件进行编译
在 args 处传递 int main( ) 的参数，例如
`"args": ["4443"],`


tasks.json 用于设置编译选项
在 tasks.json 文件中，在 args 处选择头文件库文件目录，以及链接的动态库，例如
```

"args": [
"-fcolor-diagnostics",
"-fansi-escape-codes",
"-g",
"${file}",
"-o",
"${fileDirname}/${fileBasenameNoExtension}",
"-I",
"/opt/homebrew/Cellar/openssl@3/3.5.0/include",
"-L",
"/opt/homebrew/Cellar/openssl@3/3.5.0/lib",
"-l",
"ssl",
"-l",
"crypto"
],
```
`"-g"` 表示生成调试信息



## 路径问题

C 语言 在 include 宏中引入头文件时的相对路径是基于当前文件的。

但是在代码段的相对路径是基于 cwd 的。



`Ctrl+k+0` 进行代码一键折叠

`pd. set_option ('display.max_columns', None)` 用于设置终端输出宽度
