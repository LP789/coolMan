<template>
  <div>
    <div class="vux-demo">
      <img class="logo" src="~assets/vux_logo.png">
      <h1> </h1>
    </div>
    <group title="cell demo">
      <cell title="Login" value="Login" is-link link="/login"></cell>
      <cell title="Register" value="Register" is-link link="/register"></cell>
      <cell title="ArticleIndex" value="ArticleIndex" is-link link="/article/index"></cell>
      <cell title="ArticleDetail" value="ArticleDetail" is-link link="/article/detail"></cell>
      <cell title="AnswerIndex" value="AnswerIndex" is-link link="/answer/index"></cell>
      <cell title="AnswerDetail" value="AnswerDetail" is-link link="/answer/detail"></cell>
      <cell title="AnswerPublish" value="AnswerPublish" is-link link="/answer/publish"></cell>
      <cell title="SkillPublish" value="SkillPublish" is-link link="/skill/publish"></cell>
      <cell title="SkillList" value="SkillList" is-link link="/skill/list"></cell>
      <cell title="SkillDetail" value="SkillDetail" is-link link="/skill/detail/1"></cell>
      <cell title="SkillComment" value="SkillComment" is-link link="/skill/comment"></cell>

    </group>

  </div>
</template>

<script>
import { Group, Cell } from 'vux'

export default {
  components: {
    Group,
    Cell
  },
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!'
    }
  }
}
</script>

<style>
.vux-demo {
  text-align: center;
}
.logo {
  width: 100px;
  height: 100px
}
</style>
