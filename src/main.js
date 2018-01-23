// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router/index'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import 'normalize.css'
import JsBridge from './commonJs/jsBridge'
Vue.use(JsBridge)
import VueScroller from 'vue-scroller'
Vue.use(VueScroller)
//import Home from './components/HelloFromVux'
import Hd from '@/components/template/Hd.vue'
import setHd from '@/components/template/setHd.vue'
import Ft from '@/components/template/Ft.vue'

import {
	ToastPlugin,
	ConfirmPlugin,
	LoadingPlugin,
	Flexbox,
	FlexboxItem,
} from 'vux'
Vue.use(ToastPlugin)
Vue.use(ConfirmPlugin)
Vue.use(LoadingPlugin)

Vue.use(VueRouter)

/*const routes = [{
  path: '/',
  component: Home
}]*/

/*const router = new VueRouter({
  routes
})*/
const components = {
	Hd,
	setHd,
	Ft,
	Flexbox,
	FlexboxItem,
}
Object.keys(components).forEach(key => Vue.component(key, components[key]))

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	router,
	render: h => h(App),

}).$mount('#app-box')