//node自带的模块叫核心模块 内置模块，用法同第三方模块，但是不需要下载
let util = require('util');
//util.inherits(Child,Parent); //只继承公有
//实现继承 实现一些类型判断
function Parent(name) {
    this.name = name;
}
Parent.prototype.eat = '吃';
function Child(name,age) {
    //Parent.call(this,name);
    this.age = age;
}
// typeof constructor instanceof Object.prototype.toString.call()
console.log(util.isArray(new RegExp())); //提供了很多判断类型的方法

//5.inherits node自带的方法
Object.setPrototypeOf(Child.prototype,Parent.prototype);//es6的方法 只继承公有属性
let child = new Child(1,2);
console.log(child.eat);
//4.class extends super

//3.只继承私有
/*let child = new Child(1,2);
console.log(child.eat);*/

//2.只继承公有属性
/*function create(Pproto) {
    let Fn = function () {};// 声明一个空函数
    Fn.prototype = Pproto;//将函数的公有方法指向父类
    return new Fn //构造当前函数的实例
}
Child.prototype = create(Parent.prototype);
let child = new Child();
console.log(child.eat);*/

/*Child.prototype.__proto__ = Parent.prototype;
let child = new Child();
console.log(child.eat);*/

//1.既能继承公有 又能继承私有属性,new Parent不能传递参数
/*
Child.prototype = new Parent('1');
let child = new Child(4);
console.log(child.name);*/
