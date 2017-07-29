let fs = require('fs');
let EventEmitter = require('events');
let e = new EventEmitter(); //on once remove都是实例上的方法
let obj = {};
e.on('获取后',function () { //订阅
    if(Object.keys(obj).length === 2)console.log(obj);
});
fs.readFile('name.txt','utf8',function (err,data) {
    if(err)return console.log(err);
    obj.name = data;
    e.emit('获取后'); //发布
});
fs.readFile('age.txt','utf8',function (err,data) {
    if(err)return console.log(err);
    obj.age = data;
    e.emit('获取后'); //发布
});
// -> node版本不能低于7.6
//es6 promise 承诺 针对的callback 提供了链式写法， es6 generator(想让异步代码写起来像同步的)， function * yield ->  async await (想让异步代码写起来像同步的) 语法更加简洁
// async await 是基于promise 高版本浏览器自带promise
// ajax 四部曲 -> fetch fetch也是基于promise