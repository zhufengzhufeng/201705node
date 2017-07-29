//1) copy 将小的buffer拷贝到大buffer上
let buf1 = new Buffer('珠峰');
let buf2 ='培训';
let bigBuffer = new Buffer(12);

//先拷贝buffer2 在拷贝buffer1
//targetBuffer目标buffer, targetStart目标开始, sourceStart,源的开始 sourceEnd 源的结束,基本上参数都是包前不包后
/*buf2.copy(bigBuffer,buf1.length);
buf1.copy(bigBuffer,0);
console.log(bigBuffer.toString());*/

//2) concat 拼接 是Buffer类上的
//1.实现concat方法 判断是否传递长度,如果没传递，自动算出拼接后的总长，如果传递了 以传递的为准
//                构建一个大buffer通过长度构建
//                循环每一项将每个buffer拷贝到大buffer上
//                拷贝后 超过拷贝的长度要被截取掉，返回最终的buffer
Buffer.myConcat = function (list,totalLength) {
    if(typeof totalLength === 'undefined'){
        totalLength = 0;//初始化totalLength
        totalLength = list.reduce((prev,next)=>{ //返回叠加后的结果
            return prev+next.length;
        },totalLength);
    }
    let result = new Buffer(totalLength);//构建大buffer
    let offset = 0; //拷贝的偏移量
    list.forEach(buf=>{
        if(!Buffer.isBuffer(buf)){ //判断是不是buffer
            throw new Error('not a buffer');
        }else{
            buf.copy(result,offset); //将每一个buffer拷贝到大buffer上
            offset += buf.length; //每次将拷贝的位置累计
        }
    });
    return result.slice(0,offset);//offset就是真实拷贝的长度
};
console.log(Buffer.myConcat([buf1,buf2,buf1,buf2]).toString());



//3) Buffer.isBuffer() 判断是否是buffer 返回的是boolean类型

