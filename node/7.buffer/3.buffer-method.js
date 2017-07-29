//1) copy 将小的buffer拷贝到大buffer上
let buf1 = new Buffer('珠峰');
let buf2 = new Buffer('培训');
let bigBuffer = new Buffer(12);

//先拷贝buffer2 在拷贝buffer1
//targetBuffer目标buffer, targetStart目标开始, sourceStart,源的开始 sourceEnd 源的结束,基本上参数都是包前不包后
buf2.copy(bigBuffer,buf1.length);
buf1.copy(bigBuffer,0);
console.log(bigBuffer.toString());

//2) concat 拼接 是Buffer类上的
//1.实现concat方法 判断是否传递长度,如果没传递，自动算出拼接后的总长，如果传递了 以传递的为准
//                构建一个大buffer通过长度构建
//                循环每一项将每个buffer拷贝到大buffer上
//                拷贝后 超过拷贝的长度要被截取掉，返回最终的buffer
console.log(Buffer.concat([buf1,buf2,buf1,buf2]).toString());


