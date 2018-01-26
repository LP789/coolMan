<template>
  <div>
  	<div class="v_video">
	  <section>
			<div class="v_div clearfix">
				<span class="title">视频</span>
				<select class="v_s_li">
					<option>video</option>
				</select>
				<a class="v_more fr">更多>></a>
			</div>
			<div class="v_item_bk">
				<div class="v_cont">
					<img alt="" src="~assets/persion_center/images/c_big_pic_2.jpg" />
					<p class="v_cont_info">纪录片 - 旅行</p>
				</div>
				<h2>SUMMER IN DUBAI!</h2>
				<div class="u_info clearfix">
					<span class="hd_pic"><img alt="" src="~assets/persion_center/v_item_1.png"></span>
					<span class="v_name">付彬彬</span>
					<span class="v_work">导演/摄影</span>
					<div class="v_show">播放   6740<span>|</span>喜欢   5 </div>
				</div>
			</div>
			<div class="v_item_bk">
				<div class="v_cont">
					<img alt="" src="~assets/persion_center/images/c_big_pic_4.jpg" />
					<p class="v_cont_info">纪录片 - 旅行</p>
				</div>
				<h2>SUMMER IN DUBAI!</h2>
				<div class="u_info clearfix">
					<span class="hd_pic"><img alt="" src="~assets/persion_center/v_item_1.png"></span>
					<span class="v_name">付彬彬</span>
					<span class="v_work">导演/摄影</span>
					<div class="v_show">播放   6740<span>|</span>喜欢   5 </div>
				</div>
			</div>
			<div class="v_item_bk">
				<div class="v_cont">
					<img alt="" src="~assets/persion_center/images/c_big_pic_3.jpg" />
					<p class="v_cont_info">纪录片 - 旅行</p>
				</div>
				<h2>SUMMER IN DUBAI!</h2>
				<div class="u_info clearfix">
					<span class="hd_pic"><img alt="" src="~assets/persion_center/v_item_1.png"></span>
					<span class="v_name">付彬彬</span>
					<span class="v_work">导演/摄影</span>
					<div class="v_show">播放   6740<span>|</span>喜欢   5 </div>
				</div>
			</div>
	</section>
	<!--文章-->
	<section class="article">
		<div class="v_div clearfix" style="padding: 0.34rem 0;">
			<span class="title">文章</span>
			<span class="v_s_li">article</span>
			<a class="v_more fr">更多>></a>
		</div>
		<div class="v_a_bk">
			<img alt="" src="~assets/persion_center/images/bk_item_1.jpg" class="m_pic"/>
			<h2>专访：姜博——年轻的偏执狂</h2>
			<p class="txt">从2007年  与“快男”比赛视觉制作至今，他先后多次挑起了“湖卫”选秀，跨年晚会, 张杰等人个人演唱会整体视觉呈现的重担...</p>
			<div class="clearfix au_info">
				<span class="hd_pic"><img alt="" src="~assets/persion_center/v_item_1.png"></span>
				<span class="hd_name">付彬彬</span>
			</div>
		</div>
		<div class="v_a_bk">
			<img alt="" src="~assets/persion_center/images/bk_item_2.jpg" class="m_pic"/>
			<h2>旅行感悟《WHAT IS FREEDOM》</h2>
			<p class="txt">从2007年  与“快男”比赛视觉制作至今，他先后多次挑起了“湖卫”选秀，跨年晚会, 张杰等人个人演唱会整体视觉呈现的重担...</p>
			<div class="clearfix au_info">
				<span class="hd_pic"><img alt="" src="~assets/persion_center/v_item_1.png"></span>
				<span class="hd_name">付彬彬</span>
			</div>
		</div>
	</section>
	<section>
		<div class="tec_hd clearfix">
			<span class="title">技术交流</span>
			<span class="v_s_li">technical exchange</span>
			<a class="v_more fr">更多>></a>
		</div>
		<div class="tec_item">
			<div class="item_cont">
				<img src="~assets/technical/product_hd_1.png" alt="" class="li_pic">
				<h2>慕容雪雪</h2>
				<h3>2017-09-29</h3>
				<h2>影视文案必须明白的五条军规</h2>
				<div class="item_info">
					何为影视文案？<br/>
					影视文案的必备技能有哪些？<br/>
					影视文案与平面文案的区别在哪里?<br/>
					文案创作是个痛苦的过程，创作文案是件快乐的事情。
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
    </div>
  </div>

</template>

<script>
    export default {
        name: "works",
        data() {
          return {
          }
        },
        methods: {},
        mounted() {
        },
        computed:{
        	tit_li_active(){return '喜爱';}
        }
    }
</script>

<style scoped>
.p_c_banner{
	font-size: 0;
}
.p_c_banner img{
	width: 7.5rem;
}
.person_info{
	padding: 0.3rem 0.2rem 0.2rem;
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
}	
.tit_li li{
	height: 0.7rem;
	line-height: 0.7rem;
	float: left;
	width: 20%;
	text-align: center;
}
.tit_li li a{
	display: block;
	color: #8e939b;
	font-size: 0.28rem;
}
/*内容*/
.v_div{
	padding: 0.34rem 0.2rem;
	line-height: 0.34rem;
}
.v_div .title{
	font-size: 0.32rem;
	color: #21232a;
	margin-right: 0.1rem;
}
.v_div .v_s_li{
	height: 0.34rem;
	font-size: 0.24rem;
	color: #8f9094;
	border: none;
}
.v_div .v_more{
	font-size: 0.28rem;
	color: #8e939b;
	line-height: 0.34rem;
	display: block;
	margin-top: 0.14rem;
}
.v_video .v_cont{
	font-size: 0;
	position: relative;
	min-height: 3.65rem;
}
.v_video .v_cont img{
	width: 7.5rem;
}
.v_video .v_cont .v_cont_info{
	position: absolute;
	left: 0;
	bottom:0;
	width: 100%;
	height: 0.6rem;
	line-height: 0.6rem;
	font-size: 0.26rem;
	color: #fff;
	padding: 0 0.4rem;
	background-color: rgba(0,0,0,0.5);
	overflow: hidden;
	text-overflow: ellipsis;
}
.v_item_bk{ padding-bottom: 0.8rem;}
.v_item_bk h2{
	padding: 0 0.4rem;
	margin: 0.3rem 0;
	font-size: 0.32rem;
	color: #031333;
}
.v_item_bk .u_info{
	font-size: 0;
	padding: 0 0.4rem;
	line-height: 0.4rem;
}
.v_item_bk .u_info .hd_pic{
	float: left;
	font-size: 0;
	display: inline-block;
	width: 0.4rem;
	height: 0.4rem;
	overflow: hidden;
	border-radius: 50%;
	margin-right: 0.16rem;
}
.v_item_bk .u_info .hd_pic img{
	width: 100%;
	height: 100%;
}
.v_item_bk .u_info  .v_name{
	float: left;
	font-size: 0.32rem;
	color: #1e2126;
	margin-right: 0.18rem;
}
.v_item_bk .u_info .v_work{
	float: left;
	font-size: 0.24rem;
	color: #a0a4a9;
	margin-right: 0.18rem;
}
.v_item_bk .u_info .v_show{
	font-size: 0.28rem;
	color: #a0a4a9;
	float: right;
}
.v_item_bk .u_info .v_show span{
	padding: 0 0.1rem;
}
/*文章·*/
.article{
	padding: 0 0.2rem;
}
.v_a_bk{
	padding-left: 3.3rem;
	height: 2.76rem;
	position: relative;
	margin-bottom: 0.6rem;
}
.v_a_bk .m_pic{
	position: absolute;
	top: 0;
	left: 0;
	width: 3.06rem;
	height: 100%;
}
.v_a_bk h2{
	height: 0.92rem;
	font-size: 0.32rem;
	line-height: 0.41rem;
	color: #031333;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 2;
	overflow: hidden;
	padding-top: 0.1rem;
}
.v_a_bk .txt{
	font-size: 0.24rem;
	color: #a3a5a8;
	line-height: 0.4rem;
	height: 1.2rem;
	margin-top: 0.1rem;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 3;
	overflow: hidden;
}
.v_a_bk .hd_pic{
	font-size: 0;
	display: inline-block;
	float: left;
	width: 0.38rem;
	height: 0.38rem;
	border-radius: 50%;
	margin-right: 0.1rem;
	overflow: hidden;
}
.v_a_bk .au_info{
	font-size: 0;
	margin-top: 0.2rem;
}
.au_info .hd_pic img{
	width: 100%;
	height: 100%;
}
.v_a_bk .hd_name{
	display: inline-block;
	float: left;
	font-size: 0.28rem;
	line-height: 0.3rem;
	color: #1e2126;
	margin-top: 0.08rem;
}
/*技术交流*/
.tec_hd{
	padding: 0 0.2rem 0.4rem;
	font-size: 0;
	border-bottom: 1px solid #e1e1e1;
}
.tec_hd .title{
	font-size: 0.32rem;
	color: #1e2126;
	margin-right: 0.16rem;
}
.tec_hd .v_s_li{
	font-size: 0.28rem;
	color: #adadb1;
}
.tec_hd .v_more{
	display: block;
	font-size: 0.28rem;
	color: #adadb1;
	margin-top: 0.1rem;
}
.tec_item{
	width: 7.5rem;
	padding: 0.64rem 0.2rem 0.36rem;
	box-shadow:0 0.12rem 0.32rem #eee;
	background:#fff;
}
.tec_item .item_cont{
	position: relative;
	padding: 0.2rem 2.26rem 0 0.88rem;
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
	background:url("~assets/persion_center/comment.png") left center no-repeat;
	background-size: auto 0.22rem;
}
.tec_item .tec_op .icon_love{
	background:url("~assets/persion_center/love.png") left center no-repeat;
	background-size: auto 0.22rem;
}
.tec_item .tec_op .icon_send{
	background:url("~assets/persion_center/send.png") left center no-repeat;
	background-size: auto 0.22rem;
}
</style>
