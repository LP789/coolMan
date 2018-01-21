import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import HelloWorld from '@/components/HelloFromVux'
import Login from '@/components/login/index'
import Register from '@/components/register/index'
import ArticleIndex from '@/components/article/index'
import ArticleDetail from '@/components/article/detail'
import AnswerDetail from '@/components/answer/detail'
import AnswerIndex from '@/components/answer/index'
import AnswerPublish from '@/components/answer/publish'
import SkillList from '@/components/skill/list'
import SkillDetail from '@/components/skill/detail'
import SkillComment from '@/components/skill/comment'
import SkillPublish from '@/components/skill/publish'
import Index from '@/components/index'



let subPath = ''
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: subPath + '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: subPath + '/index',
      name: 'Index',
      component: Index
    },
    {
      path: subPath + '/login',
      name: 'Login',
      component: Login
    },
    {
      path: subPath + '/register',
      name: 'Register',
      component: Register
    },
    {
      path: subPath + '/article/index',
      name: 'ArticleIndex',
      component: ArticleIndex
    },
    {
      path: subPath + '/article/detail/:id',
      name: 'ArticleDetail',
      component: ArticleDetail
    },
    {
      path: subPath + '/answer/detail/:id',
      name: 'AnswerDetail',
      component: AnswerDetail
    },
    {
      path: subPath + '/answer/index',
      name: 'AnswerIndex',
      component: AnswerIndex
    },
    {
      path: subPath + '/answer/publish',
      name: 'AnswerPublish',
      component: AnswerPublish
    },
    {
      path: subPath + '/skill/publish',
      name: 'SkillPublish',
      component: SkillPublish
    },
    {
      path: subPath + '/skill/list',
      name: 'SkillList',
      component: SkillList
    },
    {
      path: subPath + '/skill/detail/:id',
      name: 'SkillDetail',
      component: SkillDetail
    },
    {
      path: subPath + '/skill/comment',
      name: 'SkillComment',
      component: SkillComment
    },


  ]
})
