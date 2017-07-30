let xhr = new XMLHttpRequest();
xhr.open('GET','/clock',true);
xhr.responseType = 'json';
xhr.onload = function () {
    time.innerHTML = xhr.response.time
};
xhr.send();
function ajax({url='',method='GET',dataType='text',data=null,async=true}) {
    return new Promise((resolve,reject)=> {
       let xhr = new XMLHttpRequest();
       xhr.open(method,url,async);
       xhr.responseType = dataType;
       xhr.onload = function () {
           resolve(xhr.response);
       };
       xhr.onerror = function (err) {
           reject(err)
       };
       xhr.send(data);
    });
}
ajax({
    url:'XXX',
    method:'GET',
    dataType:'json',
    data:JSON.stringify({}),
    async:true
}).then(function (data) {
    time.innerHTML = data.time;
});