import Vue from 'vue'; // 使用了vuejs
import App from './App';// 引用了App.vue文件 就是vue的组件

/* eslint-disable no-new */
new Vue({
  el: '#app', // 挂载点
  template: '<App/>',
  components: { App }
});
