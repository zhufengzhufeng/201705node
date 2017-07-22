//1.pop shift unshift push slice splice concat lastIndexOf indexof reverse sort join forEach map

//find includes map forEach reduce filter some
//1.更改语法 2.配置node环境
/*function a(a,b) {
    return a+b;
}*/
// 1) arrow func
//1.如果是对象 需要用()包住
// let a = (a,b) =>({});
// console.log(a(1,2));
//2.没有this指向，从而解决了this问题（同样没有arguments）用箭头函数解决this问题，点前面的是谁this就是谁, bind可以改变this指向问题 但是只能bind一次,可以使用变量保存的方式保留this指向,
/*let obj = {
    a:function (a,b,c) {
       setTimeout(() => {console.log(arguments);},500);
    }
};
obj.a(1,2,3);*/

//闭包： 私有化 当一个函数执行后 返回一个引用类型对象，并且被外部变量接收
/*function a(b) {
    return function (c) {
        return b+c;
    }
}*/
/*let a = b => c=> b+c; //高阶函数。函数中有多个箭头
console.log(a(1)(2));*/
// ----------------------------------
//1).includes 返回的是boolean
let arr =[1,2,3,4,5];
//console.log(arr.includes(5));
//2).some 看一看
let flag = arr.some((item,index)=>item>3);
//console.log(flag);
//3).find 返回找到后的结果,找到后就不在继续查找
let result = arr.find((item,index)=>item>3);
//console.log(result);
//4).reduce 收敛 返回的都是叠加后的结果
let num = arr.reduce((prev,next)=>{ //[1,2,3,4,5]
    console.log(prev,next);
    return prev+next;//会将返回的结果当做下一次的上一个
},0); //第二个参数是手动指定的前一个
console.log(num);
let ary = [{price:30},{price:40},{price:50}];
let r = ary.reduce((prev,next)=>{
    return prev+next.price;//保证上一项永远是数组
},0);
console.log(r);

//5).filter 过滤 返回的是一个过滤后的数组，满足条件就放到新数组中
//[1,2,3,4,5]
let ars = arr.filter(item=>!(item<=3));
console.log(ars);

//6).map 映射 映射出一个新的数组,map函数中的返回值将会作为数组里的新项
let ma = [1,2,3]; // template String
let res = ma.map(item=>`<li>${item}</li>`);
console.log(res.join(''));

//以上方法都属于声明式，不关心内部结构 （用法）
//我们以前写的代码 都类似于编程式代码
//angular 1.0  angular2.0  angular 4
//0 - > 1.0  -> 2.0 虚拟dom 内存中的对象