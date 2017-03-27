<template>
  <div id="app">
   
      <!-- 路由匹配到的组件将渲染在这里 -->
      <transition name="list" mode="out-in">
        <!-- <keep-alive> -->
          <router-view></router-view>
        <!-- </keep-alive> -->
      </transition>
    <!-- 使用 router-link 组件来导航. -->
    <!-- 通过传入 `to` 属性指定链接. -->
    <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
    <ul class="footer">
      <router-link to="/home" tag="li" active-class="kerwinAcitive">鼎城商城</router-link>
      <router-link to="/goods" tag="li" active-class="kerwinAcitive">分类</router-link>
      <router-link to="/shequ" tag="li" active-class="kerwinAcitive">社区</router-link>
      <router-link to="/shopcar" tag="li" active-class="kerwinAcitive">购物车</router-link>
      <router-link to="/mypage" tag="li" active-class="kerwinAcitive">我的</router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      
    }
  }
}
</script>

<style>

    *{
      margin:0px;
      padding:0px;
    }

    li{
      list-style: none;
    }
    html,body{
      height: 100%;
      overflow: hidden;
    }

    .footer{
      display: flex;
      position: fixed;
      bottom: 0px;
      width: 100%;
      left:0px;
    }
    .footer li{
      line-height: 40px;
      height: 40px;
      flex:1;
      text-align: center;
      background: gray;
  
    }

        .list-enter-active{
            animation: kerwinEnter 1s 1;
        }
        
        .list-leave-active{
            animation: kerwinLeave 1s 1;
        }

        @keyframes kerwinEnter{
            0%{
                transform: translateX(100px);
                opacity: 0;
            }

            100%{
                transform: translateX(0px);
                opacity: 1;
            }
        }

        @keyframes kerwinLeave{
            0%{
                transform: translateX(0px);
                opacity: 1;
            }

            100%{
                transform: translateX(-100px);
                opacity: 0;
            }
        }

        .kerwinAcitive{
           color:white;
           background: #14c145;
        }
</style>
