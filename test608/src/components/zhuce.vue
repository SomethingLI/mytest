<template>
        <div class="zhuce">
            <header class="aui-bar aui-bar-nav aui-bar-danger">
                <a class="aui-pull-left" onclick="history.go(-1)">
                    <span class="aui-icon icon-left iconfont">&#xe60a;</span>
                </a>
                <div class="aui-title"><a href="index.html"> 鼎城商城注册</a></div>
            </header>
            <div style="padding:20px;">
                <form class="form" method="post">
                    <input id="name" type="text" class="username" name="name" value="" placeholder="请输入手机号">
                    <input id="password" type="password" class="password" name="password" value="" placeholder="6-12位字符组合密码">
                    <button class="aui-btn aui-btn-primary aui-btn-block" type="submit" id="submit">免费注册</button>

                    <div style="line-height: 50px;">
                        <a class="aui-pull-left"  url="loginForget.html">已有账号?</a>
                        <a class="aui-pull-right"> <input type="checkbox" name="moren" checked class="xieyi"> 用户协议</input> </a>
                    </div>                    
                </form>   
            </div>
        </div>
 </template>

    <style>

    /*@font-face {
        font-family: 'iconfont';
        src: url('img/font_hth9hqj92bgzm2t9/iconfont.eot');
        src: url('img/font_hth9hqj92bgzm2t9/iconfont.eot?#iefix') format('embedded-opentype'),
        url('img/font_hth9hqj92bgzm2t9/iconfont.woff') format('woff'),
        url('img/font_hth9hqj92bgzm2t9/iconfont.ttf') format('truetype'),
        url('img/font_hth9hqj92bgzm2t9/iconfont.svg#iconfont') format('svg');
    }

    .iconfont{
      font-family:"iconfont" !important;
      font-size:16px;font-style:normal;
      -webkit-font-smoothing: antialiased;
      -webkit-text-stroke-width: 0.02rem;
      -moz-osx-font-smoothing: grayscale;
    }*/
    
    *{
        margin:0; 
        padding:0;
    }
    body {
        background-color: #f2f2f2;
        color: #555;
        max-width: 60rem;
        margin: 0 auto;
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
    a {
        color: #0062cc;
        text-decoration: none;
        background-color: transparent;
    }
    #clickagent {
        height: 100%;
        font-size: 1.8rem;
    }
    
    .aui-bar {
       
        /*position: fixed;*/
        height: 4.8rem;
        line-height: 4.8rem;
        z-index: 998;
    
    
        width: 100%;
        background: #fff;
        color: #bc946e;
        border-bottom: 0.1rem solid #fafafa;
    }
    
    /*.bar-body {
        padding-top: 48px;
    }*/
    .aui-bar .aui-pull-left {
            padding-left: 1rem; 
            font-size: 1.6rem; 
            font-weight: 400; 
        }
    .aui-bar a {
        color: #bc946e;
    }
    .aui-bar a {
        color: #ffffff;
    }
    .aui-pull-left {
        float: left !important;
    }
    .aui-bar .aui-title {
        right: 8rem;
        left: 8rem;
        width: auto;
        margin: 0;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .aui-title {
        position: absolute;
        width: 100%;
        margin: 0 -1rem;
        text-align: center;
        white-space: nowrap;
    }
    .aui-bar a {
        color: #bc946e;
    }
    .form {
        margin-top: 1.5rem;
        width: 100%;
        font-size:1.6rem;
    }
    .form .username {
        border-top-left-radius: 0.5rem;
        border-top-right-radius: 0.5rem;
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;
        margin-bottom: 0rem;
    }
    .form .password {
        margin-top: -0.1rem;
        border-bottom-right-radius: 0.5rem;
        border-bottom-left-radius: 0.5rem;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        margin-bottom: 0rem;
    }
    .form .username, .form .password {
        background-color: #fff;
        width: 100%;
        height: 5rem;
        border: 0.1rem solid #ccc;
        padding: 0 1rem;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }
    .form .aui-btn {
        margin-top: 1.2rem;
    }
    .aui-btn-block {
        padding: 0.8rem 0;
    }
    .aui-btn-block {
        display: block;
        width: 100%;
        padding: 1.5rem 0;
        margin-bottom: 0;
        font-size: 1.8rem;
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
        background-color: #ecf0f1;
        white-space: nowrap;
        vertical-align: middle;
        -ms-touch-action: manipulation;
        touch-action: manipulation;
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        border: 0.1rem solid #ecf0f1;
        border-radius: 0.4rem;
    }
    .aui-btn-primary {
        color: #ffffff;
        background-color: #1abc9c;
        border: 0.1rem solid #1abc9c;
        font-size: 1.8rem;
    }

    button, input, optgroup, select, textarea {
        margin: 0;
        font: inherit;
        color: inherit;
    }
    .aui-pull-left {
        float: left !important;
    }
    .aui-pull-right {
        float: right !important;
        color:red;
    }

   



    </style>

    <script>
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

    </script>

