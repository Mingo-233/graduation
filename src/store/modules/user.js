import { getToken, setToken, removeToken, setInfos, removeInfos, } from '@/utils/auth'
import { login, getInfo, getMenu, FunctionList } from '@/api/login'


const user = {
    state: {
        token: getToken(),
        menus: [],
        roles: []
    },
    mutations: {
        SET_TOKEN: (status, token) => {
            status.token = token
        }
    },
    actions: {
        Login({ commit }, userInfo) {
            const username = userInfo.username.trim()
            return new Promise((resolve, reject) => {
                login(username, userInfo.password).then(response => {
                    console.log(response);
                    const data = response.data
                    setToken(data.token)
                    commit('SET_TOKEN', data.token)
                    resolve(response)
                }).catch(error => {
                    reject(error)
                })
            })
        },
        //上下问对象context
        GetInfo({ commit, state }) {
            return new Promise((resolve, reject) => {
                console.log(state);
                getInfo(state.token).then(response => {
                    let Data = response.data
                    console.log(Data);
                    if (!Data.info) {
                        reject('getInfo: roles must be a non-null array !')
                    }
                    setInfos(Data.info)
                    resolve(response)
                }).catch(error => {
                    reject(error)
                })
            })
        },
        // 获取菜单
        UserMenu({ commit, state }) {
            return new Promise((resolve, reject) => {
                getMenu(state.token).then(response => {
                    console.log(response);
                    let Data = response.data.menuName
                    if (!Data) {
                        reject('getInfo: roles must be a non-null array !')
                    }
                    resolve({ routers: Data })
                }).catch(error => {
                    reject(error)
                })
            })
        },
        // 前端 登出
        FedLogOut({ commit }) {
            return new Promise((resolve, reject) => {
                commit('SET_TOKEN', '')
                removeToken()
                removeInfos()
                resolve()
            })
        }
    }
}

export default user