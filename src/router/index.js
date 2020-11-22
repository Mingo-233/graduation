import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Welcome from '../views/Welcome.vue'
import Basics from '../subPage/Basics.vue'
import Conclusion from '../subPage/Conclusion.vue'
import Chart1 from '../subPage/Chart1/Chart.vue'
import Chart2 from '../subPage/Chart2/Chart.vue'
import Question from '../subPage/Question.vue'
import demo from '../views/demo.vue'
import { Que1, Que2, Que3, Que4, Que5 } from '../views/Que'
import conclusionPerson from '../views/conclusionPerson/index.vue'

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
      { path: '/conclusion', component: Conclusion },
      { path: '/conclusionPerson', component: conclusionPerson },
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
    path: '/demo', component: demo
  }
]

const router = new VueRouter({
  routes
})

export default router
