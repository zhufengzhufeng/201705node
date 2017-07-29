//读出source的内容 写入到target中
function copySync(source,target) { //readFileSync writeFileSync

}

function copy(source,target,callback) { //readFile writeFile

}
//copySync('1.txt','2.txt');
copy('1.txt','2.txt',function () {
    console.log('拷贝成功');
});