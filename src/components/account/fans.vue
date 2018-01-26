<template>
<div>
  <!--弹出框-->
	<div class="f_layer"></div>
	<div class="f_model">
		<div class="f_head">
			<span class="tit">79个粉丝</span>
			<span class="flow">关注了9个人</span>
			<div class="close">x</div>
		</div>
		<ul class="person_item">
			<li>
				<img alt="" src="~assets/ask_answer/a_hd_pic_1.jpg" class="pic">
				<p class="name">Cherish</p>
				<p class="f_num">粉丝:26<span>|</span>关注:89</p>
				<p class="work">影视制片人  <span>|</span>摄影师<span>|<span>导演</p>
				<a href="javascript:;" class="follow_btn">+关注</a>
			</li>
			<li>
				<img alt="" src="~assets/ask_answer/a_hd_pic_1.jpg" class="pic">
				<p class="name">Cherish</p>
				<p class="f_num">粉丝:26<span>|</span>关注:89</p>
				<p class="work">影视制片人  <span>|</span>摄影师<span>|<span>导演</p>
				<a href="javascript:;" class="follow_btn">+关注</a>
			</li>
			<li>
				<img alt="" src="~assets/ask_answer/a_hd_pic_1.jpg" class="pic">
				<p class="name">Cherish</p>
				<p class="f_num">粉丝:26<span>|</span>关注:89</p>
				<p class="work">影视制片人  <span>|</span>摄影师<span>|<span>导演</p>
				<a href="javascript:;" class="follow_btn">+关注</a>
			</li>
			<li>
				<img alt="" src="~assets/ask_answer/a_hd_pic_1.jpg" class="pic">
				<p class="name">Cherish</p>
				<p class="f_num">粉丝:26<span>|</span>关注:89</p>
				<p class="work">影视制片人  <span>|</span>摄影师<span>|<span>导演</p>
				<a href="javascript:;" class="follow_btn">+关注</a>
			</li>
		</ul>
		<div class="more_btn">加载更多>></div>
	</div>
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
/*粉丝弹框*/
::-webkit-scrollbar{
    width: 0px;
    height: 0px;
    background-color: rgba(0,0,0,0);
}
::-webkit-scrollbar-track{
    background-color: rgba(0,0,0,0);
}
::-webkit-scrollbar-thumb{
    background-color: rgba(0,0,0,0);
}
.f_layer{
	position: fixed;
	top: 0;
	/*left: 0;*/
	z-index: 500;
	background-color: rgba(0,0,0,0.5);
	width: 7.5rem;
	height: 100%;
}
.f_model{
	position: fixed;
	top: 0;
	/*left: 0;*/
	bottom: 0;
	margin: auto;
	z-index: 501;
	background-color: #fff;
	width: 7.5rem;
	max-height: 8.04rem;
}
.f_head{
	height:0.82rem;
	line-height: 0.82rem;
	font-size: 0.32rem;
	color: #9b9b9b;
	border-bottom: 1px solid #e1e1e1;
	padding: 0 0.2rem;
}
.f_head .tit{
	color: #2c2c2c;
	padding-right: 0.3rem;
	border-right: 1px solid #e1e1e1;
}
.f_head .flow{
	color: #9b9b9b;
	padding-left: 0.3rem;
}
.f_head .close{
	font-size: 0.4rem;
	position: absolute;
	top: 0.16rem;
	right: 0.2rem;
	width: 0.5rem;
	height: 0.5rem;
	line-height: 0.5rem;
	text-align: center;
	color: #000000;
	
}
.person_item{
	height: 6rem;
	overflow-x: hidden;
	overflow-y: auto;
	padding: 0 0.2rem;
}
.person_item li{
	position: relative;
	padding: 0.4rem 0 0.38rem 1.2rem;
	border-bottom: 1px solid #e1e1e1;
}
.person_item li .pic{
	position: absolute;
	width: 1rem;
	height: 1rem;
	top: 0.4rem;
	left: 0;
	border-radius: 50%;
}
.person_item li .name{
	font-size: 0.28rem;
	color: #4c4e5b;
	line-height: 0.28rem;
}
.person_item li .f_num{
	font-size: 0.24rem;
	color: #c4c4c4;
	margin-top: 0.08rem;
	line-height: 0.24rem;
}
.person_item li .work{
	font-size: 0.24rem;
	color: #999797;
	margin-top: 0.08rem;
	line-height: 0.24rem;
}
.person_item li .f_num span,.person_item li .work span{
	padding: 0 0.2rem;
}
.person_item li .follow_btn{
	position: absolute;
	display: block;
	top: 0.76rem;
	right: 0;
	width: 1rem;
	height: 0.46rem;
	color: #8f8f8e;
	text-align: center;
	line-height: 0.42rem;
	border: 1px solid #e1e1e1;
	font-size: 0.24rem;
}
.f_model .more_btn{
	font-size: 0.24rem;
	color: #a8a8a8;
	height: 1.22rem;
	line-height: 1.22rem;
	text-align: center;
	letter-spacing: 1px;
}
</style>
