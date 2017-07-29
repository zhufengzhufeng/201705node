let fs = require('fs');
//写入默认utf8 文件不存在则创建，覆盖写入
let ws = fs.createWriteStream('2.txt',{highWaterMark:1});
//ws.write();  ws.end();
var flag = ws.write('1');//只能放字符串或者buffer类型,此方法是异步的
console.log(flag);
var flag = ws.write('1');
//flag代表是否还能写入，如果你给我的已经沾满了我的预期，那就返回false，否则返回true
console.log(flag);
ws.end('吃饱了');//关闭文件，end中的参数会在关闭前调用write方法写入到文件内，会将未写完的内容强制写入，最终关闭文件
// write after end 文件关闭后不能调用write方法