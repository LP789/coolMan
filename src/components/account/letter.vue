<template>
<div>
  <section class="p_c_banner">
		<img alt="" src="~assets/persion_center/images/p_c_banner1.jpg"/>
	</section>
	<!--输入评论内容-->
	<section class="l_input">
		<div class="l_operation clearfix">
			<a href="javascript:;" class="l_btns">+关注</a>
			<a href="javascript:;" class="l_btns active">私信</a>
			<a href="javascript:;" class="l_break"><img alt="" src="~assets/persion_center/break.png"></a>
		</div>
		<div class="l_input_txt clearfix">
			<textarea placeholder="请输入聊天内容......"></textarea>
			<a href="javascropt:;" class="l_send">发送</a>
		</div>
	</section>
	<!--评论内容-->
	<section class="l_cont_li">
		<div class="l_left_bk">
			<img alt="" src="~assets/persion_center/yi.png"  class="hd"/>
			<div class="txt">
				<i class="l_arr"></i>
				<h2>彭宥纶<span>2017年10月12</span><span>09:37</span></h2>
				<p>谢谢欣赏，不过你过奖了，我也还在学习当中，有什么不懂的我们可以互相学习，一起交流。</p>
			</div>
		</div>
		<div class="l_right_bk">
			<img alt="" src="~assets/persion_center/yi.png"  class="hd"/>
			<div class="txt">
				<i class="l_arr"></i>
				<h2>彭宥纶<span>2017年10月12</span><span>09:37</span></h2>
				<p>谢谢欣赏，不过你过奖了，我也还在学习当中，有什么不懂的我们可以互相学习，一起交流。</p>
			</div>
		</div>
		<div class="l_left_bk">
			<img alt="" src="~assets/persion_center/yi.png"  class="hd"/>
			<div class="txt">
				<i class="l_arr"></i>
				<h2>彭宥纶<span>2017年10月12</span><span>09:37</span></h2>
				<p>谢谢欣赏，不过你过奖了，我也还在学习当中，有什么不懂的我们可以互相学习，一起交流。</p>
			</div>
		</div>
		<div class="l_right_bk">
			<img alt="" src="~assets/persion_center/yi.png"  class="hd"/>
			<div class="txt">
				<i class="l_arr"></i>
				<h2>彭宥纶<span>2017年10月12</span><span>09:37</span></h2>
				<p>谢谢欣赏，不过你过奖了，我也还在学习当中，有什么不懂的我们可以互相学习，一起交流。</p>
			</div>
		</div>
		<a href="javascript:;" class="l_add_more">加载更多></a>
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
        	tit_li_active(){return '与我相关';}
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
.l_operation{ padding: 0.4rem 0.2rem;}
.l_operation a{ 
	font-size: 0;
	display: block;
	height: 0.5rem;
	float: right;
	margin-left: 0.4rem;
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
	width: 1.4rem;
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
.l_input_txt{
	margin-top: 0.3rem;
	padding: 0 0.2rem 0.4rem;
}
.l_input_txt textarea{
	width: 100%;
	height: 2rem;
	padding: 0.08rem;
	font-size: 0.32rem;
	border: 1px solid #e1e1e1;
}
.l_input_txt .l_send{
	height: 0.5rem;
	font-size: 0.24rem;
	color: #fff;
	line-height: 0.5rem;
	text-align: center;
	width: 1.4rem;
	background-color: #ffbc22;
	display: block;
	float: right;
	margin-top: 0.2rem;
}
.l_cont_li{
	padding: 0 0.2rem;
}
.l_left_bk{
	padding-left: 1.16rem;
	position: relative;
	margin-top: 0.5rem;
}
.l_left_bk .hd{
	position: absolute;
	top: 0;
	left: 0;
	width: 0.8rem;
	height: 0.8rem;
	border-radius: 50%;
}
.l_left_bk .hd img,.l_right_bk .hd img{ width: 100%; height: 100%;}
.l_left_bk .txt .l_arr{
	display: block;
	position: absolute;
	top: 0.22rem;
	left: 0.8rem;
	width: 0.4rem;
	height: 0.2rem;
	border-top:0.1rem solid #fef7e6;
	border-right: 0.2rem solid #fef7e6;
	border-left: 0.2rem solid transparent;
	border-bottom: 0.1rem solid transparent;
}
.l_left_bk .txt,.l_right_bk .txt{
	background-color: #fef7e6;
	padding: 0.2rem;
	border-radius: 0.06rem;
}
.l_left_bk .txt h2,.l_right_bk .txt h2{
	font-size: 0.32rem;
	line-height: 0.32rem;
	color: #333;
}
.l_left_bk .txt h2 span,.l_right_bk .txt h2 span{
	font-size: 0.24rem;
	color: #666;
	margin-left: 0.16rem;
}
.l_left_bk .txt p,.l_right_bk .txt p{
	font-size: 0.24rem;
	color: #1e2126;
	line-height: 0.32rem;
	margin-top: 0.16rem;
	letter-spacing: 1px;
}
.l_right_bk{
	padding-right: 1.16rem;
	position: relative;
	margin-top: 0.5rem;
}
.l_right_bk .hd{
	position: absolute;
	top: 0;
	right: 0;
	width: 0.8rem;
	height: 0.8rem;
	border-radius: 50%;
}
.l_right_bk .txt{
	background-color: #cdebf7;
}
.l_right_bk .txt .l_arr{
	display: block;
	position: absolute;
	top: 0.22rem;
	right: 0.8rem;
	width: 0.4rem;
	height: 0.2rem;
	border-top:0.1rem solid #cdebf7;
	border-left: 0.2rem solid #cdebf7;
	border-right: 0.2rem solid transparent;
	border-bottom: 0.1rem solid transparent;
}
.l_add_more{
	font-size: 0.24rem;
	color: #666;
	display: block;
	margin: 0.8rem auto;
	width: 2rem;
	text-align: center;
}
</style>
