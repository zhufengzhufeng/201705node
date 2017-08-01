//server 是提供数据接口的

// 第一个接口 获取轮播图数据 /api/sliders
// 第二个接口 获取最新上映数据 /api/hot

let http = require('http');
let url = require('url');
let sliders = require('./sliders');
let fs = require('fs');
//读取图书
function read(callback) {
  fs.readFile('./book.json', 'utf8', function (err, data) {
    if (err || data === '') return callback([]); //如果文件不存在或者文件是空的 没有图书 返回空数组
    callback(JSON.parse(data));
  })
}
/*read(function (data) {
 console.log(data);
 });*/
http.createServer(function (req, res) {
  let {pathname, query} = url.parse(req.url, true);
  if (pathname === '/api/sliders') {
    res.end(JSON.stringify(sliders));
  } else if (pathname === '/api/hot') {
    read(function (data) {
      let books = data.reverse().slice(0, 9); //截取最后添加的9本图书
      res.end(JSON.stringify(books));
    });
  }
}).listen(3000);

//ajax jquery ajax-promise fetch
