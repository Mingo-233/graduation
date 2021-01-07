import router from './router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { Message } from 'element-ui'
import { getToken } from '@/utils/auth'
//配置滚动条
NProgress.configure({ showSpinner: false, ease: 'ease', speed: 800 })

router.beforeEach((to, form, next) => {
    NProgress.start()
    if (getToken()) {
        console.log(to);
        if (to.path === '/login') {
            next({ path: '/' })
        } else {
            console.log('未填写的路由守卫配置');
            next()
        }
    }
    else {
        next()
    }
})

router.afterEach(() => {
    NProgress.done() // 结束Progress
})