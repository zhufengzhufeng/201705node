//任意进制转化成10进制
//当前位上的值*当前进制^(当前所在位-1)累加
// 1个字节代表的最大10进制是255
let total = 0;
for(let i=1;i<=8;i++){
    total+=1*Math.pow(2,i-1)
}
console.log(total);

//2^8-1 同样可以计算

