import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Welcome from '../views/Welcome.vue'
import Basics from '../subPage/Basics.vue'
import Conclusion from '../subPage/Conclusion.vue'
import Chart1 from '../subPage/Chart1/Chart.vue'
import Chart2 from '../subPage/Chart2/Chart.vue'
import Question from '../views/Question.vue'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    component: Home,
    redirect: '/welcome',
    children: [
      { path: '/welcome', component: Welcome },
      { path: '/basics', component: Basics },
      { path: '/chart1', component: Chart1 },
      { path: '/chart2', component: Chart2 },
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
