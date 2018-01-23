<template>
    <div>
      <section class="tec_list">
        <div class="tec_item">
          <div class="item_cont">
            <img src="~assets/technical/product_hd_1.png" alt="" class="li_pic">
            <h2>慕容雪雪</h2>
            <h3>2017-09-29</h3>
            <h2>哪些纪录片可以称为「神作」？</h2>
            <div class="item_info">
              我极力推荐两部在我心中地位数一数二的纪录片。喜欢历史／政治的人绝对不可错过。这两部虽然都是美国人拍的纪录片。。。
            </div>
            <a class="follow">+关注</a>
            <img alt="" src="~assets/technical/product_1.jpg" class="item_pic">
          </div>
          <p class="tec_op">
            <span class="icon_comment">评论：123</span>
            <span class="icon_love">喜欢：123</span>
            <span class="icon_send">转发：12346</span>
          </p>
        </div>
      </section>
      <!--回答-->
      <section class="t_de_reply">
        <div class="t_de_head clearfix">
          <h2>125个回答</h2>
        </div>
        <div class="clearfix t_de_cont">
          <div class="t_replay_hd">
            <img src="~assets/technical/product_hd_1.png" alt="" class="t_hd_pic">
            <h2>风雨骑</h2>
            <span class="re_time">2017-10-11</span>
          </div>
          <div class="show_txt">
            <p class="txt">首先是BBC三大“镇馆之宝”（自封的）《地球脉动》几乎是有史以来最好的生态纪录片，用接近上帝的视角，审视这个叫做地球的星球。。。</p>
          </div>
        </div>
        <a href="javascript:;" class="t_de_more">更多评论∨</a>
      </section>
      <!--相关交流-->
      <section class="t_de_reply">
        <div class="t_de_head clearfix">
          <h2>相关交流</h2>
        </div>
        <ul class="about_exch">
          <li>
            <p class="problem">如何评价纪录片《归途列车》？ </p>
            <p class="reply">23 个回答</p>
          </li>
          <li>
            <p class="problem">《舌尖上的中国》有哪些幕后故事可以分享 ?  </p>
            <p class="reply">24 个回答</p>
          </li>
          <li>
            <p class="problem">《舌尖上的中国》第二季有哪些看点，如何评价？ </p>
            <p class="reply">94 个回答</p>
          </li>
          <li>
            <p class="problem">CCTV 纪录片与 NHK 、 BBC 的纪录片有哪些异同点？ </p>
            <p class="reply">46 个回答</p>
          </li>
          <li>
            <p class="problem">《档案 2013 血色海豚湾》里说的日本人真的是这么残忍吗？ </p>
            <p class="reply">388 个回答</p>
          </li>
        </ul>
      </section>
    </div>
</template>

<script>
    export default {
        name: "detail",
        data() {
            return {}
        },
        methods: {},
        mounted() {
        }
    }
</script>

<style scoped>
  /*技术交流列表页*/
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
  .tec_list{ padding-bottom: 0.6rem; }
  .tec_item{
    width: 7.5rem;
    padding: 0.64rem 0.2rem 0.36rem;
    box-shadow:0 0.12rem 0.32rem #eee;
    /*background:#fff;*/
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
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
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
    max-height: 2rem;
  }
  .tec_item .tec_op{
    margin-top: 0.4rem;
    font-size: 0;
    padding-left: 0.88rem;
  }
  .tec_item .tec_op span{
    padding-left: 0.32rem;
    display: inline-block;
    margin-right: 0.26rem;
    font-size: 0.24rem;
    color: #9b9b9b;
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
  /*技术交流-详情页面*/
  .t_de_reply{
    padding-top: 0.2rem;
  }
  .t_de_head{
    padding: 0 0.2rem;
    border-bottom: 1px solid #e8e8e8;
    height: 1rem;
    line-height: 1rem;
  }
  .t_de_head h2{
    font-size: 0.36rem;
    color: #424242;
    float: left;
  }
  .t_de_more{
    font-size: 0.30rem;
    color: #cfcfcf;
    text-align: center;
    display: block;
  }
  .t_de_reply .t_de_cont{
    padding: 0 0.2rem;
  }
  .t_replay_hd{
    position: relative;
    margin-top: 0.52rem;
    padding-left: 0.9rem;
    padding-top: 0.2rem;
    height: 0.76rem;
  }
  .t_replay_hd .t_hd_pic{
    position: absolute;
    top: 0;
    left: 0;
    width: 0.76rem;
    height: 0.76rem;
    border-radius: 50%;
  }
  .t_replay_hd h2{
    font-size: 0.32rem;
    color: #535350;
  }
  .re_time{
    position: absolute;
    top: 0.3rem;
    right: 0;
    font-size: 0.28rem;
    color: #aeaeae;
  }
  .t_de_cont .show_txt{
    padding-left: 0.9rem;
    padding-top: 0.1rem;
  }
  .t_de_cont .show_txt .txt{
    font-size: 0.24rem;
    color: #9c9c9c;
    line-height: 0.38rem;
  }
  .t_de_cont .show_txt .item_img{
    max-width: 100%;
    max-height: 6rem;
    margin: 0.2rem 0;
  }
  .about_exch{
    padding: 0.5rem 0.2rem 0.8rem;
  }
  .about_exch li p{
    font-size: 0.28rem;
    line-height: 0.42rem;
    margin-top: 0.2rem;
  }
  .about_exch li .problem{
    color: #2f366e;
  }
  .about_exch li .reply{
    color: #a1a1a1;
    text-align: right;
  }
  .tec_op{
    margin-top: 0.4rem;
    font-size: 0;
    padding-left: 0.88rem;
  }
  .tec_op span{
    padding-left: 0.32rem;
    display: inline-block;
    margin-right: 0.26rem;
    font-size: 0.24rem;
    color: #9b9b9b;
  }
  .tec_op .icon_comment{
    background:url("~assets/technical/comment.png") left center no-repeat;
    background-size: auto 0.22rem;
  }
  .tec_op .icon_love{
    background:url("~assets/technical/love.png") left center no-repeat;
    background-size: auto 0.22rem;
  }
  .tec_op .icon_send{
    background:url("~assets/technical/send.png") left center no-repeat;
    background-size: auto 0.22rem;
  }
  .tec_op .icon_look{
    background:url("~assets/technical/eye.png") left center no-repeat;
    background-size: auto 0.22rem;
  }
  /*技术交流*/
  .comment_txt{
    padding:0.68rem 0.2rem 0 0.2rem;
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
  /*技术交流发布*/
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
  .publish_in >h2 input{width: 6rem;}
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
</style>
