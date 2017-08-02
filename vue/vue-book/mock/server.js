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

//写到book.json中的方法
function write(data,callback) {
  fs.writeFile('./book.json',JSON.stringify(data),callback);
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
  }else if(pathname === '/api/book'){
    // 请求方法 读取出的是大写
    let method = req.method;
    let id = parseInt(query.id); //转换成数字类型
    if(method === 'GET'){
        if(id){ //获取一个
          read(function (books) {
            //find找到后返回那一项，找不到返回的是undefined
            let book = books.find(item=>item.id==id);
            res.end(JSON.stringify(book));
          });
        }else{ // 获取全部    返回所有图书
          read(function (books) {
            res.end(JSON.stringify(books));
          });
        }
    }else if(method === 'POST'){
      //接收传递过来的数据，添加一个id写入到book,json中
      let str = '';
      req.on('data',function (data) {
        str+=data;
      });
      req.on('end',function () {
        let book = JSON.parse(str);
        read(function (books) { //读取所有的图书 判断是否有书
            book.id = books.length===0?1:books[books.length-1].id+1;
            books.push(book);
            write(books,function () {
              res.end(JSON.stringify(book));//添加成功后返回成功的那一项
            });
        });
      });
    }else if(method === 'PUT'){
      /*
        1,拿到id
        2.获取传递的数据
        3.读出数据去更改内容
        4.将最新的数据写回到json中
        5.响应结束返回修改的那一项
      */
      let str = '';
      req.on('data',function (chunk) {
        str+=chunk;
      });
      req.on('end',function () {
        let book = JSON.parse(str);
        read(function (books) {
          books = books.map(item=>{
            if(item.id == id){
              return book;
            }
            return item;
          });
          write(books,function () {
            res.end(JSON.stringify(book));
          });
        });
      });






    }else if(method === 'DELETE'){
        read(function (books) {
          books = books.filter(item=>item.id !=id);
          write(books,function () {
             res.end(JSON.stringify({}));
          });
        })
    }
  }
}).listen(3000);

//ajax jquery ajax-promise fetch
