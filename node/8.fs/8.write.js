//readFile 不能读取比内存大的文件

let fs = require('fs');
// 写的特点  1.写入的编码格式 是字符串 utf8格式,会将内容toString
//         2.写的文件不存在 如果文件不存在则会创建，如果存在会清空内容，在写入
//fs.writeFileSync('1.txt',new Buffer('珠峰'));

//异步写入的方法
fs.writeFile('1.txt',3,function (err) { //成功后的回调
    console.log(err);
});