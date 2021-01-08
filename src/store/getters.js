const getters = {
    sidebar: state => state.app.sidebar,
    token: state => state.user.token,
    permission_routes: state => state.permission.routers,
    addRouters: state => state.permission.addRouters,
}

export default getters
