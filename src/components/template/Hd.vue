<template>
  <header>
    <div class="clearfix cont">
      <div class="navList" id="head_li" @click="blSlide = !blSlide"></div>
      <span class="hd_close" id="head_close">X</span>
      <img alt="" src="img/logo.png"/>
      <div class="us_info">
				<span class="file_point">
					<img alt="" src="~assets/technical/message.png">
				</span>
        <span class="hd_pic">
					<img alt="" src="~assets/technical/persion_he_pic.png">
				</span>
        <span class="file_up">上传作品</span>
      </div>
      <router-link to="/login" class="login"><img alt="" src="img/login.png"></router-link>
    </div>
    <div class="slide_cont" id="head_slide_cont" v-show="blSlide">
      <div class="search_input">
        <img alt="" src="img/search_icon.png" class="s_icon"/>
        <input type="text" name="" placeholder="请输入你想要搜索的关键字"/>
      </div>
      <ul class="hd_nav_li">
        <li v-for="(item,index) in routerArr">
          <router-link :to="item.url">{{item.value}}</router-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
    export default {
        name: "Hd",
        data(){
          return {
            blSlide:false,
            routerArr:[
              {value:'首页',url:'/index'},
              {value:'社区',url:'/community'},
              {value:'文章',url:'/article/index'},
              {value:'问答',url:'/answer/index'},

            ]
          }
        },
        methods:{

        },
        mounted(){

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
  header.index{ background-color: rgba(30,33,38,0.34); }
  header .cont{
    position: relative;
    width: 100%;
    height: 100%;
  }
  header .navList{
    position: absolute;
    float: left;
    margin-left: 0.4rem;
    margin-top: 0.4rem;
    width: 0.8rem;
    background-color: #fff;
    height: 0.06rem;
    border-radius: 0.03rem;
    cursor: pointer;
  }
  header .navList:before,header .navList:after{
    content: '';
    position: absolute;
    top: 0.2rem;
    height: 0.06rem;
    width: 100%;
    background-color: #fff;
    border-radius: 0.03rem;
  }
  header .navList:before{ top: 0.2rem;}
  header .navList:after{ top: -0.2rem;}
  header .cont > img{
    display: block;
    height: 0.8rem;
    margin: 0 auto;
  }
  header .login{
    position: absolute;
    top: 0;
    right: 0;
    height: 0.9rem;
    width: 1.1rem;
  }
  header .login img{
    height: 0.6rem;
    margin-top: 0.15rem;
  }


  /*技术交流*/
  .us_info{
    position: absolute;
    top: 0;
    right: 0.2rem;
    height: 100%;
    font-size: 0;
  }
  .us_info .file_point,.us_info .hd_pic{
    display: inline-block;
    height: 0.9rem;
    margin-right: 0.2rem;
  }
  .us_info .file_point img{
    height: 0.4rem;
    margin-top: 0.25rem;
  }
  .us_info .hd_pic img{
    width: 0.4rem;
    height: 0.4rem;
    border-radius: 50%;
    margin-top: 0.25rem;
  }
  .us_info .file_up{
    display: block;
    float: right;
    margin-top: 0.25rem;
    height: 0.4rem;
    line-height: 0.4rem;
    padding: 0 0.16rem;
    border-radius: 0.2rem;
    color: #fff;
    font-size: 0.24rem;
    background-color: #ffbc22;
  }
  /*头部下拉*/
  .slide_cont{
    position: absolute;
    top: 0.9rem;
    left: 0;
    width: 100%;
    height: auto;
    background-color: #24272d;
    padding: 0 0.2rem 0.3rem;
    visibility: hidden;
    opacity: 0;
    transform: translateY(0.4rem);
    transition: all 0.3s ease;
  }
  .slide_cont.show{
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }
  .slide_cont .search_input{
    position: relative;
    margin: 0.4rem auto;
    width: 6.2rem;
    height: 0.5rem;
    border: 1px solid #363a44;
    border-radius: 0.25rem;
  }
  .slide_cont .s_icon{
    position: absolute;
    top: 0.14rem;
    left: 0.2rem;
    width: 0.3rem;
  }
  .search_input input{
    position: absolute;
    top: 0;
    left: 0.7rem;
    height: 100%;
    font-size: 0.24rem;
    color: #363a44;
    width: 5.38rem;
  }
  .hd_nav_li li{
    height: 0.8rem;
    padding: 0.3rem 0 0 0.44rem;
    border-bottom: 1px solid #363a44;
    font-size: 0.28rem;
    line-height: 0.28rem;
  }
  .hd_nav_li li a{ color: #fff;}
  .hd_nav_li li.active a{ color: #f0b222;}
  header .hd_close{
    position: absolute;
    height: 0.9rem;
    width: 0.9rem;
    line-height: 0.9rem;
    font-size: 0.4rem;
    color: #fff;
    left: 0.4rem;
    display: none;
    cursor: pointer;
  }
  .search_input  input::-webkit-input-placeholder { color: #363a44; }
</style>
