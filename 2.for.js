var arr = [1,2,3,4,5,6];
//1.除了数组本身的其他属性都会打印出来
/*for(var key in arr ){
    console.log(arr[key]);
}*/
//2.forEach不能跳出循环
/*
arr.forEach(function (item) {
    console.log(item);
    if(item>3){return}
})*/
//3.for of 不能遍历对象
for(let val of arr){
    console.log(val);
    break;
}
