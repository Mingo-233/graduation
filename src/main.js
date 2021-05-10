import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import ElementUI from 'element-ui'
// if (process.env.NODE_ENV === 'development') {
//   require('element-ui/lib/theme-chalk/index.css')
// }

import 'element-ui/lib/theme-chalk/index.css'
// 导入全局样式表
// import './assets/css/global.css'
import '@/styles/index.scss' // global css

// import axios from 'axios'
import Qs from 'qs'
import htmlToPdf from '@/utils/htmlToPdf'
import '@/icons'
//配置请求的根路径
// axios.defaults.baseURL = 'http://localhost:3000/api/'

import '@/permission' // permission control 路由守卫
// 阻止启动生产消息
Vue.config.productionTip = false

// 将axios挂载到实例原型上，方便调用
import { post, get } from './utils/request'
// Vue.prototype.$axios = axios
Vue.prototype.$post = post
Vue.prototype.$get = get

Vue.prototype.$Qs = Qs

// 挂载ElementUI
Vue.use(ElementUI)
Vue.use(htmlToPdf)
/* 解释：HTML规定可以为元素添加非标准的属性，但要添加前缀data-
访问：添加自定义属性之后，可以通过元素的dataset属性来访问自定义的值。
 */
Vue.directive('title', {
  inserted: function (el, bingding) {
    document.title = el.dataset.title
  }
})
// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount('#app')
new Vue({
  el:'#app',
  router,
  store,
  render: h => h(App),
})
