// 同步/异步 callback，require是同步方法,一个模块多次使用 只执行一次会缓存模块
let a = require('./1.module')
console.log(a);





//默认require的返回值 并不是exports对象，是module.exports