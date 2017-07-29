//node提供了一个事件库 自带事件库
let EventEmitter = require('events'); //once on removeListener
let util = require('util'); //干继承用的
util.inherits(Girl,EventEmitter);//只继承公有属性 Object.setPrototypeOf(Child.prototype,Parent.prototype)
function Girl() {}
let girl = new Girl();
function cry() {
    console.log('cry');
}
girl.once('失恋了',cry);
girl.removeListener('失恋了',cry);
girl.emit('失恋了');
girl.emit('失恋了');
girl.emit('失恋了');
