//读出source的内容 写入到target中
let fs = require('fs');
/*fs.readFileSync('1.txt','utf8');
fs.readFile('1.txt','utf8',callback);
fs.writeFileSync('2.txt','xxx');
fs.writeFile('2.txt','xxx',callback);*/
function copySync(source,target) { //readFileSync writeFileSync
        let result = fs.readFileSync(source);
        fs.writeFileSync(target,result);
}
function copy(source,target,callback) { //readFile writeFile
    fs.readFile(source,function (err,data) {
        if(err) return callback(err); //如果有错误调用callback传递错误
        fs.writeFile(target,data,callback)
    })
}
//copySync('1.txt','2.txt');
copy('1.txt','2.txt',function (err) {
    if(err) return console.log(err);
    console.log('拷贝成功');
});
// 淹没可用内存，边读边写，而不是全部读到内存中，流


