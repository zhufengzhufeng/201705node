let fs = require('fs');
function read(filename) {
    //new Promise中必须传递一个executor函数，这个函数中 有成功的回掉和失败的回调
    return new Promise((resolve, reject) => {
        fs.readFile(filename, 'utf8', function (err, data) {
            if (err)return reject(err);
            resolve(data);
        });
    })
}
//all方法中 传递的是一个promise实例的数组,会重新返回一个promise实例
Promise.all([read('name.txt'),read('age.txt')]).then(([name,age])=> {
    //data是 数组，按照请求的顺序 返回的结果组成的数组     ['珠峰',100] 可以使用解构赋值
    console.log(name,age);
}).catch(function (err) {//如果某一步出错，则会进入catch
    
});
//链式写法
/*
let obj = {};
read('name.txt').then(data => { //读取name成功后读取age
    obj.name = data;
    return read('age.txt');//如果返回的是promise 可以继续then
}).then(data => { //then处理的是age的数据
    obj.age = data;
    console.log(obj);
}).catch(err => { //只写一次即可，有错误会调用catch
    console.log(err);
});*/
