
import Layout from '@/layout'
import initRouters from '@/router/initRouter';

const permission = {
  state: {
    routers: initRouters,
    addRouters: []
  },
  mutations: {
    SET_ROUTERS: (state, routersList) => {
      state.addRouters = routersList
      state.routers = initRouters.concat(routersList)
      // state.routers = router.concat(routersList)


    }
  },
  actions: {
    generateRoutes({ commit }, route) {
      commit('SET_ROUTERS', route)
    }
  }
}

export const filterAsyncRouter = (routers) => { // 遍历后台传来的路由字符串，转换为组件对象
  const accessedRouters = routers.map(res => {
    return {
      path: res.path,
      component: res.Component,
      children: res.children,
      name: res.uname,
      id: res.id,
      meta: res.meta,
    }
  }).filter(router => {
    if (router.component) {
      if (router.component === 'Layout') { // Layout组件特殊处理
        router.component = Layout
      } else {
        router.component = loadView(router.component)
      }
    }
    if (router.children && router.children.length) {
      router.children = filterAsyncRouter(router.children)
    }
    return true
  })
  // console.log(accessedRouters);
  return accessedRouters
}

export const loadView = (view) => { // 路由懒加载
  return () => import(`@/views/${view}.vue`)
}

export default permission
