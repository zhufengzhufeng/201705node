//executor 执行器 要接受一个函数
//resolve表示成功 调用后会变成成功态
//reject 调用后 会变成失败态
//then 状态改变后的操作在then只书写，第一个是成功函数，第二个是失败函数
let promise = new Promise(function (resolve,reject) {
    resolve();reject();
});//如果成功后则不能再更改状态
//promise实例上才有then方法
promise.then(function () {
    console.log('成功');
},function () {
    console.log('失败');
});