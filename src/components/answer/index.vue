<template>
<div>
  <div class="a_p_banner">
    <img alt="" src="~assets/ask_answer/a_p_banner.jpg">
  </div>
  <!--你问我答user-->
  <section class="a_p_show">
    <div class="a_p_head pr">
      <h2>你问我答</h2>
      <i class="line"></i>
      <p>Ask and answer</p>
      <a href="javascript:;" class="pub_pro" @click="goPublish">发布问题</a>
    </div>
    <img src="~assets/ask_answer/a_p_pic1.jpg" alt="" class="m_b_pic">
    <div class="answer_hd">
      <img src="~assets/ask_answer/a_hd_pic_1.jpg" alt="">
      <h2>Cherish</h2>
      <p class="time">2017-09-29</p>
      <p class="cont_txt">哪部影视作品的哪一幕让你直接泪崩了？</p>
    </div>
  </section>
  <!--用户回答-->
  <section class="answer_cont">
    <h2 class="clearfix">
      <span class="tit">ANSWER:</span>
      <span class="more" @click="goDetail(1)">MORE>></span>
    </h2>
    <ul class="answer_li">
      <li>
        <div class="u_info">
          <img src="~assets/ask_answer/a_hd_pic_1.jpg" alt="">
          <h3>上古天真</h3>
          <p class="time">2017-09-29</p>
          <p class="txt">
            《小鞋子》妹妹的鞋子拿去补，让哥哥不小心弄丢了，家里妈妈生病，没钱买新鞋。因为怕被爸爸打，所以也不敢告诉爸妈。。。
          </p>
          <a href="javascript:;" class="follow">关注</a>
        </div>
      </li>
      <li>
        <div class="u_info">
          <img src="~assets/ask_answer/a_hd_pic_1.jpg" alt="">
          <h3>上古天真</h3>
          <p class="time">2017-09-29</p>
          <p class="txt">
            《小鞋子》妹妹的鞋子拿去补，让哥哥不小心弄丢了，家里妈妈生病，没钱买新鞋。因为怕被爸爸打，所以也不敢告诉爸妈。。。
          </p>
          <a href="javascript:;" class="follow">关注</a>
        </div>
      </li>
    </ul>
  </section>
  <!--我来吐槽-->
  <section class="a_p_show">
    <div class="a_p_head pr">
      <h2>神吐槽</h2>
      <i class="line"></i>
      <p>God Tucao</p>
      <a href="javascript:;" class="pub_pro">来吐槽</a>
    </div>
    <div class="tocao_info">
      <div class="main_info">
        <img alt="" src="~assets/ask_answer/c_item_1.gif"/>
        <h2>jacky</h2>
        <p class="time">2017-09-29</p>
        <p class="title">如何评价马云以及他的电影《功守道》？</p>
        <p class="tit_cont">
          马云喜欢武术和投资电影已经众所周知了，马云是主演，身边阵容十分豪华，电影20分钟的网络电影，也就没有票房这东西了。大家对此有什么看法，里面有什么故事？
        </p>
      </div>
    </div>
    <ul class="tocao_li">
      <li>
        <img alt="" src="~assets/ask_answer/c_item_2.gif" class="t_l_pic"/>
        <div class="txt">
          <p>
            当职业选手遇到的人民币玩家，你会发现，你多年修为积淀下来的行为流水的操作，终于为你赢得了一个被马爸爸一脚踹飞的机会。。。
          </p>
          <div class="visib"></div>
        </div>
        <h2 class="tit">BlingBling于</h2>
        <div class="work_de">
          <span>制片人 / 北京</span>
          <span>粉丝 323 | 关注 9</span>
        </div>
        <i class="arr"></i>
      </li>
      <li>
        <img alt="" src="~assets/ask_answer/c_item_3.gif" class="t_l_pic"/>
        <div class="txt">
          <p>
            甄子丹说泡脚用的药
            那叫川芎（xiōng），不叫川gōng。
            听到穿宫真是一脸尴尬。整个一个剧组没有认识
          </p>
          <div class="visib"></div>
        </div>
        <h2 class="tit">吴琼WUQIONG</h2>
        <div class="work_de">
          <span>制片人 / 北京</span>
          <span>粉丝 323 | 关注 9</span>
        </div>
        <i class="arr"></i>
      </li>
      <li>
        <img alt="" src="~assets/ask_answer/c_item_4.gif" class="t_l_pic"/>
        <div class="txt">
          <p>
            其实我本来觉得再过分能过分到哪里去？<br/>
            一看预告片，真的，服了。<br/>
            再也不敢质疑神拳之功力。
          </p>
          <div class="visib"></div>
        </div>
        <h2 class="tit">T.G.M VIDEO PRODUCTION</h2>
        <div class="work_de">
          <span>制片人 / 北京</span>
          <span>粉丝 323 | 关注 9</span>
        </div>
        <i class="arr"></i>
      </li>
      <li>
        <img alt="" src="~assets/ask_answer/c_item_5.gif" class="t_l_pic"/>
        <div class="txt">
          <p>
            其实我本来觉得再过分能过分到哪里去？<br/>
            一看预告片，真的，服了。<br/>
            再也不敢质疑神拳之功力。
          </p>
          <div class="visib"></div>
        </div>
        <h2 class="tit">匿名用户</h2>
        <div class="work_de">
          <span>制片人 / 北京</span>
          <span>粉丝 323 | 关注 9</span>
        </div>
        <i class="arr"></i>
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
          goDetail(id){
            this.$router.push({path:`/answer/detail/${id}`})
          },
          goPublish(){
            this.$router.push({path:`/answer/publish`})
          }
        },
        mounted() {
        }
    }
</script>

<style scoped>
  .tec_hd{
    height: 1.2rem;
    width: 7.5rem;
    padding: 0 0.2rem;
    background-color: #fff;
  }
  .tec_hd .tec_tit{
    float: left;
    margin-top: 0.3rem;
  }
  .tec_hd .tec_tit h2{
    font-size: 0.32rem;
    color: #1e2126;
    line-height: 0.32rem;
  }
  .tec_hd .tec_tit .sub_tit{
    font-size: 0.24rem;
    color: #adadb1;
    line-height: 0.24rem;
    margin-top: 0.06rem;
  }
  .tec_hd .pub_btn{
    float: right;
    height: 0.54rem;
    min-width: 1rem;
    line-height: 0.54rem;
    text-align: center;
    color: #fff;
    background-color: #ffbc22;
    font-size: 0.24rem;
    border-radius: 0.06rem;
    margin-top: 0.3rem;
  }
  /*详情*/
  .tec_item{
    width: 7.5rem;
    padding: 0.64rem 0.2rem 0.36rem;
    box-shadow:0 0.12rem 0.32rem #eee;
    background:#fff;
    border-top: 0.08rem solid #eee;
  }
  .tec_item .item_cont{
    position: relative;
    padding: 0.26rem 2.26rem 0 0.88rem;
  }
  .tec_item .item_cont .li_pic{
    position: absolute;
    top: 0;
    left: 0;
    width: 0.7rem;
    height: 0.7rem;
    border-radius: 50%;
  }
  .tec_item .item_cont h2{
    font-size: 0.28rem;
    line-height: 0.3rem;
    color: #1f2838;
  }
  .tec_item .item_cont h3{
    font-size: 0.24rem;
    color: #c4c4c4;
    line-height: 0.24rem;
    margin-top: 0.06rem;
    margin-bottom: 0.26rem;
  }
  .tec_item .item_cont .item_info{
    font-size: 0.24rem;
    margin-top: 0.3rem;
    color: #9b9b9b;
  }
  .tec_item .item_cont .follow{
    position: absolute;
    top: 0;
    right: 0;
    display: block;
    height: 0.36rem;
    width: 1rem;
    line-height: 0.32rem;
    text-align: center;
    font-size: 0.22rem;
    border: 1px solid #ffbc22;
    color: #ffbc22;
  }
  .tec_item .item_cont .item_pic{
    position: absolute;
    top: 0.56rem;
    right: 0;
    max-width: 2.18rem;
    max-height: 1.50rem;
  }
  .tec_item .tec_op{
    margin-top: 0.4rem;
    font-size: 0;
    padding-left: 0.88rem;
  }
  .tec_item .tec_op span{
    padding-left: 0.38rem;
    display: inline-block;
    margin-right: 0.26rem;
    font-size: 0.24rem;
    color: #9b9b9b;
    margin-bottom: 0.1rem;
  }
  .tec_item .tec_op .icon_comment{
    background:url("~assets/technical/comment.png") left center no-repeat;
    background-size: auto 0.22rem;
  }
  .tec_item .tec_op .icon_love{
    background:url("~assets/technical/love.png") left center no-repeat;
    background-size: auto 0.22rem;
  }
  .tec_item .tec_op .icon_send{
    background:url("~assets/technical/send.png") left center no-repeat;
    background-size: auto 0.22rem;
  }
  .tec_item .tec_op .icon_look{
    background:url("~assets/technical/eye.png") left center no-repeat;
    background-size: auto 0.22rem;
  }
  /*回答内容*/
  .comment_txt{
    padding:0.68rem 0.2rem 0.6rem 0.2rem;
  }
  .c_txt_li h2{
    font-size: 0.32rem;
    color: #1e2525;
  }
  .c_txt_li h2 a{
    display: block;
    float: right;
    border-radius: 0.06rem;
    height: 0.52rem;
    line-height: 0.52rem;
    font-size: 0.24rem;
    padding: 0 0.22rem;
    color: #fff;
    background-color: #ffbc22;
  }
  .c_txt_li h2 span{
    font-size: 0.24rem;
    color: #a9a9a9;
    padding: 0 0.1rem;
  }
  .c_txt_li .c_t_item{
    position: relative;
    padding-left: 0.6rem;
    margin-top: 0.26rem;
  }
  .c_t_p{
    position: absolute;
    top: 0;
    left: 0;
    width: 0.4rem;
    height: 0.4rem;
    border-radius: 50%;
  }
  .c_t_item .in_comment{
    border: 1px solid #e1e1e1;
    width: 6.5rem;
    height: 1.6rem;
    font-size: 0.24rem;
    color: #999;
  }
  .c_t_item .in_comment textarea{
    width: 100%;
    height: 100%;
    border:none;
    padding: 0.08rem;
  }
  .c_replay_item{
    position: relative;
    margin-top: 0.66rem;
    border-bottom: 1px solid #e1e1e1;
    padding-left: 0.6rem;
    padding-bottom: 0.2rem;
  }
  .c_replay_item .u_name{
    font-size: 0.32rem;
    color: #262424;
  }
  .c_replay_item .u_time{
    font-size: 0.26rem;
    color: #cfcfcf;
  }
  .c_replay_item > p{
    font-size: 0.24rem;
    color: #828282;
    line-height: 0.36rem;
    margin-top: 0.16rem;
    letter-spacing: 1px;
  }
  .c_replay_item .c_option{
    font-size: 0.26rem;
    text-align: right;
    margin-top: 0.2rem;
    color: #828282;
  }
  .c_replay_item .c_option span{
    padding: 0 0.1rem;
  }
  /*问答页*/
  .a_p_banner img{
    width: 7.5rem;
  }
  .a_p_show{
    margin-top: 0.76rem;
    padding: 0 0.2rem;
    position: relative;
  }
  .a_p_head h2{
    font-size: 0.36rem;
    line-height: 0.36rem;
    color: #131437;
  }
  .a_p_head .line{
    display: block;
    height: 0.04rem;
    width: 0.5rem;
    margin: 0.14rem 0;
    background-color: #ffbc22;
  }
  .a_p_head p{
    font-size: 0.26rem;
    color: #c6c6c6;
    line-height: 0.26rem;
  }
  .a_p_head .pub_pro{
    position: absolute;
    bottom: 0;
    right: 0;
    height: 0.5rem;
    font-size: 0.24rem;
    line-height: 0.5rem;
    width: 1.34rem;
    color: #fff;
    text-align: center;
    background-color: #ffbc22;
  }
  .a_p_show .m_b_pic{
    width: 100%;
    margin-top: 0.46rem;
    height: 3rem;
    background-color: #f1f1f1;
  }
  .answer_hd{
    position: relative;
    padding: 0.32rem 0 0.8rem 1.2rem;
    margin-top: 0.5rem;
  }

  .answer_hd img{
    position: absolute;
    top: 0;
    left: 0;
    width: 0.92rem;
    height: 0.92rem;
  }

  .answer_hd h2,.u_info h3{
    font-size: 0.28rem;
    color: #4c4e5b;
    line-height: 0.28rem;
  }
  .answer_hd .time,.u_info .time{
    font-size: 0.24rem;
    line-height: 0.24rem;
    color: #c4c4c4;
    margin-top: 0.1rem;
  }
  .answer_hd .cont_txt{
    margin-top: 0.4rem;
    font-size: 0.36rem;
    color: #3b3737;
  }
  .answer_cont h2{
    padding: 0 0.2rem 0.2rem;
    font-size: 0;
    border-bottom: 1px solid #e1e1e1;
  }
  .answer_cont h2 .tit{
    font-size: 0.28rem;
    color: #18181b;
  }
  .answer_cont h2 .more{
    font-size: 0.28rem;
    color: #9d9d9d;
    float: right;
  }
  .answer_li li{ padding: 0.3rem 0.2rem 0; }
  .u_info{
    position: relative;
    padding-left: 1.06rem;
    padding-top: 0.24rem;
  }
  .u_info .time{
    margin-top: 0.06rem;
  }
  .u_info img{
    position: absolute;
    top: 0;
    left: 0.1rem;
    width: 0.75rem;
    height: 0.75rem;
    border-radius: 50%;
  }
  .u_info .txt{
    font-size: 0.24rem;
    line-height: 0.32rem;
    color: #98989e;
    margin-top: 0.3rem;
  }
  .u_info .follow{
    position: absolute;
    top: 0.26rem;
    right: 0;
    height: 0.45rem;
    line-height: 0.41rem;
    width: 0.9rem;
    text-align: center;
    color: #ffbc22;
    border: 1px solid #ffbc22;
    font-size: 0.24rem;
  }
  /*神吐槽*/
  .tocao_info{
    padding: 0.2rem;
    border-top: 1px solid #e1e1e1;
    border-bottom: 1px solid #e1e1e1;
    margin-top: 0.2rem;
  }
  .main_info{
    position: relative;
    padding-left: 2.28rem;
  }
  .main_info img{
    position: absolute;
    top: 0;
    left: 0;
    max-width: 1.98rem;
  }
  .main_info h2{
    font-size: 0.36rem;
    line-height: 0.36rem;
    color: #484848;
  }
  .main_info .time{
    font-size: 0.24rem;
    line-height: 0.24rem;
    color:#c4c4c4;
    margin-top: 0.1rem;
  }
  .main_info .title{
    font-size: 0.32rem;
    color: #484848;
    line-height: 0.32rem;
    margin-top: 0.2rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .main_info .tit_cont{
    font-size: 0.24rem;
    line-height: 0.3rem;
    margin-top: 0.2rem;
    height: 0.9rem;
    letter-spacing: 1px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }
  .tocao_li{
    padding: 0 0.2rem 1.2rem;

  }
  .tocao_li li{
    margin-top: 0.74rem;
    position: relative;
    padding-left: 2.6rem;
    width: 100%;
    height: 2.8rem;
  }
  .tocao_li li .t_l_pic{
    position: absolute;
    top: 0;
    left: 0;
    max-width: 2.4rem;
    max-height: 2.8rem;
  }
  .tocao_li li .txt{
    height: 1.96rem;
  }
  .tocao_li li .txt p{
    display: inline-block;
    vertical-align: middle;
    font-size: 0.24rem;
    color: #9f9f9f;
    line-height: 0.4rem;
  }
  .tocao_li .txt .visib{
    display: inline-block;
    vertical-align: middle;
    height: 100%;
    width: 0;
  }
  .tocao_li li .tit{
    font-size: 0.32rem;
    line-height: 0.32rem;
    color: #1e2126;
  }
  .tocao_li li .work_de{
    font-size: 0.26rem;
    line-height: 0.26rem;
    margin-top: 0.12rem;
    color: #999898;
  }
  .tocao_li li .work_de span:first-child{
    margin-right: 0.2rem
  }
  .tocao_li li .arr{
    position: absolute;
    bottom: 0;
    right: 0;
    width: 0.32rem;
    height: 0.32rem;
    border-top: 0.2rem solid transparent;
    border-bottom: 0.2rem solid #ffbc22;
    border-left: 0.2rem solid transparent;
    border-right: 0.2rem solid #ffbc22;
  }


  /*你问我答--发布*/
  .publish_in{
    margin-top: 0.68rem;
  }
  .publish_file{
    position: relative;
    background-color: #f6f6f6;
    width: 100%;
    height: 3.2rem;
    width: 7.1rem;
    margin: 0 auto;
    text-align: center;
    line-height: 3.2rem;
    padding: 0.2rem;
  }
  .publish_file .upload_pic{
    max-height: 100%;
    height: 100%;
  }
  .upload_btn{
    position: absolute;
    display: inline-block;
    width: 0.68rem;
    height: 0.48rem;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    overflow: hidden;
  }
  .upload_btn .fileUpload{
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
  .upload_btn img{
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
  }
  .publish_in >h2{
    margin-top: 0.2rem;
    height: 0.76rem;
    line-height: 0.76rem;
    font-size: 0.32rem;
    color: #adadad;
    padding: 0 0.2rem;
    border-bottom: 1px solid #e1e1e1;
  }
  .pub_cont{
    padding: 0 0.2rem;
    margin-top: 0.66rem;
    margin-bottom: 0.8rem;
  }
  .pub_cont textarea{
    width: 100%;
    height: 3rem;
    border: 1px solid #e1e1e1;
    padding: 0.1rem;
    font-size: 0.24rem;
    color: #c0c0c0;
  }
  .publish_in .hidde_name{
    padding: 0 0.2rem;
    text-align: right;
    font-size: 0.28rem;
    margin-top: 0.3rem;
  }
  .publish_in .hidde_name input{
    width: 0.3rem;
    height: 0.3rem;
  }
</style>
