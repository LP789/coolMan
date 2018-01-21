<template>
  <footer>
    <ul class="page_li">
      <li v-for="(item,index) in routerArr">
        <router-link :to="item.url">
          <span>{{item.value}}</span>
          <img alt="" src="~assets/fot_arr.png"/>
        </router-link>
      </li>

    </ul>
    <div class="phone">
      <p>004-02500821</p>
      <img alt="" src="~assets/fot_wx.png" />
    </div>
  </footer>
</template>

<script>
    export default {
        name: "Ft",
        data() {
            return {
              routerArr:[
                {value:'首页',url:'/index'},
                {value:'制作人中心',url:'/user/editor'},
                {value:'制作公司',url:'/user/editorCo'},
                {value:'社区动态',url:'/community'},
                {value:'文章',url:'/article/index'}
              ]
            }
        },
        methods: {},
        mounted() {
        }
    }
</script>

<style scoped>
  footer{
    width: 7.5rem;
    background-color: #151519;
    padding-top: 0.34rem;
    padding-bottom: 0.76rem;
  }
  footer .page_li li{
    position: relative;
    border-bottom: 0.01rem solid #41414a;
    height: 0.8rem;
    line-height: 0.8rem;
    font-size: 0.4rem;
    padding: 0 0.4rem;
  }
  footer .page_li li a{ color: #41414a; display: inline-block; width: 100%;}
  footer .page_li li img{
    position: absolute;
    top:0.4rem;
    right: 0.4rem;
  }
  footer .phone{
    position: relative;
    padding: 0.4rem 0.4rem 0;
    color: #41414a;
  }
  footer .phone h2{
    font-size: 0.42rem;
    line-height: 0.6rem;
  }
  footer .phone p{ font-size: 0.52rem; line-height: 0.7rem;}
  footer .phone .email{ font-size: 0.32rem;}
  footer .phone > img{
    position: absolute;
    bottom: 0.2rem;
    right: 0.4rem;
    width: 0.6rem;
  }

</style>
