<template>
  <section class="login">
    <h2><img src="~assets/logo.png" alt=""></h2>
    <div class="l_input">
      <input type="text" name="email" placeholder="昵称">
    </div>
    <div class="l_input">
      <input type="text" name="password" placeholder="手机号">
    </div>
    <div class="get_code">
      <input type="text" name="email" placeholder="手机验证码">
      <div class="code">获取验证码</div>
    </div>
    <div class="l_input">
      <input type="text" name="password" placeholder="设置密码">
    </div>

    <button class="l_btn">注册</button>
  </section>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {}
        },
        methods: {},
        mounted() {
        }
    }
</script>

<style scoped>
  .login{
    box-sizing: border-box;
    width: 7.5rem;
    background-color: #fff;
    height: 100%;
    overflow: hidden;
    padding: 1rem 0.74rem 0;
  }
  .login > h2{
    text-align: center;
    padding-bottom: 0.66rem;
  }
  .login > h2 img{
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
    position: relative;
    border: 1px solid #e1e1e1;
    width: 100%;
    height: 0.96rem;
  }
  .get_code input{
    position: absolute;
    top: 0;
    left: 0;
    width: 4.22rem;
    height: 100%;
    padding: 0 0.36rem;
  }
  .get_code .code{
    position: absolute;
    top: 0;
    right: 0;
    font-size: 0.26rem;
    color: #565656;
    width: 1.88rem;
    height: 100%;
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
    width: 100%;
    margin-top: 0.6rem;
    border-radius: 0.06rem;
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
</style>
