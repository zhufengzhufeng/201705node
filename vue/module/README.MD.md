## commonjs nodejs
- 建一个js 就是一个模块
- 要引用模块使用require
- 导出模块 exports module.exports

## es6 module
- 建一个js 就是一个模块
- import
- export
- 通过babel转化es6代码

> 在浏览器默认目前不支持，在node中也不识别

## webpack是一个打包工具
- js 和css 引用过多会导致请求数过多，可以合理的打包成一个
- 图片 icon图标转换成base64 不会发送http请求
- 用es6的模块化，webpack集成babel，转化es6代码转成es5
- less sass stylus 自动编译
- 压缩代码
- 可以实现提供端口号，实现自动刷新的功能