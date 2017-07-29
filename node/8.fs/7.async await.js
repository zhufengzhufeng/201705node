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
//不支持并发调要 async await es7中的关键字，必须搭配使用l
async function getObj() {
    let name = await read('name.txt');//name就是成功后的结果
    let age = await read('age.txt');
    console.log(name,age);
}
getObj();
// callback - > promise - > async await
