<template>
<div>
  <section class="p_c_banner">
		<img alt="" src="../../img/persion_center/images/p_c_banner.jpg"/>
	</section>
	<!--基本信息-->
	<section class="person_info">
		<div class="l_operation clearfix">
			<a href="javascript:;" class="l_btns active">+关注</a>
			<a href="javascript:;" class="l_btns">私信</a>
			<a href="javascript:;" class="l_break"><img alt="" src="../../img/persion_center/break.png"></a>
		</div>
		<div class="p_info">
			<img alt="" src="../../img/persion_center/images/p_c_hd.jpg" class="hd"/>
			<h2>姜博</h2>
			<h3>摄影 <span>|</span>剪辑师 <span>|</span>导演</h3>
			<p><span>年龄：</span>27&nbsp;&nbsp;
				<span>粉丝：</span>797&nbsp;&nbsp;
				<span>关注：</span>9&nbsp;&nbsp;
				<span class="d_y"></span><span>导演</span>&nbsp;&nbsp;
				<span class="add"></span><span>北京</span>
			</p>
		</div>
	</section>
	<!--分类选项-->
	<section>
		<ul class="tit_li clearfix">
			<li class="active"><a href="javascript:;">作品</a></li>
			<li><a href="javascript:;">文章</a></li>
			<li><a href="javascript:;">喜欢</a></li>
			<li><a href="javascript:;">圈子</a></li>
			<li><a href="javascript:;">简介</a></li>
		</ul>
		<!--视频展示-->
		<div class="v_video">
			<div class="v_div clearfix">
				<span class="title">视频</span>
				<select class="v_s_li">
					<option>video</option>
				</select>
				<a class="v_more fr">更多>></a>
			</div>
			<div class="v_item_bk">
				<div class="v_cont">
					<img alt="" src="../../img/persion_center/images/other_works_1.jpg" />
					<p class="v_cont_info">纪录片 - 旅行</p>
				</div>
				<h2>SUMMER IN DUBAI!</h2>
				<div class="u_info clearfix">
					<span class="hd_pic"><img alt="" src="../../img/persion_center/v_item_1.png"></span>
					<span class="v_name">付彬彬</span>
					<span class="v_work">导演/摄影</span>
					<div class="v_show">播放   6740<span>|</span>喜欢   5 </div>
				</div>
			</div>
			<div class="v_item_bk">
				<div class="v_cont">
					<img alt="" src="../../img/persion_center/images/other_works_2.jpg" />
					<p class="v_cont_info">纪录片 - 旅行</p>
				</div>
				<h2>SUMMER IN DUBAI!</h2>
				<div class="u_info clearfix">
					<span class="hd_pic"><img alt="" src="../../img/persion_center/v_item_1.png"></span>
					<span class="v_name">付彬彬</span>
					<span class="v_work">导演/摄影</span>
					<div class="v_show">播放   6740<span>|</span>喜欢   5 </div>
				</div>
			</div>
			<div class="v_item_bk">
				<div class="v_cont">
					<img alt="" src="../../img/persion_center/images/other_works_3.jpg" />
					<p class="v_cont_info">纪录片 - 旅行</p>
				</div>
				<h2>SUMMER IN DUBAI!</h2>
				<div class="u_info clearfix">
					<span class="hd_pic"><img alt="" src="../../img/persion_center/v_item_1.png"></span>
					<span class="v_name">付彬彬</span>
					<span class="v_work">导演/摄影</span>
					<div class="v_show">播放   6740<span>|</span>喜欢   5 </div>
				</div>
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
			<img alt="" src="../../img/persion_center/images/other_works_04.jpg" class="m_pic"/>
			<h2>专访：姜博——年轻的偏执狂</h2>
			<p class="txt">从2007年  与“快男”比赛视觉制作至今，他先后多次挑起了“湖卫”选秀，跨年晚会, 张杰等人个人演唱会整体视觉呈现的重担...</p>
			<div class="clearfix au_info">
				<span class="hd_pic"><img alt="" src="../../img/persion_center/v_item_1.png"></span>
				<span class="hd_name">付彬彬</span>
			</div>
		</div>
		<div class="v_a_bk">
			<img alt="" src="../../img/persion_center/images/other_works_04.jpg" class="m_pic"/>
			<h2>旅行感悟《WHAT IS FREEDOM》</h2>
			<p class="txt">从2007年  与“快男”比赛视觉制作至今，他先后多次挑起了“湖卫”选秀，跨年晚会, 张杰等人个人演唱会整体视觉呈现的重担...</p>
			<div class="clearfix au_info">
				<span class="hd_pic"><img alt="" src="../../img/persion_center/v_item_1.png"></span>
				<span class="hd_name">付彬彬</span>
			</div>
		</div>
	</section>
</div>
</template>

<script>
    export default {
        name: "identity",
        data() {
            return {}
        },
        methods: {},
        mounted() {
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
	position: relative;
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
	background:url("../../../img/persion.png") left center no-repeat;
}
.p_info p span.add{
	padding-left: 0.3rem;
	background:url("../../../img/p_location.png") left center no-repeat;
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
	margin-bottom: 1rem;
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
	background:url("../../img/persion_center/comment.png") left center no-repeat;
	background-size: auto 0.22rem;
}
.tec_item .tec_op .icon_love{
	background:url("../../img/persion_center/love.png") left center no-repeat;
	background-size: auto 0.22rem;
}
.tec_item .tec_op .icon_send{
	background:url("../../img/persion_center/send.png") left center no-repeat;
	background-size: auto 0.22rem;
}
/*特殊*/
.l_operation{
	position: absolute;
	padding-right: 0.2rem;
	z-index: 1;
	right: 0;
}
.l_operation a{ 
	font-size: 0;
	display: block;
	height: 0.5rem;
	float: right;
	margin-left: 0.2rem;
}	
.l_operation .l_break{
	border: 1px solid #e1e1e1;
	border-radius: 0.06rem;
	width: 0.5rem;
	text-align: center;
	padding-top: 0.14rem;
}
.l_operation .l_break img{
	width: 0.22rem;
	height: 0.22rem;
}
.l_operation .l_btns{
	border: 1px solid #e1e1e1;
	border-radius: 0.06rem;
	width: 1.2rem;
	line-height: 0.48rem;
	text-align: center;
	font-size: 0.24rem;
	color: #7b7b7b;
}
.l_operation .l_btns.active{
	background-color: #ffbc22;
	color: #fff;
	border: 1px solid #ffbc22;
}
</style>
