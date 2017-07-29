//1.buffer表示的是内存不能随意扩张，但是没有数组里操作长度的方法没有类似于pop push shift unshift

//2. 大小是固定的

//1) 通过长度来创建buffer
var buffer  = new Buffer(6);//6个字节,随机分配
buffer.fill(0); //手动填充0，0一般认为内存是干净的
console.log(buffer);

//2) 通过数组创建buffer,可以指定内容,只能放0-255之间的数，一般这种方式比较少用
var buffer = new Buffer([0x64,200]);
console.log(buffer);

//3) 通过字符串声明buffer
var buffer = new Buffer('珠峰'); //一个汉字三个字节
console.log(buffer[0]); //直接通过索引取值无法取出16进制 取出的都是10进制

//4) slice方法
// 浅拷贝 拷贝的是引用地址，当引用的地址内的数据发生变化，拷贝后的结果也会发生变化 Object.assign()
// 深拷贝 如果长得一样别切内部存的地址完全不相同 JSON.parse(JSON.stringify(arr))(不识别函数) 递归循环
/*
var ary = [4,5,6];
var arr = [ary,2,3];
var newArr = arr.slice();
ary[0] = 100;
console.log(newArr);
*/
var buffer = new Buffer([1,2,3]);
let newBuffer = buffer.slice(0,1);
newBuffer[0] = 100;
console.log(buffer); //buffer中存放的也是引用地址


