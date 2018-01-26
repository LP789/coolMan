<template>
  <div>
  	<section>
		<div class="tec_item active">
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
				<span class="icon_send">转发：123</span>
				<span class="icon_look">浏览：123</span>
			</p>
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
				<span class="icon_send">转发：123</span>
				<span class="icon_look">浏览：123</span>
			</p>
		</div>
		<div class="item_r_pic">
			<div class="r_item_cont">
				<img alt="" src="~assets/persion_center/images/c_item_5.jpg" class="r_item_pic">
				<h2>jacky</h2>
				<h3>2017-09-29</h3>
				<div class="tit">如何评价马云以及他的电影《功守道》？</div>
				<p class="txt">马云喜欢武术和投资电影已经众所周知了，马云是主演，身边阵容十分豪华，电影20分钟的网络电影，也就没有票房这东西了。</p>
				<a class="follow">关注</a>
			</div>
			<p class="tec_op">
				<span class="icon_comment">评论：123</span>
				<span class="icon_love">喜欢：123</span>
				<span class="icon_send">转发：123</span>
				<span class="icon_look">浏览：123</span>
			</p>
		</div>
	</section>
	<section>
		<ul class="paging">
			<li class="active"><a href="javascript:;">1</a></li>
			<li><a href="javascript:;">2</a></li>
			<li><a href="javascript:;">3</a></li>
		</ul>
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
	color: #333;
}	
.tit_li li{
	height: 0.7rem;
	line-height: 0.7rem;
	float: left;
	width: 16.6%;
	text-align: center;
}
.tit_li li a{
	display: block;
	color: #8e939b;
	font-size: 0.28rem;
}
.tit_li li.active a{
	color: #333;
}

/*技术交流*/

.tec_item{
	width: 7.5rem;
	padding: 0.5rem 0.2rem 0.36rem;
	background:#fff;
	margin-top: 0.6rem;
}
.tec_item.active{ box-shadow:0 0rem 0.32rem #cecece;}
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
}
.tec_item .tec_op span{
	padding-left: 0.32rem;
	display: inline-block;
	margin-right: 0.2rem;
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
.tec_item .tec_op .icon_look{
	background:url("~assets/persion_center/eye.png") left center no-repeat;
	background-size: auto 0.22rem;
	padding-left: 0.36rem;
	margin-right: 0;
}

/*图片在右*/
.item_r_pic{
	position: relative;
	padding: 0 0.2rem;
	margin-top: 0.38rem;
}
.item_r_pic .r_item_cont{
	position: relative;
	padding-left: 2.9rem;
	height: 2.35rem;
}
.item_r_pic .r_item_cont .r_item_pic{
	position: absolute;
	top: 0;
	left: 0;
	width: 2.64rem;
	height: 2.35rem;
}
.r_item_cont h2{
	font-size: 0.32rem;
	color: #484848;
	line-height: 0.32rem;
}
.r_item_cont h3{
	font-size: 0.24rem;
	color: #c4c4c4;
	line-height: 0.24rem;
	margin-top: 0.08rem;
}
.r_item_cont .tit{
	font-size: 0.28rem;
	color: #484848;
	overflow: hidden;
	width: 4.14rem;
	white-space: nowrap;
	text-overflow: ellipsis;
	margin-top: 0.32rem;
}
.r_item_cont .txt{
	font-size: 0.24rem;
	color: #a5a5a5;
	line-height: 0.32rem;
	margin-top: 0.06rem;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 3;
	overflow: hidden;
}
.r_item_cont .follow{
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
.item_r_pic .tec_op{
	margin-top: 0.4rem;
	font-size: 0;
}
.item_r_pic .tec_op span{
	padding-left: 0.32rem;
	display: inline-block;
	margin-right: 0.2rem;
	font-size: 0.24rem;
	color: #9b9b9b;
}
.item_r_pic .tec_op .icon_comment{
	background:url("~assets/persion_center/comment.png") left center no-repeat;
	background-size: auto 0.22rem;
}
.item_r_pic .tec_op .icon_love{
	background:url("~assets/persion_center/love.png") left center no-repeat;
	background-size: auto 0.22rem;
}
.item_r_pic .tec_op .icon_send{
	background:url("~assets/persion_center/send.png") left center no-repeat;
	background-size: auto 0.22rem;
}
.item_r_pic .tec_op .icon_look{
	background:url("~assets/persion_center/eye.png") left center no-repeat;
	background-size: auto 0.22rem;
	padding-left: 0.36rem;
	margin-right: 0;
}
.paging{
	text-align: center;
	margin: 1rem 0 0.6rem 0;
}
.paging li{
	display: inline-block;
	width: 0.6rem;
	height: 0.6rem;
	line-height: 0.6rem;
	text-align: center;
	margin-right: 0.1rem;
	font-size: 0;
}
.paging li a{
	color: #333;
	display: inline-block;
	height: 100%;
	width: 100%;
	font-size: 0.32rem;
}
.paging li.active{
	background: #ffbc22;
}
.paging li.active a{
	color: #fff;
}
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
