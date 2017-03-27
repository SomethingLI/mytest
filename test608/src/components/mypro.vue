<template>

    <div>
    	<div class="head" id="log">
    		<div class="face"><img id="avatar" src="../img/noface.png"></div>
    		<div class="info">
	            <h3 id="nickname">登录鼎城商城</h3>
	                 <p id="info">
	            <button class="aui-btn aui-btn-danger" style="padding-bottom:3px" @click="changepage">点击登录或注册</button></p>
	        </div>
	        <div class="righticon"><i class="iconfont">&#xe627;</i></div>
    	</div>

    	<div class="aui-content grid3">
    		<ul class="aui-grid-nine">
    			<li class="aui-col-xs-4 aui-text-center">
    				<span class="aui-icon  aui-text-warning"><i class="iconfont">&#xe627;</i></span>
    				<p id="money">余额0￥</p>
    			</li>
    			<li class="aui-col-xs-4 aui-text-center">
    				<span class="aui-icon aui-text-primary"><i class="iconfont">&#xe627;</i></span>
    				<p id="money">惠民币0</p>
    			</li>
    			<li class="aui-col-xs-4 aui-text-center">
    				<span class="aui-icon aui-text-danger "><i class="iconfont">&#xe627;</i></span>
    				<p id="money">红包0个</p>
    			</li>
    		</ul>
    	</div>
    	<ul class="aui-list-view">
    		<li class="aui-list-view-cell">
	            <a class="aui-arrow-right" >
	               <i class="aui-icon  aui-bg-danger_  ">&#xe602;</i>订单记录
	                <span class="aui-badge aui-badge-danger" id="count_order">0</span>
	                <i class="iconfont">&#xe627;</i>
	            </a>
	        </li>
	        <li class="aui-list-view-cell">
	            <a class="aui-arrow-right" >
	                <i class="aui-icon aui-bg-danger_ iconfont">&#xe6fc;</i>我的收藏
	                <span class="aui-badge-danger aui" id="count_order"></span>
	                <i class="iconfont">&#xe627;</i>
	            </a>
	        </li>
	        <li class="aui-list-view-cell">
	            <a class="aui-arrow-right"   @click="changead">
	                <i class="aui-icon  aui-bg-danger_ iconfont">&#xe674;</i>收货地址
	                <span class="aui-badge-danger aui" id="count_order"></span>
	                <i class="iconfont">&#xe627;</i>
	            </a>
	        </li>
    	</ul>
    	<ul class="aui-list-view">
    		<li class="aui-list-view-cell">
	            <a class="aui-arrow-right">
	                <i class="aui-icon  iconfont">&#x3433;</i>我的二维码
	                <span class="aui-badge aui-badge-primary aui-con" id="count_order">0</span>
	                <i class="iconfont">&#xe627;</i>
	            </a>
	        </li>
	        <li class="aui-list-view-cell">
	            <a class="aui-arrow-right">
	                <i class="aui-icon  iconfont">&#xe61d;</i>鼎城商城客服
	                <span class="aui-badge-danger aui-o" id="count_order"></span>
	                <i class="iconfont">&#xe627;</i>
	            </a>
	        </li> 
    	</ul>
    	<ul class="aui-list-view" style="margin-bottom:60px;">
	        <li class="aui-list-view-cell">
	            <a class="aui-arrow-right"><i class="aui-icon  iconfont">&#xe661;</i>关于鼎城商城</a>
	        </li>
	    </ul>
	    </div>
	</template>



    <!-- </body> -->

    <style>
    
    *{
	    margin:0; 
	    padding:0;
    }
    ul, li {
	    list-style: none;
	}
	p {
	    margin-top: 0;
	    margin-bottom: 0;
	    font-size: 1.4rem;
	    color: #8f8f94;
	}
    
   /*	@font-face {
  font-family: 'iconfont';
  src: url('../font_s8su6nta1ibmlsor/iconfont.eot');
  src: url('../font_s8su6nta1ibmlsor/iconfont.eot?#iefix') format('embedded-opentype'),
  url('../font_s8su6nta1ibmlsor/iconfont.woff') format('woff'),
  url('../font_s8su6nta1ibmlsor/iconfont.ttf') format('truetype'),
  url('../font_s8su6nta1ibmlsor/iconfont.svg#iconfont') format('svg');
}
.iconfont{
  font-family:"iconfont" !important;
  font-size:16px;font-style:normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}*/

	body {
		position: relative;
	    background-color: #f2f2f2;
	    color: #555;
	    max-width: 60rem;
	    margin: 0 auto;
	    width:100%;
	}

	.head {
	    background: #fff;
	    height: 9rem;
	    margin-bottom: 0;
	    position: relative;
	    top: 0rem;
	    width: 100%;
	    color: #333;
	    border-bottom: 0.1rem solid #f2f2f2;
	}

	.head .face {
	    float: left;
	    width: 6.8rem;
	    margin: 1.3rem 1rem 0;
	}

	.head .face img {
	    width: 6.8rem;
	    height: 6.8rem;
	    border-radius: 3.8rem;
	    border:0;
	}

	.head .info {
	    padding-top: 2.2rem;
	}

	.head .info h3 {
	    font-size: 1.6rem;
	    font-weight: 400;
	}

	.head .info p {
	    font-size: 1.4rem;
	    color: #666;
	}

	.aui-btn-danger {
	    color: #ffffff;
	    background-color: #e74c3c;
	    border: 0.1rem solid #e74c3c;
	}
	button, .aui-btn {
	    position: relative;
	    display: inline-block;
	    padding: 0.6rem 1.2rem;
	    margin-bottom: 0;
	    font-size: 1.4rem;
	    font-weight: 400;
	    line-height: 1.42857143;
	    text-align: center;
/*	    background-color: #ecf0f1;
*/	    white-space: nowrap;
	    vertical-align: middle;
	    /*-ms-touch-action: manipulation;
	    touch-action: manipulation;*/
	    cursor: pointer;
	    -webkit-user-select: none;
	    -moz-user-select: none;
	    -ms-user-select: none;
	    user-select: none;
	    border: 0.1rem solid #ecf0f1;
	    border-radius: 0.4rem;
	}

	.head .righticon {
	    position: absolute;
	    top: 2rem;
	    right: 1rem;
	    font-size: 2.8rem;
	    color: #888;
	    z-index: 99;
	}

	.aui-content {
	    margin-bottom: 1rem;
	    width:100%;
	}

	.aui-grid-nine {
	    overflow: auto;
	    background: #ffffff;
	    position: relative;
	    width:100%;
	}

	.grid3 .aui-grid-nine li {
	    padding: 0.8rem 1rem;
	}
	.aui-grid-nine li {
	    float: left;
	    position: relative;
	    padding: 2rem 1rem;
	    
	}
	.aui-col-xs-4 {
	    width:33.333333%;;
	}

	.aui-text-center {
	    text-align: center !important;
	}

	.aui-grid-nine li .aui-icon {
	    font-size: 2.8rem;
	    display: inline-block;
	    text-indent: center;
	    margin-bottom: 0.5rem;
	}
	.aui-grid-nine li{
	    border-left: 0.1rem solid #f2f2f2;
	    /*border-bottom: 0.1rem solid #e2e2e2;*/
	    box-sizing: border-box;
	}
	.aui-text-warning {
	    color: #f1c40f !important;
	}
	.aui-text-primary {
	    color: #1abc9c !important;
	}
	.aui-text-danger {
	    color: #e74c3c !important;
	}

	.aui-list-view {
	    margin-bottom: 1rem;
	}
	.aui-list-view {
	    position: relative;
	    padding-left: 0;
	    margin-top: 0;
	    margin-bottom: 1.5rem;
	    list-style: none;
	    background-color: #fff;
	    font-size:1.6rem;
	}
	.aui-list-view-cell {
	    padding: 1rem 1.2rem;
	}
	.aui-list-view-cell > a {
	    position: relative;
	    padding: inherit;
	    margin: -1rem -1rem;
	    display: block;
	    overflow: hidden;
	    color: inherit;
	    text-overflow: ellipsis;
	    white-space: nowrap;
	}
	.aui-list-view-cell > a {
	    margin: -1rem -1.5rem;
	    border-bottom: 0.1rem solid #f2f2f2;
	}
	
	a {
	    color: #0062cc;
	    text-decoration: none; 
	    background-color: transparent;
	}
	.aui-list-view i.aui-icon {
	    border-radius: 3rem;
	    color: #666;
	    margin-right: 0.5rem;
	    font-size: 2rem;
	    padding: 0;
	}
	
	.aui-badge {
	    display: inline-block;
	    padding: 0.3rem 0.6rem;
	    font-size: 1.2rem;
	    line-height: 1;
	    color: #333;
	    background-color: #bdc3c7;
	    border-radius: 10rem;
	    margin-left: 22rem;
	}
	.aui-badge-danger {
	    color: #ffffff;
	    background-color: #e74c3c;
	}
	.aui{
		margin-left: 24.1rem;
	}
	.aui-badge-primary {
	    color: #ffffff;
	    background-color: #1abc9c;
	}
	.aui-con{
		margin-left:21rem;
	}
	.aui-o{
		margin-left:22rem;
	}
	.aui-list-view-cell > a.aui-arrow-right > .aui-badge, .aui-list-view-cell > div.aui-arrow-right > .aui-badge {
	    position: absolute;
	    top: 50%;
	    right: 3rem;
	    -webkit-transform: translateY(-50%);
	    transform: translateY(-50%);
	}
	

    </style>

    <script>

    import router from "../router";

    (function (doc, win) {
	  var docEl = doc.documentElement,
	    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
	    recalc = function () {
	      var clientWidth = docEl.clientWidth;
	      if (!clientWidth) return;
	      docEl.style.fontSize = 10 * (clientWidth / 375) + 'px';
	    };
	 
	  if (!doc.addEventListener) return;
	  win.addEventListener(resizeEvt, recalc, false);
	  doc.addEventListener('DOMContentLoaded', recalc, false);
	})(document, window);

	
	
	export default {
	  name: 'mypro',
	  data () {
	    return {
	       categorylist:[],
	       goodslist:[],
	       currentIndex:0,
	       isShow:true
	    }
	  },


	  methods:{

	  	changepage(){
  		//router.push(`/goods/detail/${id}`); //es6 字符串模板
  			router.push({name:"loading"})

  		},
  		changead(){
  			console.log(11);
  			router.push({name:"myaddress"});

  		}


	  }
	}

    </script>


