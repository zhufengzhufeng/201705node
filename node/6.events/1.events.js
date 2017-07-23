//“发布” “订阅” 模式 一种一对多的模式 {'女生失恋':[cry,eat]}
function Girl() {this._events = {}}
Girl.prototype.on = function (eventName,callback) { //订阅
    //先去对象中查找当前事件名是否有绑定过 如果没有则 绑定一个一对多的数组关系，否则直接追加到数组中即可
    if(this._events[eventName]){ //已经绑定过了
        this._events[eventName].push(callback);
    }else{ //第一次绑定
        this._events[eventName] = [callback];
    }
};

Girl.prototype.emit = function (eventName,...arg) { //发布  剩余运算符
    //console.log(...arg); //展开运算符
    //[].slice.call(arguments,1)
    //Array.from(arguments)  将类数组转换成数组
    if(this._events[eventName]){
        //item 代表的是cry 和eat函数   这里的call的this代表的是girl的实例，不call就是global
        this._events[eventName].forEach(item=>item.call(this,...arg));
    }
};
let girl = new Girl();
function cry(who) {console.log(who+'大哭',this);}
function eat(who) {console.log(who+'吃');}
girl.on('女生失恋',cry); //cry eat都是异步方法，只有触发emit的时候才会执行
girl.on('女生失恋',eat);
girl.emit('女生失恋','你','a','b');