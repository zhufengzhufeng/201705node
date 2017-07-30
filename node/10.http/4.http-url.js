let http = require('http');
let fs = require('fs');
let mime = {'.js':'application/javascript','.css':'text/css'};
http.createServer(function (req,res) {
    let pathname = req.url;
    if(pathname === '/'){
        res.setHeader('Content-Type','text/html;charset=utf8');
        fs.createReadStream('index.html').pipe(res);
    }else{ // style.css index.js
        fs.exists('.'+pathname,function (flag) {
            if(flag){
                res.setHeader('Content-Type',mime[pathname.match(/\.\w+$/)[0]]+';charset=utf8')
                fs.createReadStream('.'+pathname).pipe(res);
            }else{
                res.statusCode = 404;
                res.end();
            }
        })
    }
}).listen(8080);