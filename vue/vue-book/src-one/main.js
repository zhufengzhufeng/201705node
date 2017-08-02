import Vue from 'vue'; //引入vue
import App from './App.vue'; //引入根组件
import router from './router'; //引入路由
import './common/index.less'; //公共样式


//轮播图插件
import VueAwesomeSwiper from 'vue-awesome-swiper';
Vue.use(VueAwesomeSwiper);// 使用轮播图插件


import VueLazyload from 'vue-lazyload'
// 会给我们vue添加一个全局 v-lazy指令

//如果是本地图片 需要import进来
import loading from './common/loading.gif';
Vue.use(VueLazyload, {
  preLoad: 1.3,
  loading: loading,
  attempt: 1
});

new Vue({ //创建一个实例
  el:'#app', //挂载点
  router, //路由实例
  render:h=>h(App) //默认渲染App组件
});
