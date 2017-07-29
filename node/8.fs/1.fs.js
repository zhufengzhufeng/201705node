//fileSystem 文件系统 操作文件 目录。。。
//node自带的模块 核心模块/ 内置模块
let fs = require('fs'); //同步方法一般和异步方法同时给出
//能用异步绝不用同步
//readFileSync 读取文件同步方式
//读取的特点:
//    读的文件必须要存在吗？  读取的文件必须存在
//    读出的内容编码是？ 读取时默认读出的内容都是buffer类型
//    读取文件不能比内存大

//同步可以try catch
/*let name = fs.readFileSync('name.txt','utf8');
 let age = fs.readFileSync('age.txt','utf8');
 console.log({name,age});*/

//异步读取 error-first
let obj = {};
//1.嵌套callback 回调地狱
fs.readFile('name.txt','utf8',function (err,data) {
    if(err) return console.log(err);
    obj.name = data;
    out();
});
fs.readFile('age.txt','utf8',function (err,data) {
    if(err) return console.log(err);
    obj.age = data;
    out();
});
function out() { //Object.keys
    console.log(Object.keys(obj)); //将对象的key转化成了数组
    if(Object.keys(obj).length===2)console.log(obj);
}
