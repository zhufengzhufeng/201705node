let fs = require('fs');
//默认我们不会修改highWaterMark
//默认读取一次4b 写入1b
function copy(source,target) {
    //先构建可读流和可写流
    let rs = fs.createReadStream(source,{highWaterMark:4});
    let ws = fs.createWriteStream(target,{highWaterMark:1})
    //1.先读取一次，如果不能写入，则暂停
    // rs.on('data')  ws.write()==false rs.pause();
    rs.on('data',function (data) {
        if(ws.write(data)===false){
            rs.pause();
        }
    });
    ws.on('drain',function () {//2.当嘴里的1个 和地下的三个都吃完了 会触发一个事件 ws.on('drain')
        console.log('干了');
        rs.resume();//3.在drain方法恢复读取 rs.resume()
    });
    //4.当读取完毕后，将嘴关闭
    rs.on('end',function () {
        ws.end();
    });
}
copy('1.txt','3.txt');