let http = require('http');
let fs = require('fs');
let mime = {'.js':'application/javascript','.css':'text/css'};
let server = http.createServer((req,res) =>{
    //将文件读取并写入res
    //根据不同的请求的路径返回不同的结果 => 路由
    console.log(req.url); //请求路径
    console.log(req.headers);//请求头
    console.log(req.method);//请求方法 浏览器默认是get 请求方法都是大写的
    if(req.url === '/'){
        res.setHeader('Content-Type','text/html;charset=utf-8');
        fs.createReadStream('./index.html').pipe(res); //pipe方法 rs.pipe(ws);
    }
    else{ //如果路径是 /style.css=> text/css   /index.js => application/javascript
        //exists是判断文件是否存在，如果存在返回true 不存在返回false
        fs.exists('.'+req.url,function (flag) {
            if(flag){
                res.setHeader('Content-Type',mime[req.url.match(/\.\w+$/)[0]]+';charset=utf-8');
                fs.createReadStream('.'+req.url).pipe(res);
            }else{
                res.statusCode = 404;
                res.end();
            }
        });

    }
  /*  else if(req.url === '/style.css'){
        res.setHeader('Content-Type','text/css;charset=utf-8');
        fs.createReadStream('./style.css').pipe(res); //pipe方法 rs.pipe(ws);
    }else if(req.url === '/index.js'){
        res.setHeader('Content-Type','application/javascript;charset=utf-8');
        fs.createReadStream('./index.js').pipe(res); //pipe方法 rs.pipe(ws);
    }*/

    /*else{ //当服务没有此文件时 404
        res.statusCode = 404;
        res.end();
    }*/
});
let port = 3000;
server.listen(port,function () {
    console.log(`start ${port}`);
});

// 自动重启node服务， 会监控代码的改动 自动重启 nodemon,本地安装  全局安装
// npm install nodemon -g
// nodemon 文件名