import Vue from 'vue';//引入vue
import App from './App.vue' // 引入app组件 可以省略 .js .json .vue
import router from './router' //默认引用时 如果是index.js可以省略

//runtime+compiler 支持编译template的 将template 编译成render函数
//runtime 不支持template写法
new Vue({
  el: '#app', //挂载点
  router,
/*
  template:'<App/>',
  components:{App},*/

  render: h=> h(App) //将app组件渲染到#app元素内
});
