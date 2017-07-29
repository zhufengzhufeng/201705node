function flip() {
    //promise 实例上有then方法
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(Math.random()>0.5){ //正面
                resolve('买')
            }else{
                reject('不买');
            }
        },Math.random()*3*1000)
    });
}
flip().then(function (data) { //成功的回调
    console.log(data);
},function (err) { //失败的回调
    console.log(err);
});