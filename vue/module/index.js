/*1.
import {str,a} from './a.js';
console.log(str);
a();
*/

// let obj = require('./a.js')
//let {str,a} = {str:'我很帅'，a:function}

//obj =>{str:'我很帅'}


/*2.
import * as obj from './a.js';
console.log(obj.str);*/

//如果一个个导出 需要使用* as 或者 解构赋值的语法

import b from './a.js';//b代表的就是默认导出的结果
console.log(b);

