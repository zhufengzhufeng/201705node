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



Girl.prototype.removeListener = function (eventName,callback) { //{'女生失恋':[cry,eat]}
    let arr = this._events[eventName];
    if(arr){
        //filter返回false 表示在数组中移除掉 ,保证操作的是原来的对象
        this._events[eventName] = arr.filter((item)=>item!==callback);
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
Girl.prototype.once = function (eventName,callback) {
    // 绑定 -> 执行 -> 解绑
    function wrap() { //增加一个一次性函数
        callback.apply(this,arguments); //在此函数中调用原有的逻辑
        this.removeListener(eventName,wrap);//删除这个一次性函数
    }
    this.on(eventName,wrap); //绑定的是wrap不再是eat了，所以用eat删是删除不掉的
};
let girl = new Girl();
function cry(who) {console.log(who+'大哭',this);}
function eat(who) {console.log(who+'吃');}
girl.on('女生失恋',cry); //cry eat都是异步方法，只有触发emit的时候才会执行
girl.once('女生失恋',eat);
girl.removeListener('女生失恋',eat); //取消绑定
girl.emit('女生失恋','他'); //on是多次触发 多次执行  触发一次执行在数组中移除掉保证只执行一次
girl.emit('女生失恋','他');
girl.emit('女生失恋','他');
girl.emit('女生失恋','他');
girl.emit('女生失恋','他');