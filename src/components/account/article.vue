<template>
<div>
	<!--分类选项-->
	<section>
		<div class="a_cont">
			<div class="a_item_bk">
				<img class="a_item_pic" alt="" src="~assets/persion_center/images/a_center_1.jpg"/>
				<h2 class="a_tit">专访：姜博——年轻的偏执狂</h2>
				<p class="a_txt">
					熟悉“芒果台”的人或多或少都对“彭宥纶”这个名字有所耳闻。从2007年参与“快男”比赛视觉制作至今。。。
				</p>
			</div>
			<div class="a_item_bk">
				<img class="a_item_pic" alt="" src="~assets/persion_center/images/a_item_2.jpg"/>
				<h2 class="a_tit">行摄雪山 -2017</h2>
				<p class="a_txt">
					熟悉“芒果台”的人或多或少都对“彭宥纶”这个名字有所耳闻。从2007年参与“快男”比赛视觉制作至今。。。
				</p>
			</div>
			<div class="a_item_bk">
				<img class="a_item_pic" alt="" src="~assets/persion_center/images/a_item_3.jpg"/>
				<h2 class="a_tit">夜色美景 -2016</h2>
				<p class="a_txt">
					熟悉“芒果台”的人或多或少都对“彭宥纶”这个名字有所耳闻。从2007年参与“快男”比赛视觉制作至今。。。
				</p>
			</div>
			<a href="javascript:;" class="load_more">加载更多</a>
		</div>
	</section>
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
        	tit_li_active(){return '文章';}
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
.a_item_bk{
	position: relative;
	margin: 0.58rem 0;
	padding-left: 3.64rem;
	height: 2.9rem;
}
.a_item_bk .a_item_pic{
	position: absolute;
	top: 0;
	left: 0;
	width: 3.4rem;
	height: 2.9rem;
}
.a_item_bk .a_tit{
	padding-top: 0.2rem;
	height: 1.12rem;
	font-size: 0.32rem;
	color: #3a3d43;
	padding-right: 0.2rem;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 2;
	overflow: hidden;
}
.a_item_bk .a_txt{
	font-size: 0.24rem;
	color: #a3a5a8;
	line-height: 0.42rem;
	height: 1.2rem;
	padding-right: 0.2rem;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 3;
	overflow: hidden;
}
.load_more{
	margin: 0.8rem auto 0 auto;
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
</style>
