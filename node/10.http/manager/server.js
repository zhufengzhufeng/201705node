let http = require('http');
let fs = require('fs');
let mime = require('mime');
let url = require('url');
let users = [{id:1,username:'张三',email:'1035465284@qq.com'}];
http.createServer(function (req,res) {
    let {pathname,query} = url.parse(req.url,true);
    if(pathname === '/'){
        res.setHeader('Content-Type','text/html;charset=utf8');
        fs.createReadStream('index.html').pipe(res);
    }
    else if(pathname === '/user'){ //路径为/user表示是对用户资源的操作
        let id = parseInt(query.id); //获取查询参数的id 可能为undefined，默认为字符串类型
        switch (req.method){ //大写
            case 'GET':
                res.setHeader('Content-Type','application/json;charset=utf-8');
                res.end(JSON.stringify(users));
                break;
            case 'POST':
                //获取请求体中的数据
                let str = '';
                req.on('data',function (chunk) {
                    str+=chunk;
                });
                req.on('end',function () {
                   let user = JSON.parse(str); //要添加的用户
                   user.id = users.length===0?1:users[users.length-1].id+1;
                   users.push(user);
                    res.setHeader('Content-Type','application/json;charset=utf-8');
                    res.end(JSON.stringify(users));
                });
                break;
            case 'PUT':
                break;
            case 'DELETE':
                //过滤掉数组中和当前传递相等的那一项
                users = users.filter(item=>item.id!==id);
                res.setHeader('Content-Type','application/json;charset=utf-8');
                res.end(JSON.stringify(users));
                break;
        }
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
