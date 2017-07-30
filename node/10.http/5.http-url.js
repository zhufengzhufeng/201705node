let http = require('http');
let fs = require('fs');
let mime = require('mime'); //使用mime
let url = require('url');//专门处理路径的
http.createServer(function (req,res) {
    let {pathname,query} = url.parse(req.url,true); //req.url是包括？后面的内容的，我们想取的是路径后面的包括/ 问号前面的
    if(pathname === '/'){
        res.setHeader('Content-Type','text/html;charset=utf8');
        fs.createReadStream('index.html').pipe(res);
    }else{
        fs.exists('.'+pathname,function (flag) {
            if(flag){
                res.setHeader('Content-Type',mime.lookup(pathname)+';charset=utf8');
                fs.createReadStream('.'+pathname).pipe(res);
            }else{
                res.statusCode = 404;
                res.end();
            }
        })
    }
}).listen(8080);
//第三方模块 实现类型转化 mime
//npm init -y   npm install mime --save