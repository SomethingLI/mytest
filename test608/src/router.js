import Vue from "vue";
import VueRouter from 'vue-router';

// import Home from "./components/home.vue";
// import Goods from "./components/goods.vue";
// import Shopcar from "./components/shopcar.vue";

// import Mypage from "./components/mypage.vue";
// import Shequ from "./components/shequ.vue";
// import Loading from "./components/loading.vue";


/*
  webpack 的代码分割
*/
const Home = resolve => require(["./components/home.vue"], resolve)

const Goods = resolve => require(["./components/goods.vue"], resolve)

const Shopcar = resolve => require(["./components/shopcar.vue"], resolve)

const   Mypage = resolve => require(["./components/mypage.vue"], resolve)

const Shequ = resolve => require(["./components/shequ.vue"], resolve)

const Loading = resolve => require(["./components/loading.vue"], resolve)
const Mypro = resolve => require(["./components/mypro.vue"], resolve)
const Myaddress = resolve => require(["./components/myaddress.vue"], resolve)
const Zhuce = resolve => require(["./components/zhuce.vue"], resolve)



//定义路由路径
const routes = [
  { path: '/home', component: Home },

  { path: '/goods', component: Goods},

  { path: '/shopcar', component: Shopcar },

  { 
    path: '/mypage', 
    component: Mypage,

      redirect:"/mypage/mypro",
      children:[
        {
          name:"mypro",
          path:"mypro",
          component:Mypro
        }, 
        {
          name: "loading",
         path:"loading", 
         component:Loading,

            children:[
            {
              name:"zhuce",
              path:"zhuce",
              component:Zhuce
            }
          ]


        },

        {
          name: "myaddress",
         path:"myaddress", 
         component:Myaddress
        }
      ]

  },
  { path: '/shequ', component: Shequ },


  {path:"*",redirect:"/home"},  //路由的重定向
]

// 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  mode: 'hash', //模式改变 (hash,history)
  routes// （缩写）相当于 routes: routes
})

export default router