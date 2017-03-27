import Vue from 'vue'
import App from './App.vue'
import router from "./router" //自定义的路由模块
import VueRouter from 'vue-router';
import resource from "vue-resource";

Vue.use(VueRouter) //使用vue 路由插件

Vue.use(resource) //使用vue 官方提供的ajax方式
new Vue({
  el: '#app',
  router, //router:router
  render: h => h(App)
})
