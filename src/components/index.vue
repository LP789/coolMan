<template>
    <div class="dib">
      <section class="index_banner">
        <swiperIndex></swiperIndex>
      </section>
      <!--技术交流-->
      <section class="tec_exc">
        <div class="tec_head">
          <h2>技术交流<span>TECHNICAL EXCHANGE</span></h2>
          <i class="line"></i>
          <!-- <a class="more">MORE&gt;&gt;</a> -->
          <router-link to="/skill/list" class="more">MORE&gt;&gt;</router-link>
        </div>
        <ul class="pro_item">
          <li class="clearfix" v-for="i in 2">
            <img alt="" src="~assets/index/pro_1.jpg">
            <div class="tec_cont">
              <h2>影视文案必须明白的五条军规</h2>
              <p class="txt">
                <a href="javascript:;">何为影视文案？</a>
                <a href="javascript:;">影视文案的必备技能有哪些？</a>
                <a href="javascript:;">影视文案与平面文案的区别在哪里？</a>
              </p>
              <div class="info">
                <span class="name">【慕容雪雪】</span>
                <span>发布&nbsp;&nbsp;2017-09-21</span>
                <span class="reply">回复:24</span>
              </div>
            </div>
          </li>

        </ul>
      </section>
      <!--课程-->
      <section class="tec_exc">
        <div class="tec_head">
          <h2>课程<span>COURSE</span></h2>
          <i class="line"></i>
          <!-- <a class="more">MORE&gt;&gt;</a> -->
          <router-link to="/skill/list" class="more">MORE&gt;&gt;</router-link>
        </div>
        <ul class="pro_item">
          <li class="clearfix" v-for="item in 3">
            <img alt="" src="~assets/index/pro_1.jpg">
            <div class="tec_cont">
              <h2>10分钟教你玩转单反</h2>
              <p class="txt">
                <a href="javascript:;">觉得单反很难吗？</a>
                <a href="javascript:;">不知从何下手吗？</a>
                <a href="javascript:;">是否傻瓜相机伴随了你很久呢？</a>
              </p>
              <div class="info">
                <span class="c_name">基础视频教程</span>
              </div>
            </div>
          </li>

        </ul>
      </section>
      <!--最新注册-->
      <section class="tec_exc">
        <div class="tec_head">
          <h2>最新注册<span>The latest registration</span></h2>
          <i class="line"></i>
          <router-link to="/skill/list" class="more">MORE&gt;&gt;</router-link>
        </div>
        <ul class="hr_item clearfix">
          <li v-for="i in 4">
            <div class="h_pic">
              <img src="~assets/index/head_pic_1.png">
            </div>
            <h2>姜博</h2>
            <p class="job"><span>导演</span>|<span>摄影指导</span>|<span>摄影助理</span></p>
            <p class="work">代表作：《Shine with you中国移动宣传片》</p>
            <p class="work">《佳音》微电影</p>
          </li>

        </ul>
      </section>
      <!--公告栏-->
      <section class="tec_exc adv_news">
        <div class="tec_head">
          <h2>公告栏<span>NOTICE BOARD</span></h2>
          <i class="line"></i>
        </div>
        <ul class="adv_item">
          <li class="clearfix active" v-for="item in 2">
            <img src="img/index/adv_1.jpg">
            <div class="content">
              <p class="info">video是国内最大的影视创作人社区，汇聚众多优秀创作人，提供作品展示、项目交流、拍摄制作机会等影视行业服务。</p>
              <p class="time">2017-9-28 发布</p>
            </div>
          </li>

        </ul>
      </section>
    </div>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {}
        },
        methods: {
        },
        mounted() {
        }
    }
</script>

<style scoped>
  .index_banner,.index_banner .ban_cont{ height: 4.8rem;}
  .index_banner,.index_banner .ban_cont img{
    width: 7.5rem;
    height: 4.8rem;
  }
  .index_banner .swiper-pagination-bullet{
    background-color: rgba(255,255,255,0.4);
  }
  .index_banner .swiper-pagination-bullet-active{ background-color:  rgba(255,255,255,0.6);}
  /*技术交流*/
  .tec_exc{
    background-color: #1e1f27;
    width: 7.5rem;
  }
  .tec_head{
    position: relative;
    padding-top: ;
    padding: 0.84rem 0.4rem 0.2rem;
    border-bottom: 1px solid #474d59;
  }

  .tec_head .line{
    position: absolute;
    bottom: 0.28rem;
    left: 0.2rem;
    width: 0.04rem;
    height: 0.56rem;
    background-color: #ffbc22;

  }
  .tec_head h2{
    position: relative;
    font-size: 0.36rem;
    color: #fff;
  }
  .tec_head h2 >span{
    display: block;
    font-size: 0.24rem;
    color: #494b5e;]
  margin-top: 0.06rem;
  }
  .tec_head .more{
    position: absolute;
    bottom:0.2rem;
    right: 0.2rem;
    font-size: 0.32rem;
  }
  .tec_exc .pro_item{
    padding: 0.66rem 0.2rem 0;
  }
  .tec_exc .pro_item li{
    padding-left: 0.2rem;
    margin-bottom: 0.52rem;
  }
  .tec_exc .pro_item li:last-child{ margin-bottom: 0;}
  .tec_exc .pro_item li >img{
    float: left;
    width: 2.76rem;
    height: 1.68rem;
  }
  .pro_item .tec_cont{
    float: left;
    width: 4.14rem;
    padding-left: 0.2rem;
  }
  .pro_item .tec_cont h2{
    font-size: 0.30rem;
    line-height: 0.3rem;
    color: #fff;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .pro_item .tec_cont .txt{
    font-size: 0.24rem;
    line-height: 0.3rem;
    height: 1rem;
    padding-top: 0.1rem;
    overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
  .pro_item .tec_cont .txt >a{
    display: block;
    color: #81828d;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .pro_item .tec_cont .info{
    font-size: 0.18rem;
    color: #4c4e5b;
    margin-top: 0.2rem;
  }
  .pro_item .info .c_name{
    display: block;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .hr_item{ padding: 0 0.1rem; }
  .hr_item li{
    float: left;
    width: 50%;
    padding: 0.32rem 0;
    text-align: center;
  }

  .hr_item .h_pic img{
    width: 1.26rem;
    height: 1.26rem;
    border-radius: 50%;
    border:0.06rem solid #3a3f49;
  }
  .hr_item .h_pic img.active{
    border:0.04rem solid #ffbc22;
  }
  .hr_item li >h2{
    color: #fff;
    font-size: 0.32rem;
    margin-top: 0.2rem;
  }
  .hr_item li >.job{
    color: #5e6370;
    font-size: 0.26rem;
    margin-top: 0.1rem;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .hr_item li >.job span{
    padding: 0 0.1rem;
  }
  .hr_item li > .work{
    font-size: 0.24rem;
    color: #7c8494;
    width: 100%;
    margin-top: 0.1rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .adv_news{ background-color: #dddde3; }
  .adv_news .tec_head{ border: none; }
  .adv_news .tec_head >h2{ color: #1e1f27; }
  .adv_news .tec_head >h2 span{ color: #acacac; }
  .adv_item{ padding: 0.1rem 0.2rem;}
  .adv_item li{
    padding: 0.2rem;
    margin-bottom: 0.8rem;
  }
  .adv_item li.active{
    box-shadow: 0 0.06rem 0.3rem #bfc0c2;
  }
  .adv_item li > img{
    width: 2.1rem;
    height: 1.52rem;
    float: left;
  }
  .adv_item li .content{
    float: right;
    width: 4.6rem;
    padding-left: 0.1rem;
  }
  .adv_item li .content .info{
    font-size: 0.24rem;
    color: #62636c;
    height: 1.06rem;
    line-height: 0.32rem;
    padding-top:0.14rem;
    overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
  .adv_item li .content .time{
    font-size: 0.24rem;
    color: #aeb0b6;
    margin-top: 0.2rem;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
</style>
