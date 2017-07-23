//node自带的模块叫核心模块 内置模块，用法同第三方模块，但是不需要下载
let util = require('util');
//实现继承 实现一些类型判断
function Parent(name) {
    this.name = name;
}
Parent.prototype.eat = '吃';
function Child(age) {
    this.age = age;
}
//2.只继承公有属性
function create(Pproto) {
    let Fn = function () {};// 声明一个空函数
    Fn.prototype = Pproto;//将函数的公有方法指向父类
    return new Fn //构造当前函数的实例
}
Child.prototype = create(Parent.prototype);
let child = new Child();
console.log(child.eat);

/*Child.prototype.__proto__ = Parent.prototype;
let child = new Child();
console.log(child.eat);*/

//1.既能继承公有 又能继承私有属性,new Parent不能传递参数
/*
Child.prototype = new Parent('1');
let child = new Child(4);
console.log(child.name);*/
