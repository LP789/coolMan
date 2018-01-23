<template>
  <section class="login">
    <h2><img src="~assets/logo.png" alt=""></h2>
    <div class="l_input">
      <input type="text" name="email" placeholder="邮箱">
    </div>
    <div class="l_input">
      <input type="text" name="password" placeholder="密码">
    </div>
    <div class="l_type clearfix">
      <router-link to="/forgetPs" class="forget_pass">忘记密码</router-link>
      <router-link to="/register"  class="new_num">注册新账号</router-link>
    </div>
    <button class="l_btn">登录</button>
    <div class="l_other">
      <h3><span>第三方登录</span></h3>
      <div class="type_li">
        <img src="~assets/wx_icon.png">
      </div>
    </div>
  </section>
</template>

<script>
    export default {
        name: "login",
        data() {
            return {}
        },
        methods: {},
        mounted() {
        }
    }
</script>

<style lang="scss">
  .login{
    width: 7.5rem;
    background-color: #fff;
    height: 100%;
    overflow: hidden;
    padding: 1rem 0.74rem 0;
    > h2{
      text-align: center;
      padding-bottom: 0.66rem;
    }
    > h2 img{
      height: 0.66rem;
    }
    .l_input,.get_code{
      margin-top: 0.58rem;
      font-size: 0.34rem;
    }
    .l_input input{
      border: 1px solid #e1e1e1;
      padding: 0 0.36rem;
      width: 5.3rem;
      height: 0.96rem;
      color: #bababa;
    }
    .get_code{
      border:1px solid #e1e1e1;
      width: 6.02rem;
      height: 0.96rem;
    }
    .vux-flexbox .vux-flexbox-item {
      height: 0.96rem;
    }
    .get_code input{
      width: 3.29rem;
      height: 100%;
      border:none;
      padding: 0 0.36rem;
    }
    .get_code .code{
      float:right;
      width: 1.9rem;
      height: 100%;

      border-left:none;
      background-color: #f6f6f6;
      text-align: center;
      line-height: 0.94rem;
    }
    .l_type{
      margin-top: 1.1rem;
      font-size: 0.28rem;
    }
    .forget_pass{
      float: left;
      color: #707070;
    }
    .new_num{
      float: right;
      color: #ffbc22;
    }
    .r_login{ text-align: center; margin-top: 0.4rem; font-size: 0.3rem;}
    .r_login >a{ color: #ffbc22; }
    .l_btn{
      background-color: #ffbc22;
      font-size: 0.30rem;
      color: #fff;
      height: 0.8rem;
      line-height: 0.8rem;
      width:  6.02rem;
      margin-top: 0.6rem;
      border-radius: 0.06rem;
      border:none;
    }
    .l_other{ margin-top: 0.8rem; }
    .l_other h3{
      position: relative;
      width: 5.14rem;
      border-bottom: 1px solid #b1b1b1;
      margin: 0 auto;
      text-align: center;
      font-size: 0.28rem;
      color: #b1b1b1;
    }
    .l_other h3 span{
      position: absolute;
      display: inline-block;
      background-color: #fff;
      padding: 0 0.4rem;
      top: -0.16rem;
      left: 0;
      right: 0;
      width: 2.56rem;
      margin: 0 auto;
    }
    .type_li{
      margin-top: 0.56rem;
      text-align: center;
    }
  }


</style>
