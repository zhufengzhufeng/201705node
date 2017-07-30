let url = require('url');
let urlObj = url.parse('https://username:password@www.baidu.com:80/s?wd=Content-Type&rsv_spt=1&rsv_iqid=0xfbb56e9a000082c3&issp=1&f=8&rsv_bp=1&rsv_idx=2&ie=utf-8&rqlang=cn&tn=baiduhome_pg&rsv_enter=1&oq=%25E8%25A7%2586%25E9%25A2%2591&inputT=1177&rsv_t=db33UmQaiVre2ourDQAjt0gPinnPVifBUszRT4%2FGCIlBRWog%2Bj6k%2F96kVGB45MDFjpbo&rsv_n=2&rsv_pq=f171184700008c2e&rsv_sug3=5&bs=%E8%A7%86%E9%A2%91',true);
console.log(urlObj); //  ([^&?=]+)=([^&?=]+)
//pathname 代表当前的路径
//query 默认是字符串 我们需要转化成对象 所以第二个参数为true转化对象
/*let query = urlObj.query;
let pathname = urlObj.pathname;*/
let {query,pathname} = urlObj;