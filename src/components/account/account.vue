<template>
  <div>
  	<section class="p_c_banner">
		<img alt="" src="~assets/persion_center/images/p_c_banner.jpg"/>
	</section>
	<!--基本信息-->
	<section class="person_info">
		<div class="p_info">
			<img alt="" src="~assets/persion_center/images/p_c_hd.jpg" class="hd"/>
			<h2>姜博</h2>
			<h3>摄影 <span>|</span>剪辑师 <span>|</span>导演</h3>
			<p><span>年龄：</span>27&nbsp;
				<span>粉丝：</span>797&nbsp;
				<span>关注：</span>9&nbsp;
				<span class="d_y"></span><span>导演</span>&nbsp;
				<span class="add"></span><span>北京</span>
			</p>
		</div>
	</section>
	<!--分类选项-->
	<section>
		<ul class="tit_li clearfix">
			<li v-for="item in liArr" @onclick="router.push()" :class="tit_li_active==item.value?'active':''">{{ item.value}}</li>
		</ul>
		<router-view></router-view>
	</section>
  </div>
</template>

<script>
    export default {
        name: "works",
        data() {
          return {
            liArr:[
              {value:'作品',url:'/account/works'},
              {value:'文章',url:'/account/article'},
              {value:'喜欢',url:'/account/love'},
              {value:'圈子',url:'/account/circle'},
              {value:'简介',url:'/account/self'},
              {value:'与我相关',url:'/account/about'},
            ],

          }
        },
        methods: {},
        mounted() {
        },
        computed:{
        	tit_li_active(){return 'account';}
        }
    }
</script>

<style scoped>
.p_c_banner img{
	width: 7.5rem;
}
.person_info{
	padding: 0.3rem 0.1rem 0.2rem;
}
.p_info{
	width: 100%;
	position: relative;
	padding-left: 1.3rem;
}
.p_info .hd{
	width: 1.08rem;
	height: 1.07rem;
	position: absolute;
	top: 0;
	left: 0;
}
.p_info h2{
	font-size: 0.32rem;
	line-height: 0.32rem;
	color: #051936;
}
.p_info h3{
	font-size: 0.24rem;
	line-height: 0.24rem;
	margin-top: 0.13rem;
}
.p_info h3 span{
	padding: 0 0.1rem;
}
.p_info p{
	margin-top: 0.16rem;
	font-size: 0.24rem;
	line-height: 0.24rem;
}
.p_info p span:first-child{
	margin-left: 0;
}
.p_info p span{
	color: #b3b7bc;
}
.p_info p span.d_y{
	padding-left: 0.3rem;
	background:url("~assets/persion.png") left center no-repeat;
}
.p_info p span.add{
	padding-left: 0.3rem;
	background:url("~assets/p_location.png") left center no-repeat;
}
.tit_li{
	border-top: 1px solid #e1e1e1;
	border-bottom: 1px solid #e1e1e1;
}
.tit_li li.active{
	border-bottom: 0.04rem solid #ffbc22;
	color: #333;
}	
.tit_li li{
	height: 0.7rem;
	line-height: 0.7rem;
	float: left;
	width: 16.6%;
	text-align: center;
	font-size: 0.28rem;
}
.tit_li li a{
	display: block;
	color: #8e939b;
	font-size: 0.28rem;
}
.tit_li li.active a{
	color: #333;
}
/*简介样式*/
.p_c_article{ 
	padding: 0.2rem 0.2rem 1rem; 
}
.p_c_article table{
	width: 100%;
}
.p_c_article table td{
	height: 0.8rem;
	font-size: 0.24rem;
	color: #b6b5b5;
}
.p_c_article table td span{
	padding-right: 0.2rem;
	color: #1e2126;
	vertical-align: middle;
}
.p_c_article table td p{
	display: inline-block;
	line-height: 0.36rem;
	vertical-align: middle;
}
/*简介样式*/
/*圈子样式*/
.p_c_circle{
	padding: 0.2rem 0.2rem 0.5rem; 
}
.p_c_circle .tit_hd{
	padding: 0.5rem 0;
	font-size: 0.24rem;
	color: #8e939b;
}
.p_c_circle .tit_hd span{
	font-size: 0.34rem;
	color: #515151;
}
.p_c_circle .circle_bk,.p_c_circle_3 .circle_bk{
	position: relative;
	margin-bottom: 0.5rem;
	padding-left: 1.5rem;
}
.p_c_circle .circle_bk h3,.p_c_circle_3 .circle_bk h3{
	font-size: 0.32rem;
	color: #898686;
	margin-bottom: 0.3rem;
}
.circle_bk .img_li li{
	float: left;
	width: 2.70rem;
	/*height: 1.74rem;*/
	margin-right: 0.2rem;
	margin-bottom: 0.2rem;
}
.circle_bk .img_li li:nth-child(2n){
	margin-right: 0;
}
.circle_bk .img_li li img{ max-height: 100%; width: 100%; float: left;}

.circle_bk .c_com_txt{
	padding: 0.24rem 0;
	font-size: 0.28rem;
	color: #b4b5b6;
	border-bottom: 1px solid #e1e1e1;
}
.circle_bk .hd_pic{
	width: 0.72rem;
	height: 0.72rem;
	position: absolute;
	top: 0;
	left: 0;
	border-radius: 50%;
}
.circle_bk .c_time{
	position: absolute;
	top: 0.86rem;
	left: 0;
	font-size: 0.24rem;
	line-height: 0.24rem;
	color: #898686;
}
.circle_bk .c_com_txt span{
	padding: 0 0.2rem;
}
.circle_bk .item_txt_tit{
	font-size: 0.26rem;
	color: #777272;
	line-height: 0.26rem;
	margin: 0.2rem 0
}
.circle_bk .item_txt{
	font-size: 0.24rem;
	color: #a9a9a9;
	line-height: 0.34rem;
	margin: 0.15rem 0;
}
.circle_bk .c_big_pic img{
	width: 3.48rem;
	height: 1.96rem;
}
.load_more{
	margin: 0.5rem auto 0 auto;
	display: block;
	height: 0.5rem;
	line-height: 0.5rem;
	width: 1.8rem;
	background-color: #eeeeee;
	border-radius: 50%;
	color: #ccc;
	font-size: 0.24rem;
	text-align: center;
	border-radius: 0.25rem;
}
/*圈子样式*/
/*圈子_发布动态 样式*/	
.p_c_circle_2{
	padding: 0.2rem 0.2rem 0.5rem; 
}
.c2_hd{
	position: relative;
	padding: 0.8rem 0 0.4rem;
}
.c2_hd p{
	font-size: 0.24rem;
	color: #1e2126;
}
.c2_hd .c_publish{
	position: absolute;
	top: 0.4rem;
	right: 0;
	height: 0.5rem;
	width: 1.46rem;
	line-height: 0.46rem;
	text-align: center;
	color: #fff;
	font-size: 0.26rem;
	background-color: #ffbc22;
	border-radius: 0.06rem;
}
.p_c_circle_2 .c2_input_txt{
	width: 100%;
	height: 2rem;
	border: 1px solid #ccc;
	padding: 0.1rem;
	font-size: 0.24rem;
	color: #333333;
	border-radius: 0.06rem;
}
.up_f_cont{
	margin-top: 0.46rem;
	padding:0 0.3rem;
}
.up_f_cont li{
	float: left;
	width: 3.18rem;
	height: 2.9rem;
	margin-right: 0.5rem;
	margin-bottom: 0.36rem;
	background-color: #f1f1f1;
}
.up_f_cont li:nth-child(2n){ margin-right: 0;}
.up_f_cont li img{
	width: 100%;
	height: 100%;
}
.up_f_cont li.up_file{
	text-align: center;
	line-height: 2.9rem;
	font-size: 0;

}
.up_f_cont li.up_file .upload_btn{
	position: absolute;
	left: 0;
	opacity: 0;
	z-index: 1;
	width: 100%;
	height: 100%;
}
.up_f_cont li.up_file img{
	width: 1.2rem;
	height: 1.2rem;
	margin-top:0.8rem;
}
.add_sub_tit{
	font-size: 0.28rem;
	color: #ccc;
	line-height: 0.28rem;
	padding-left: 0.3rem;
	margin-bottom: 1rem;
}
/*圈子_发布动态*/	
/*圈子_详情页样式*/
.p_c_circle_3{
	padding: 0.2rem 0.2rem 0.5rem; 
	position: relative;
}
.p_c_circle_3 .tit_hd{
	padding: 0.5rem 0;
	font-size: 0.24rem;
	color: #8e939b;
}
.p_c_circle_3 .tit_hd span{
	font-size: 0.34rem;
	color: #515151;
}
.p_c_circle_3 .c_publish{
	position: absolute;
	top: 0.7rem;
	right: 0.2rem;
	height: 0.5rem;
	line-height: 0.5rem;
	width: 1.46rem;
	text-align: center;
	color: #fff;
	font-size: 0.26rem;
	background-color: #ffbc22;
	border-radius: 0.06rem;
}
.c_t_item{
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
.c_t_item .c3_publish{
	float: right;
	width: 1rem;
	height: 0.45rem;
	line-height: 0.45rem;
	color: #fff;
	font-size: 0.24rem;
	margin-top: 0.2rem;
	background-color: #ffbc22;
	text-align: center;
	border-radius: 0.06rem;
}
	/*评论内容*/
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
</style>
