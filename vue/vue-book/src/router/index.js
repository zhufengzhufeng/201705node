import Vue from 'vue'
import Router from 'vue-router' //引入路由
import Hello from '../components/Hello.vue' //引入hello组件
import Home from '../components/Home.vue';
Vue.use(Router);// vue-router是vue的一个插件，使用一下vueRouter
//import router from 'xxx'
export default new Router({
  routes: [
    {
      path: '/', //路径
      component: Hello//对应的组件
    },
    {
      path:'/home',
      component:Home
    }
  ]
})
