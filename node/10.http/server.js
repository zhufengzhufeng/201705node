let http = require('http');
let fs = require('fs');
let mime = require('mime');
let url = require('url');
http.createServer(function (req,res) {
    let {pathname,query} = url.parse(req.url,true);
    if(pathname === '/'){
        res.setHeader('Content-Type','text/html;charset=utf8');
        fs.createReadStream('index.html').pipe(res);
    }else if(pathname === '/clock'){
        let time = new Date();
        res.end(
            JSON.stringify(
                {time:time.toLocaleString()}
            )
        )
    }

    else{
        fs.exists('.'+pathname,function (flag) {
            if(flag){
                res.setHeader('Content-Type',mime.lookup(pathname)+';charset=utf8');
                fs.createReadStream('.'+pathname).pipe(res);
            }else{
                res.statusCode = 404;res.end();
            }
        })
    }
}).listen(8080);
