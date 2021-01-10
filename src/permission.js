import router from './router'
import store from './store/index'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { Message } from 'element-ui'
import { getToken } from '@/utils/auth'
import { filterAsyncRouter } from "@/store/modules/permission"
//配置滚动条
NProgress.configure({ showSpinner: false, ease: 'ease', speed: 800 })

router.beforeEach(async (to, form, next) => {
    NProgress.start()
    if (getToken()) {
        console.log(to);
        if (to.path === '/login') {
            next({ path: '/' })
        } else {
            if (store.getters.addRouters.length === 0) {
                try {
                    await store.dispatch('GetInfo')
                    const { routers } = await store.dispatch('UserMenu')
                    console.log(routers);
                    const accessRoutes = await filterAsyncRouter(routers)
                    console.log('generateRoutes');
                    console.log(accessRoutes);
                    store.dispatch('generateRoutes', accessRoutes).then(() => {
                        router.addRoutes(accessRoutes)
                        next({ ...to, replace: true })
                    })
                    next()
                } catch (error) {
                    await store.dispatch('FedLogOut')
                    Message.error(error || 'Has Error')
                    next({ path: '/' })
                    NProgress.done()
                }
            }
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