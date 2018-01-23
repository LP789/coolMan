<template>
  <div id="app" class="mainDiv">
    <div class="z2">
    <Hd></Hd>
    <setHd v-show="false"></setHd>
    <router-view style="margin-top:0.9rem"></router-view>
    <Ft v-show="ftShow"></Ft>
    </div>
  <!--回到顶部-->
  <a href="#" v-show="backtop" class="break_top_a">
    <div class="break_top">
      <img alt="" src="~assets/community/back_top.png" />
      <p>返回顶部</p>
    </div>
  </a>
  </div>
</template>

<script>
export default {
  name: 'app',
  computed:{
    ftShow(){
      console.log("Ft标签", this.$route)
      if(this.$route.fullPath=="/register" || this.$route.fullPath=="/login"){
        return false;
      }
      return true;
    },
    backtop(){
      
      return true;
    }
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
ul,dl,ol,li {
  list-style: none;
}
body {

  font-size:0.12rem;
  font-family: "PingFang SC Regular","Microsoft Yahei","微软雅黑","宋体";

}
html, body,#app {
  min-height:100%;
  width:100%;

}
.mt46{ margin-top: 0.46rem; }
p {
  padding:0.06rem 0;
}
h1,h2,h3,h4 {
  font-weight: normal;
}
#app {
  height:100%;
  width:100%;
  background: #E8E8E8;
  color: #1C1C1C;
}
  .textCenter {
    text-align: center;
  }
.bd-t{
  position:relative;
  margin-bottom:0.04rem;
}



.bd-t::after {
  content: " ";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 1px;
  background-image: linear-gradient(0deg, transparent 50%, #E6E6E6 50%);
}
</style>
<style>
/* 初始化css */

h1, h2, h3, h4, h5, h6 { font-weight: normal; }
textarea { resize: none; }
input[type=button],input[type=submit]{cursor: pointer;}
input[type=button] { -webkit-appearance: none; outline: none }
input::-webkit-input-placeholder { color: #B5B5B5; }
textarea::-webkit-input-placeholder { color: #B5B5B5; }
table { border-collapse: collapse; border-spacing: 0 }
th { text-align: inherit; }
fieldset, img { border: 0 none; }
/*img{vertical-align: middle;}*/
abbr, acronym { border: none; font-variant: normal;}
del { text-decoration: line-through; }
hr{border:0;height:1px; background-color: #D9D9D9;}
ul, li, ol { list-style: none; }
input, textarea, select { font-family: inherit; font-size: inherit; font-weight: inherit }
button, input { border: 0;background: 0;outline: 0 }
a {-webkit-touch-callout: none; text-decoration: none; color: #666666; outline: 0; cursor: pointer;}
a:hover{ text-decoration: none; }
a:focus, *:focus { outline: none; }
em, i { font-style: normal }
label {cursor:pointer;}
*{-webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box; -ms-word-break:break-all;word-break:break-all;-ms-word-wrap:break-word;word-wrap:break-word;/* -webkit-tap-highlight-color:rgba(0,0,0,0); */}
.clearfix:before, .clearfix:after { content: ""; display: table; }
.clearfix:after { clear: both; overflow: hidden; }
.clearfix { zoom: 1; }
.clear{ clear: both; display: block; font-size: 0; height: 0; line-height: 0; overflow: hidden; }

/*====================== mouse =======================*/
.cp{cursor: pointer;}
.cd{cursor: default;}
.cna{cursor: not-allowed;}

/*====================== position =======================*/
.tl{text-align:left;}
.tc{text-align:center;}
.tr{text-align:right;}
.bc{margin-left:auto; margin-right: auto;}
.fl{float:left;}
.fr{float:right;}
.cb{clear:both;}
.cl{clear:left;}
.cr{clear:right;}
.vt{vertical-align:top;}
.vm{vertical-align:middle;}
.vb{vertical-align:bottom;}
.pr{position:relative;}
.pa{position:absolute;}
.abs-left{position:absolute;right:0}
.abs-right{position:absolute;right:0}
.abs-top{position:absolute;top:0}
.abs-bottom{position:absolute;bottom:0}
.abs-lt{position:absolute;left:0;top:0;}
.abs-lb{position:absolute;left:0;bottom:0}
.abs-rt{position:absolute;right:0;top:0}
.abs-rb{position:absolute;right:0;bottom:0}
.zoom{zoom:1;}
.hidden{visibility:hidden;}
.none{display:none;}
.ib{display: inline-block;}
.inline{display: inline;}
.block{display: block;}
.dib{display: inline-block;}

.mainDiv{
  max-width: 750px;
  margin: 0 auto;
}
/*返回顶部*/
.icontainer {
  height: 100%;
  width: 100%;
  max-width: 7.5rem;
  position: fixed;
}
.z2{
  position: relative;
  z-index: 2;
}
.break_top_a{
  position: fixed;
  width: 100%;
  height: 100%;
  max-width: 750px;
  top: 0;
  z-index: 0;
}
.break_top{
  position: absolute;
  top:80%;
  width: 1rem;
  bottom: 2rem;
  right: 0.2rem;
  text-align: center;
  font-size: 0;
  z-index: 9999;
}
.break_top img{
  width: 0.62rem;
  height: 0.62rem;
}
.break_top p{
  font-size: 0.24rem;
  margin: 0.2rem;
  color: #a7a7a7;
  width: .6rem;
  padding: 0;
}
</style>
