let http = require('http');
let fs = require('fs');
let server = http.createServer((req,res) =>{
    //将文件读取并写入res
    res.setHeader('Content-Type','text/html;charset=utf-8');
    fs.createReadStream('./index.html').pipe(res); //pipe方法 rs.pipe(ws);

    /*fs.readFile('./index.html',function (err,data) {
        if(err) return console.log(err);
        res.end(data);
    });*/

    /*let result = fs.readFileSync('./index.html');
    res.end(result);*/
});
let port = 3000;
server.listen(port,function () {
    console.log(`start ${port}`);
});
