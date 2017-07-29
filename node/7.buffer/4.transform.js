// 进制转换 任意进制转化=>10进制 parseInt
console.log(parseInt('11111111',2));
// 任意进制=>转任意进制  toString
console.log((0xff).toString(2));

//base64 进制转换，不算加密 md5 也不是加密（不可逆）
//当前的字节最大不超过64 3*8 = 4*6
let buffer = new Buffer('珠');
console.log(buffer); //e7 8f a0

//16进制转化成2进制
console.log((0xe7).toString(2));
console.log((0x8f).toString(2));
console.log((0xa0).toString(2));
//111001   111000   111110   100000 转化成10进制去对应编码取值即可。
console.log(parseInt('111001',2)); //57
console.log(parseInt('111000',2)); //56
console.log(parseInt('111110',2)); //62
console.log(parseInt('100000',2)); //32

let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
str+=str.toLowerCase();
str+='0123456789';
str+='+/';
console.log(str[57]+str[56]+str[62]+str[32]); //base64编码
//正确说法：不是将图片都转为base64,较小的图片可以转换，可以减少http请求，不要全部都转。