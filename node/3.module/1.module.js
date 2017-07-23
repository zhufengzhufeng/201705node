let a = 1;
//1.global.a我们可以直接将变量定义在global上 多个模块共享数据，尽量不要定在global上除非很重要

//2.导出模块 exports / module.exports
console.log(exports);
//exports.a = a; // exports = 1

module.exports = a;
/*
 (function(exports,require,module,__dirname,__filename){
 module.exports = exports = {}
 let a = 1;
 exports.a = a;
 return module.exports
 })(xxxxxx);
* */