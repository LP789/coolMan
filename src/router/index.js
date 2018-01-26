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
import CommunityIndex from '@/components/community/index'
import SkillList from '@/components/skill/list'
import SkillDetail from '@/components/skill/detail'
import SkillComment from '@/components/skill/comment'
import SkillPublish from '@/components/skill/publish'
import Index from '@/components/index'
//个人信息
import Identity from '@/components/account/identity'
import Person from '@/components/account/person'
import Workupload from '@/components/account/workupload'
// 个人中心
import Account from '@/components/account/account'
import AccountWorks from '@/components/account/works'
import AccountArticle from '@/components/account/article'
import AccountLove from '@/components/account/love'
import AccountCircle from '@/components/account/circle'
import AccountSelf from '@/components/account/self'
import AccountAbout from '@/components/account/about'



let subPath = ''
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: subPath + '/',
      name: 'Indexx',
      component: Index
    }, {
      path: subPath + '/index',
      name: 'Index',
      component: Index
    }, {
      path: subPath + '/login',
      name: 'Login',
      component: Login
    }, {
      path: subPath + '/register',
      name: 'Register',
      component: Register
    }, {
      path: subPath + '/article/index',
      name: 'ArticleIndex',
      component: ArticleIndex
    }, {
      path: subPath + '/article/detail/:id',
      name: 'ArticleDetail',
      component: ArticleDetail
    }, {
      path: subPath + '/answer/detail/:id',
      name: 'AnswerDetail',
      component: AnswerDetail
    }, {
      path: subPath + '/answer/index',
      name: 'AnswerIndex',
      component: AnswerIndex
    }, {
      path: subPath + '/answer/publish',
      name: 'AnswerPublish',
      component: AnswerPublish
    }, {
      path: subPath + '/community/index',
      name: 'CommunityIndex',
      component: CommunityIndex
    }, {
      path: subPath + '/skill/publish',
      name: 'SkillPublish',
      component: SkillPublish
    }, {
      path: subPath + '/skill/list',
      name: 'SkillList',
      component: SkillList
    }, {
      path: subPath + '/skill/detail/:id',
      name: 'SkillDetail',
      component: SkillDetail
    }, {
      path: subPath + '/skill/comment',
      name: 'SkillComment',
      component: SkillComment
    }, {
      path: subPath + '/account/identity',
      name: 'AccountIdentity',
      component: Identity
    }, {
      path: subPath + '/account/person',
      name: 'AccountPerson',
      component: Person
    }, {
      path: subPath + '/account/workupload',
      name: 'AccountWorkupload',
      component: Workupload
    }, {
      path: subPath + '/account',
      name: 'Account',
      component: Account,
      children: [{
        path: '',
        name: 'AccountWorks',
        component: AccountWorks
      }, {
        path: 'works',
        name: 'AccountWorks',
        component: AccountWorks
      }, {
        path: 'article',
        name: 'AccountArticle',
        component: AccountArticle
      }, {
        path: 'love',
        name: 'AccountLove',
        component: AccountLove
      }, {
        path: 'circle',
        name: 'AccountCircle',
        component: AccountCircle
      }, {
        path: 'self',
        name: 'AccountSelf',
        component: AccountSelf
      }, {
        path: 'about',
        name: 'AccountAbout',
        component: AccountAbout
      }, ]
    }


  ]
})