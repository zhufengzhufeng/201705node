// module.exports  exports  {}

var a  = b = {};
b= 1;
//1.exports.属性
//2.module.exports = 值
//  module.exports.属性
//3.不对的 不能直接更改exports对象
console.log(a);