import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import ElementUI from 'element-ui'
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
Vue.directive('title', {
  inserted: function (el, bingding) {
    document.title = el.dataset.title
  }
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
