import Vue from 'vue'; //引入vue
import App from './App.vue'; //引入根组件
import router from './router'; //引入路由
import './common/index.less'; //公共样式
new Vue({ //创建一个实例
  el:'#app', //挂载点
  router, //路由实例
  render:h=>h(App) //默认渲染App组件
});
