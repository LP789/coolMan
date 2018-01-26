<template>
<div>
  <!--视频-->
	<section class="v_d_apply">
		<div class="video_cont">
			<img alt="" src="~assets/video_detail.jpg" />
		</div>
	</section>
	<!--头部简介-->
	<section class="J_detail">
		<div class="v_detail">
			<h2>不如我们从头开始</h2>
			<p class="work">剧情短片 - 爱情 <span>|</span> 08-17 16:17 </p>
			<div class="show_num">
				<span class="apply"><img alt="" src="~assets/arrws.png">123456</span>
				<span class="love"><img alt="" src="~assets/love_heat.png">12456</span>
			</div>
			<a href="javascript:;" class="love_btn">喜欢</a>
			<a href="javascript:;" class="break_btn">
				<img alt="" src="~assets/persion_center/break.png">
			</a>
		</div>
		<!--简介-->
		<div class="v_jj">
			<h2>简介</h2>
			<p>失恋的时候，心情幻化为诗，化为流浪，化为电影里每一个忧郁的女主。 将所有的无奈心酸，都埋在矜持与逞强里，摇摇欲坠，撑起一个脆弱的壳。 没关系，我没事，我很好，对于你的离开，我絮絮叨叨，我哭哭啼啼，我落魄失意又阳光明媚。。。 </p>
		</div>
	</section>
	
	
	<!--评论内容-->
	<section class="comment_txt">
		<div class="c_txt_li">
			<h2 class="clearfix">交流<span>(28)</span></h2>
			<div class="c_t_item clearfix">
				<img alt="" src="~assets/technical/product_hd_1.png" class="c_t_p">
				<div class="in_comment">
					<textarea placeholder="请输入回答内容"></textarea>
				</div>
				<a href="javascript:;" class="push_btn">发表评论</a>
			</div>
			<div class="c_replay_item">
				<img alt="" src="~assets/technical/product_hd_1.png" class="c_t_p">
				<h2>
					<span class="u_name">Dier拖儿</span>
					<span class="u_time"> 09-27 16:01</span>
				</h2>
				<p>音乐很棒，但是很奇怪就是进入不了那个情绪，感觉影像</p>
				<div class="c_option">
					回复<span>|</span>赞(0)
				</div>
			</div>
			<div class="c_replay_item">
				<img alt="" src="~assets/technical/product_hd_1.png" class="c_t_p">
				<h2>
					<span class="u_name">壤果</span>
					<span class="u_time"> 09-27 16:01</span>
				</h2>
				<p>用1dx拍的哪方面的镜头呀 夜晚的log模式怎么控制噪点的呢 真的好强 你的作品从上次的动机记忆到迪拜 还有这个 每一步都是很大的进步啊!</p>
				<div class="c_option">
					<span>回复</span>|<span>赞(0)</span>
				</div>
			</div>
			<div class="c_replay_item">
				<img alt="" src="~assets/technical/product_hd_1.png" class="c_t_p">
				<h2>
					<span class="u_name">A-WEI </span>
					<span class="u_time"> 09-27 16:01</span>
				</h2>
				<p class="songti">节奏很不错 学习</p>
				<div class="c_option">
					<span>回复</span>|<span>赞(0)</span>
				</div>
			</div>
		</div>
	</section>
	<!--本编制作人-->
	<section class="create_per">
		<h2>本片创作人 <span>2</span></h2>
		<div class="v_c_p_bk">
			<div class="c_p_pic"><img alt="" src="~assets/set_head.png"></div>
			<p class="name">华胜辉</p>
			<p class="jobs">摄影/剪辑</p>
			<a href="javascript:;" class="v_follow">关注</a>
		</div>
		<div class="v_c_p_bk">
			<div class="c_p_pic"><img alt="" src="~assets/set_head.png"></div>
			<p class="name">华胜辉</p>
			<p class="jobs">摄影/剪辑</p>
			<a href="javascript:;" class="v_follow">关注</a>
		</div>
	</section>
	<!--其他创作作品-->
	<section class="v_other_w">
		<h2>创作人的其他作品 <span class="v_more">更多</span></h2>
		<div class="v_o_bk">
			<img alt="" src="~assets/persion_center/v_o_pic.jpg" class="v_o_pic"/>
			<h3>Memories of TOKYO</h3>
			<h4>纪录片 - 旅行</h4>
		</div>
		<div class="v_o_bk">
			<img alt="" src="~assets/persion_center/v_o_pic.jpg" class="v_o_pic"/>
			<h3>SUMMER IN DUBAI!</h3>
			<h4>纪录片 - 旅行</h4>
		</div>
		<div class="v_getMore">
			<a href="javascript:;">加载更多></a>
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
.video_cont{
	width: 7.5rem;
	height: 5.06rem;	
	box-shadow:0 0.1rem 0.24rem rgba(54,67,72,0.44);
}
.video_cont img{
	width: 100%;
	height: 100%;
	
}
/*头部信息*/
.J_detail{padding:0 0.2rem;}
.v_detail{
	position: relative;
	margin-top: 0.48rem;
	position: relative;
	border-bottom: 1px solid #e1e1e1;
	padding-bottom: 0.38rem;
}
.v_detail h2{
	font-size: 0.36rem;
	color: #1e2525;
	line-height: 0.36rem;
}
.v_detail .work{
	font-size: 0.28rem;
	color: #c5c5c5;
	line-height: 0.28rem;
	margin-top: 0.2rem;
}
.v_detail .show_num{
	font-size: 0.28rem;
	color: #c5c5c5;
	line-height: 0.28rem;
	margin-top: 0.3rem;
}
.v_detail .show_num span{
	position: relative;
	padding-left: 0.28rem;
	margin-right: 0.26rem;
}
.v_detail .show_num .apply img{
	position: absolute;
	top: 0.1rem;
	left: 0;
	width: 0.13rem;
	height: 0.15rem;
}
.v_detail .show_num .love img{
	position: absolute;
	top: 0.12rem;
	left: 0;
	width: 0.18rem;
	height: 0.15rem;
}
.v_detail .love_btn{
	position: absolute;
	top:0;
	right: 0.2rem;
	width: 1rem;
	height: 0.43rem;
	line-height: 0.43rem;
	text-align: center;
	font-size: 0.24rem;
	color: #fff;
	background-color: #ffbc22;
}
.v_detail .break_btn{
	position: absolute;
	top:0;
	right: 1.4rem;
	width: 0.43rem;
	height: 0.43rem;
	border: 1px solid #e1e1e1;
	text-align: center;
	font-size: 0;
}
.v_detail .break_btn img{
	width: 0.22rem;
	height: 0.22rem;
	margin-top: 0.12rem;
}
.v_jj{ 

	padding-bottom:0.36rem;
	border-bottom: 1px solid #e1e1e1;
}
.v_jj h2{
	font-size: 0.32rem;
	padding: 0.26rem 0;
	line-height: 0.32rem;
	color: #313131;
}
.v_jj p{
	font-size: 0.24rem;
	line-height: 0.32rem;
	color: #b7b7b7;
}
/*评论*/
.comment_txt{
	padding:0.68rem 0.2rem 0 0.2rem;
}
.c_txt_li h2{
	font-size: 0.32rem;
	color: #1e2525;
}
.c_t_item .push_btn{
	display: block;
	float: right;
	border-radius: 0.06rem;
	height: 0.52rem;
	line-height: 0.52rem;
	font-size: 0.24rem;
	padding: 0 0.22rem;
	color: #fff;
	background-color: #ffbc22;
	margin-top: 0.2rem;
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
	padding-bottom: 0.5rem;
	border-bottom: 1px solid #e1e1e1;
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
/*本片制作人*/
.create_per{
	padding: 0.3rem 0.2rem 0.2rem;
	box-shadow: 0 0.1rem 0.32rem rgba(196,196,196,0.23);
}
.create_per h2{
	font-size: 0.36rem;
	color: #2d2b2b;
	padding-bottom: 0.46rem;
}
.create_per h2 span{
	font-size: 0.24rem;
	color: #949494;
}
.v_c_p_bk{
	padding-left: 1.56rem;
	position: relative;
	min-height: 0.9rem;
	margin-bottom: 0.5rem;
}
.v_c_p_bk .c_p_pic{
	position: absolute;
	top: 0;
	left: 0.2rem;
	width: 0.9rem;
	height: 0.9rem;
	border-radius: 50%;
	overflow: hidden;
	background: #e1e1e1;
}
.v_c_p_bk .c_p_pic img{
	width: 100%;
	height: 100%;
}
.v_c_p_bk .name{
	font-size: 0.32rem;
	color: #312c2c;
	line-height: 0.36rem;
}
.v_c_p_bk .jobs{
	font-size: 0.24rem;
	line-height: 0.24rem;
	margin-top: 0.2rem;
	color: #a0a0a0;
}
.v_c_p_bk .v_follow{
	position: absolute;
	right: 0;
	top: 0.24rem;
	width: 1rem;
	height: 0.5rem;
	line-height: 0.5rem;
	text-align: center;
	background: #ffbc22;
	font-size: 0.26rem;
	color: #fff;
}
/*创作人的其他作品*/
.v_other_w{
	padding: 0.5rem 0.2rem 0;
	padding-top: 0.5rem;
}
.v_other_w h2{
	color: #2d2b2b;
	line-height: 0.42rem;
	font-size: 0.42rem;
}
.v_other_w .v_more{
	float: right;
	margin-top: 0.1rem;
	font-size: 0.3rem;
	line-height: 0.3rem;
}
.v_o_bk{
	margin-top: 0.46rem;
	position: relative;
	padding-left: 4.34rem;
	height: 2.24rem;
}
.v_o_bk .v_o_pic{
	position: absolute;
	top: 0;
	left: 0;
	width: 3.8rem;
	height:2.24rem;
}
.v_o_bk h3{
	font-size: 0.32rem;
	color: #2d2b2b;
	padding-top: 0.62rem;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 2;
	overflow: hidden;
}
.v_o_bk h4{
	font-size: 0.32rem;
	color: #aaa;
	margin-top: 0.2rem;
}
.v_getMore{
	font-size: 0.24rem;
	color: #999;
	height: 1.6rem;
	line-height: 1.6rem;
	text-align: center;
}
</style>
