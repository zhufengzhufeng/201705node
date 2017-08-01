import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../containers/Home.vue';
import List from '../containers/List.vue';
import Add from '../containers/Add.vue';

Vue.use(VueRouter);

//路由表
const routes = [
  {path:'/home',component:Home},
  {path:'/list',component:List},
  {path:'/add',component:Add},
];
export default new VueRouter({
  routes
})
