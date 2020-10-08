import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 导入全局样式表
import './assets/css/global.css'
import axios from 'axios'
import Qs from 'qs'
axios.defaults.baseURL = 'http://localhost:3000/api/'
// 阻止启动生产消息
Vue.config.productionTip = false
// 将axios挂载到实例原型上，方便调用
Vue.prototype.$axios = axios
Vue.prototype.$Qs = Qs
// var eventHub = new Vue()
// Vue.prototype.$eventHub = eventHub
// 挂载ElementUI
Vue.use(ElementUI)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
