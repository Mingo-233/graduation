
// import Layout from '@/layout'

const permission = {
  state: {
    routers: [],
    addRouters: []
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers

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
      component: res.component,
      children: res.children,
      name: res.name,
      meta: Object.assign(res.meta, {Id: res.Id}),
      hidden: res.hidden
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
  return accessedRouters
}

export const loadView = (view) => { // 路由懒加载
  return () => import(`@/views/${view}.vue`)
}

export default permission
