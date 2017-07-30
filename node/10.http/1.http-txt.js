//搭建http服务,内置http服务 核心模块
let http = require('http');
let listener = (req,res) =>{//请求的监听，请求到来时执行
    //res是一个可写流
    res.setHeader('Content-Type','text/plain;charset=utf-8');
    res.statusCode = 202; //设置状态码
    res.end('我好帅'); //end后不能再write，默认浏览器解析的是gbk
};
let server = http.createServer(listener);
let port = 80;
server.listen(port,function () {
    console.log(`start ${port}`);
});//默认是80 如果写80默认不需要加端口号
