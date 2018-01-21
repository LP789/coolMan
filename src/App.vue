<template>
  <div id="app">
    <Hd v-show="false"></Hd>
    <setHd></setHd>
    <router-view style="margin-top:0.9rem"></router-view>
    <Ft></Ft>
  </div>
</template>

<script>
export default {
  name: 'app'
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
