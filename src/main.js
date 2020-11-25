import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 导入全局样式表
import './assets/css/global.css'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import axios from 'axios'
import Qs from 'qs'
import htmlToPdf from '@/utils/htmlToPdf'
//配置请求的根路径
axios.defaults.baseURL = 'http://localhost:3000/api/'
router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})
router.afterEach(() => {
  NProgress.done()
})
// 阻止启动生产消息
Vue.config.productionTip = false
// 将axios挂载到实例原型上，方便调用
Vue.prototype.$axios = axios
Vue.prototype.$Qs = Qs
//配置滚动条
NProgress.configure({ showSpinner: false, ease: 'ease', speed: 800 })
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
  render: h => h(App)
}).$mount('#app')
