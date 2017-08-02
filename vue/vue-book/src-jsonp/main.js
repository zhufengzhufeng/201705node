import Vue from 'vue';
import App from './App.vue';

//默认引用的是js文件，我们希望引用css
import 'bootstrap/dist/css/bootstrap.css'
new Vue({
  el:'#app',
  // render:h=>h(App)
  ...App
});
