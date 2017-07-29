let fs = require('fs');
//创建一个可读流 读取文件必须存在,读取的内容都是buffer
let rs = fs.createReadStream('1.txt',{highWaterMark:1}); //b 字节
//rs继承了 事件库 events，通过发布订阅来读取数据
//默认叫非流动模式 -> 流动模式  通过监听data事件
let a = [];
rs.on('data',function (data) { //会默认发布data事件，会将数据传入到callback中
    console.log(data); //data是buffer类型 将buffer拼接起来
    a.push(data);
    rs.pause(); //暂停的是data事件的触发
    setTimeout(function () {
        rs.resume(); //恢复流的读取，继续开始data事件的触发
    },1000);
}); //会默认不停的触发data事件 直到数据读干
rs.on('end',function () {
    //当文件读取完毕后执行此方法
    console.log(a);
    console.log(Buffer.concat(a).toString());
});
rs.on('error',function (err) {}); //可以监听错误
// 可读流的方法 on('data')  on('end') on('error'); rs.pause()  rs.resume()

