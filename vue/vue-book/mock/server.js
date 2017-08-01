//server 是提供数据接口的

// 第一个接口 获取轮播图数据 /sliders

let http = require('http');
let url = require('url');
let sliders = require('./sliders');
http.createServer(function (req,res) {
  let {pathname,query} = url.parse(req.url,true);
  if(pathname === '/api/sliders'){
    res.end(JSON.stringify(sliders));
  }
}).listen(3000);

//ajax jquery ajax-promise fetch
