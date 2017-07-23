//在文件外面套了一个闭包函数
//实现模块化的规范
//CMD seajs 就近依赖 需要在引入即可
//AMD requirejs 依赖前置 先引进来 先定义好在使用
//commonjs nodejs 基于文件读写的 天生自带模块化
// 规范了 如何定义模块 声明一个js文件 一个文件就是一个模块
// 如何引用一个模块 require
// 如何导出一个模块 exports / module.exports

// 文件模块 核心模块 第三方模块
//exports
//require
//module
//__dirname
//__filename 这五个形参也叫全局变量，可以直接使用