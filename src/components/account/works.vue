<template>
  <div>
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
					<img alt="" src="~assets/persion_center/images/works_1.jpg" />
					<p class="v_cont_info">广告/宣传片 - 网络电影</p>
				</div>
				<h2>SUMMER IN DUBAI!</h2>
				<div class="u_info clearfix">
					<span class="v_work">片中职务:</span>
					<span class="v_name">导演</span>
					<div class="v_show">播放   6740<span>|</span>喜欢   5 </div>
				</div>
			</div>
			<div class="v_item_bk">
				<div class="v_cont">
					<img alt="" src="~assets/persion_center/images/works_2.jpg" />
					<p class="v_cont_info">广告/宣传片 - 网络电影</p>
				</div>
				<h2>SUMMER IN DUBAI!</h2>
				<div class="u_info clearfix">
					<span class="v_work">片中职务:</span>
					<span class="v_name">导演</span>
					<div class="v_show">播放   6740<span>|</span>喜欢   5 </div>
				</div>
			</div>
			<div class="v_item_bk">
				<div class="v_cont">
					<img alt="" src="~assets/persion_center/images/works_3.jpg" />
					<p class="v_cont_info">广告/宣传片 - 网络电影</p>
				</div>
				<h2>SUMMER IN DUBAI!</h2>
				<div class="u_info clearfix">
					<span class="v_work">片中职务:</span>
					<span class="v_name">导演</span>
					<div class="v_show">播放   6740<span>|</span>喜欢   5 </div>
				</div>
			</div>
			<div class="v_item_bk">
				<div class="v_cont">
					<img alt="" src="~assets/persion_center/images/works_4.jpg" />
					<p class="v_cont_info">广告/宣传片 - 网络电影</p>
				</div>
				<h2>SUMMER IN DUBAI!</h2>
				<div class="u_info clearfix">
					<span class="v_work">片中职务:</span>
					<span class="v_name">导演</span>
					<div class="v_show">播放   6740<span>|</span>喜欢   5 </div>
				</div>
			</div>
			<div class="v_item_bk">
				<div class="v_cont">
					<img alt="" src="~assets/persion_center/images/works_5.jpg" />
					<p class="v_cont_info">广告/宣传片 - 网络电影</p>
				</div>
				<h2>SUMMER IN DUBAI!</h2>
				<div class="u_info clearfix">
					<span class="v_work">片中职务:</span>
					<span class="v_name">导演</span>
					<div class="v_show">播放   6740<span>|</span>喜欢   5 </div>
				</div>
			</div>
		</div>
  </div>
</template>

<script>
    export default {
        name: "identity",
        data() {
          return {
          }
        },
        methods: {},
        mounted() {
        },
        computed:{
        	tit_li_active(){return '作品';}
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
	letter-spacing: 1px;
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
	font-size: 0.28rem;
	color: #1e2126;
	margin-right: 0.18rem;
}
.v_item_bk .u_info .v_work{
	float: left;
	font-size: 0.26rem;
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

</style>
