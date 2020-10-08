import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Welcome from '../views/Welcome.vue'
import Conclusion from '../components/Conclusion.vue'
import Chart from '../components/Chart.vue'
import Question from '../views/Question.vue'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    component: Home,
    redirect: '/welcome',
    children: [
      { path: '/welcome', component: Welcome },
      { path: '/chart1', component: Chart },
      { path: '/conclusion', component: Conclusion }
    ]
  },
  {
    path: '/question', component: Question
  }
]

const router = new VueRouter({
  routes
})

export default router
