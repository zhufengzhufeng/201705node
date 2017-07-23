//全局对象 global 最大 挂载在global上的属性也可以直接访问
//文件中的this 被更改了,默认node在文件中执行时 套了一个闭包函数，为了实现模块化，在此函数中将this指向改掉了
console.log(this); //在文件中直接打印this并不是global
//我们声明的属性 不会自动挂载在global上，不会自动污染全局变量
//console.log(global);
//process 进程 单线程
//Buffer 缓冲区 缓存区 可以表示内存
//clearImmediate 清除立即
//setImmediate
//clearTimeout
//setTimeout
//console.log error warn info dir time timeEnd
//1.console
/*console.time('a');
for(var i = 0;i< 100;i++){}
console.timeEnd('a');*/
//2.setTimeout  setTimeout中的this指向的是自己
// 改变this指向 call 一个个传递  apply 传递一个数组
// bind改变this指向  会返回一个新的函数 函数柯里化（预置参数）
// 暂存this变量
// 箭头函数 没有this指向 this指向是上一层,没有arguments
/*setTimeout((eat) => {
    console.log(arguments);
},2000,'馒头');*/
/*function a(x,y) {
    return x+y;
}
let b  = a.bind(this,1);
console.log(b(2)); //2传递的是y*/

//3.setImmediate 立即 不能设置时间 ,都是异步队列中的代码
setImmediate(function () {
    console.log('setImmediate');
});
setTimeout(function () {
    console.log('setTimeout');
});

//4. process 进程 
console.log(process.pid);
//process.kill(12824);// 杀死进程
console.log(process.env); //在开发时会设置环境变量
let url = ''; //上线时 不会设置node_env 所以会自动采用下面的路径
if(process.env.NODE_ENV=='DEV'){
      url = 'http://localhost:3000';
}else{
      url = 'http://www.baidu.com';
}
console.log(url);
process.nextTick(function () { //异步方法
    console.log('nextTick');
});
//异步方法 setTimeout nextTick setImmediate
