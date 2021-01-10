import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '@/layout/index'
import Layout from '@/layout'
// import Welcome from '../views/dashboard/Welcome.vue'
// import Basics from '../views/Basics.vue'
// import Conclusion from '../views/conclusion/Conclusion/index.vue'
// import suggestion from '../views/conclusion/suggestion/index.vue'
// import Chart1 from '../views/chartPage/Chart1/Chart.vue'
// import Chart2 from '../views/chartPage/Chart2/Chart.vue'
// import Chart3 from '../views/chartPage/Chart3/Chart.vue'
// import Chart4 from '../views/chartPage/Chart4/Chart.vue'
// import Question from '../views/Question.vue'
// import demo from '../views/demo.vue'
// import Login from '../views/login.vue'
// import { Que1, Que2, Que3, Que4, Que5 } from '../views/Que'


Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/welcome',
    name: 'welcome',
    // meta: { title: '系统工具', icon: 'example', common: 'common' },
    children: [
      {
        path: '/welcome',
        component: () => import('@/views/dashboard/Welcome'),
        name: 'Dashboard',
        meta: { title: '首 页', icon: 'dashboard', affix: true }
      },
      {
        path: '/question',
        component: () => import('@/views/Question'),
        name: 'question',
        meta: { title: '问卷', icon: 'example', affix: true }
      }
    ]
  },
  {  // 登 录
    path: '/login',
    name: 'login',
    meta: { title: '用户登录' },
    component: () => import('@/views/login'),
  },
  {
    path: '/que1',
    name: 'que1',
    meta: { title: '问卷1' },
    component: () => import('@/views/Que/Que1'),
  },
  {
    path: '/que2',
    name: 'que2',
    meta: { title: '问卷2' },
    component: () => import('@/views/Que/Que2'),
  },
  {
    path: '/que3',
    name: 'que3',
    meta: { title: '问卷3' },
    component: () => import('@/views/Que/Que3'),
  },
  {
    path: '/que4',
    name: 'que4',
    meta: { title: '问卷4' },
    component: () => import('@/views/Que/Que4'),
  },
  {
    path: '/que5',
    name: 'que5',
    meta: { title: '问卷5' },
    component: () => import('@/views/Que/Que5'),
  }
]

const router = new VueRouter({
  routes
})


export default router

// {
//   path: '/',
//   component: Home,
//   redirect: '/welcome',
//   children: [
//     { path: '/welcome', component: Welcome },
//     // { name: 'basics', path: '/basics', component: Basics },
//     // { path: '/chart1', component: Chart1 },
//     // { path: '/chart2', component: Chart2 },
//     // { path: '/chart3', component: Chart3 },
//     // { path: '/chart4', component: Chart4 },
//     // { path: '/conclusion', component: Conclusion },
//     // { path: '/suggestion', component: suggestion },
//     { name: 'question', path: '/question', component: Question },
//   ]
// },

// {
//   name: 'que1', path: '/que1', component: Que1
// },
// {
//   name: 'que2', path: '/que2', component: Que2
// },
// {
//   name: 'que3', path: '/que3', component: Que3
// },
// {
//   name: 'que4', path: '/que4', component: Que4
// },
// {
//   name: 'que5', path: '/que5', component: Que5
// },