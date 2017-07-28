//入口文件 代码从这里开始运行
// 我喜欢：前端就用import export
// 后端用module.exports require

// let str = require('./a.js');
import str from './a.js'
console.log(str);
let a = b => b;
console.log(a(1));


//es7
let obj1 = {name:'zfpx'};
let obj2 = {age:9};
console.log({...obj1,...obj2});

//引用css样式
/*
import './index.css';
import './style.less';*/

//通过js引入图片是不会自动打包的
import o from './1.png'
let img = document.createElement('img');
img.src = o;
document.body.appendChild(img);

//如果不自动刷新 需要关闭webstorm保存功能


