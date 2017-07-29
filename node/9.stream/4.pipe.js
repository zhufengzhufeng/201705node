let fs = require('fs');
function copy(source,target) {
    let rs = fs.createReadStream(source,{highWaterMark:4});
    let ws = fs.createWriteStream(target,{highWaterMark:1});
    rs.pipe(ws);//可读流.pipe(可写流); 异步的 并且是读一点写一点
    //防止淹没可用内存
}
copy('1.txt','3.txt');