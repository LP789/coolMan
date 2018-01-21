<template>
<div>
  <div class="banner_img">
    <img alt="" src="~assets/persion_center/images/banner_1.jpg" />
  </div>
  <!--精选文章-->
  <section class="ac_article">
    <div class="ac_head">
      <h2>精选文章</h2>
      <i class="line"></i>
      <h3>Selected articles</h3>
      <a href="javascript:;" class="pub_ar">发布文章</a>
    </div>
    <div class="ar_bk" v-for="i in 3" @click="goDetail(i)">
      <div class="pic">
        <img alt="" src="~assets/persion_center/images/article_1.jpg" />
      </div>
      <div class="pic_txt">
        <h2>[Mac]调色软件：ColorSquid</h2>
        <p class="pic_info">
          这是一款macOS平台的调色软件，<br/>
          可以在mac电脑上帮助用户获取顶级的配色方案，创建用户所需要采集的颜色集合...</p>
        <a href="javascript:;" class="ar_more_btn">MORE></a>
      </div>
    </div>

  </section>
  <!--全部文章-->
  <section class="all-article">
    <div class="ac_head">
      <h2>全部文章</h2>
      <i class="line"></i>
      <h3>ALL articles</h3>
    </div>
    <div class="clearfix all_ar_bk" v-for="(item,index) in 4" @click="goDetail(item)">
      <div :class="{'bk_info':true,'right':index % 2 == 1}">
        <h2>群晖NAS满足影视制作存储需求</h2>
        <p>当你看到精彩的电影、搞笑的视频、气场宏大的企业宣传片。但是你不知道视频工作室幕后工作的繁琐流程以及耗时之久。</p>
        <a class="read_all">阅读全文</a>
      </div>
      <img alt="" src="~assets/persion_center/images/acticlel_4.jpg" :class="{'all_pic':true,'left': index % 2  == 1}"/>
    </div>


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
          goDetail(id){
            this.$router.push({path:`/article/detail/${id}`})
          }
        },
        mounted() {
        }
    }
</script>

<style scoped>
  body{ padding:0}
  header{
    background-color: rgba(0,0,0,0.2);
  }
  .banner_img{
    width: 7.5rem;
    height: 4.8rem;
  }
  .banner_img img{ width: 100%; height: 100%;}
  /*精选文章*/
  .ac_article{
    padding: 0.78rem 0.2rem 0;
  }
  .ac_head{
    position: relative;
    margin-bottom: 0.58rem;
  }
  .ac_head h2{
    font-size: 0.36rem;
    line-height: 0.36rem;
    color: #131437;
  }
  .ac_head .line{
    display: block;
    height: 0.02rem;
    width: 0.5rem;
    margin: 0.2rem 0;
    background-color: #ffbc22;
  }
  .ac_head h3{
    font-size: 0.26rem;
    color: #c6c6c6;
    line-height: 0.26rem;
  }
  .ac_head .pub_ar{
    position: absolute;
    right: 0;
    bottom: 0;
    height: 0.42rem;
    width: 1.3rem;
    line-height: 0.42rem;
    text-align: center;
    font-size: 0.24rem;
    color: #fff;
    background-color: #ffbc22;
    border-radius: 0.23rem;
    display: block;
  }
  .ar_bk{
    padding-bottom: 0.4rem;
    box-shadow: 0 0.2rem 0.3rem #e1e1e1;
    margin-bottom: 0.4rem;
  }
  .ar_bk .pic{
    width: 100%;
    height: 4.02rem;
    background-color: #e1e1e1;
    text-align: center;
    line-height: 4.02rem;
  }
  .ar_bk .pic img{
    max-width: 100%;
    max-height: 4.02rem;
  }
  .ar_bk .pic_txt{
    padding: 0.22rem 0.2rem 0;
  }
  .ar_bk .pic_txt h2{
    font-size: 0.32rem;
    line-height: 0.32rem;
    color: #03041a;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .ar_bk .pic_txt .pic_info{
    margin-top: 0.25rem;
    font-size: 0.26rem;
    line-height: 0.38rem;
    color: #757575;
    height: 1.12rem;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }
  .ar_bk .pic_txt .ar_more_btn{
    width: 1.67rem;
    display: block;
    margin-top: 0.4rem;
    height: 0.46rem;
    font-size: 0.24rem;
    color: #fff;
    line-height: 0.46rem;
    text-align: center;
    background-color: #ffbc22;
    box-shadow: 0 0.06rem 0.24rem #e1e1e1;
  }
  /*全部文章*/
  .all-article{
    padding: 0.76rem 0.2rem 0;
  }
  .all_ar_bk{
    width: 100%;
    height: 2.39rem;
    margin-bottom: 0.5rem;
    box-shadow: 0 0.11rem 0.32rem #dde9f7;
    overflow-x: hidden;
  }
  .all_ar_bk .bk_info{
    float: left;
    width: 3.54rem;
    padding-left: 0.12rem;
  }
  .all_ar_bk .bk_info.right{ float: right; padding: 0 0.12rem 0 0;}
  .all_ar_bk .bk_info h2{
    font-size: 0.32rem;
    line-height: 0.32rem;
    color: #1d1e2e;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
    padding: 0.18rem 0;
  }
  .all_ar_bk .bk_info p{
    font-size: 0.24rem;
    line-height: 0.32rem;
    height: 0.96rem;
    color: #9d9d9d;
    text-indent: 0.32rem;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }
  .all_ar_bk .bk_info .read_all{
    float: right;
    display: block;
    font-size: 0.24rem;
    border: 1px solid #e9f2fc;
    color: #ffc53e;
    height: 0.42rem;
    line-height: 0.4rem;
    width: 1.2rem;
    text-align: center;
    margin-top: 0.12rem;
    margin-right: 0.2rem;
  }
  .all_ar_bk .all_pic{
    float: right;
    width: 3.26rem;
    height: 2.39rem;
  }
  .all_ar_bk .all_pic.left{ float: left;}

</style>
