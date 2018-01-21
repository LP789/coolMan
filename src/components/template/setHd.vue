<template>
  <header class="account_set">
    <div class="clearfix cont">
      <img alt="" src="~assets/video.png" class="s_logo" @click="goIndex"/>
      <div class="s_header">
        <h2>账号设置</h2>
        <p>IAccount Setting</p>
      </div>
      <div class="out_login">
        <h2>退出账号</h2>
        <p>Exit the account</p>
      </div>
    </div>
  </header>
</template>

<script>
    export default {
        name: "set-hd",
        data() {
            return {}
        },
        methods: {
          goIndex(){
            this.$router.push({path:'/index'})
          }
        },
        mounted() {
        }
    }
</script>

<style scoped>
  header{
    position: fixed;
    z-index:2;
    top: 0;
    width: 7.5rem;
    height: 0.9rem;
    background-color: rgba(30,33,38,1);
  }
  /*账号设置header*/
  .account_set .s_logo{
    float: left;
    height: 0.38rem;
    margin-top: 0.26rem;
    margin-left: 0.2rem;
  }
  .account_set .s_header{
    position: absolute;
    width: 100%;
    text-align: center;
    margin-top: 0.25rem;
  }
  .account_set .out_login{
    position: absolute;
    width: 1.6rem;
    text-align: center;
    margin-top: 0.25rem;
    right: 0.2rem;
  }
  .account_set .s_header h2,.account_set .out_login h2{
    font-size: 0.24rem;
    color: #fff;
  }
  .account_set .s_header p,.account_set .out_login p{
    font-size: 0.14rem;
    line-height: 0.2rem;
    color: #414854;
  }
</style>
