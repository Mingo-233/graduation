import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Welcome from '../views/dashboard/Welcome.vue'
import Basics from '../views/Basics.vue'
import Conclusion from '../views/conclusion/Conclusion/index.vue'
import suggestion from '../views/conclusion/suggestion/index.vue'
import Chart1 from '../views/chartPage/Chart1/Chart.vue'
import Chart2 from '../views/chartPage/Chart2/Chart.vue'
import Chart3 from '../views/chartPage/Chart3/Chart.vue'
import Chart4 from '../views/chartPage/Chart4/Chart.vue'
import Question from '../views/Question.vue'
import demo from '../views/demo.vue'
import Login from '../views/login.vue'
import { Que1, Que2, Que3, Que4, Que5 } from '../views/Que'


Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    component: Home,
    redirect: '/welcome',
    children: [
      { path: '/welcome', component: Welcome },
      { name: 'basics', path: '/basics', component: Basics },
      { path: '/chart1', component: Chart1 },
      { path: '/chart2', component: Chart2 },
      { path: '/chart3', component: Chart3 },
      { path: '/chart4', component: Chart4 },
      { path: '/conclusion', component: Conclusion },
      { path: '/suggestion', component: suggestion },
      { name: 'question', path: '/question', component: Question },
    ]
  },
  {
    name: 'que1', path: '/que1', component: Que1
  },
  {
    name: 'que2', path: '/que2', component: Que2
  },
  {
    name: 'que3', path: '/que3', component: Que3
  },
  {
    name: 'que4', path: '/que4', component: Que4
  },
  {
    name: 'que5', path: '/que5', component: Que5
  },
  {
    name: 'login', path: '/login', component: Login
  },
  {
    path: '/demo', component: demo
  }
]

const router = new VueRouter({
  routes
})

export default router
