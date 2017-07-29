let fs = require('fs');
let EventEmitter = require('events');
let e = new EventEmitter(); //on once remove都是实例上的方法
let obj = {};
e.on('获取后',function () {
    if(Object.keys(obj).length === 2)console.log(obj);
});
fs.readFile('name.txt','utf8',function (err,data) {
    if(err)return console.log(err);
    obj.name = data;
    e.emit('获取后');
});
fs.readFile('age.txt','utf8',function (err,data) {
    if(err)return console.log(err);
    obj.age = data;
    e.emit('获取后');
});