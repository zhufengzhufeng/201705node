let str = 'i am handsome';

//第三方模块可以直接引用模块名字会自动去当前目录下查找，找到对应的package.json中的main文件 将其引入，如果找不到会去上级目录查找，到根目录未找到则报错
console.log(module.paths);
let s = require('xuedabao-pack');
console.log(s);
//将jw-handsome 下载下来使用
module.exports = str;