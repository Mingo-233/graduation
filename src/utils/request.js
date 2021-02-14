import axios from 'axios'
import { Message, MessageBox } from 'element-ui'
import store from '../store/index'
import { getToken } from '@/utils/auth'
import Qs from 'qs'

// 创建axios实例
const server = axios.create({
    baseURL: process.env.VUE_APP_API_URL || '/api'
    // baseURL: 'http://localhost:3000/api/'
})
// request拦截器
server.interceptors.request.use(
    config => {
        if (store.getters.token) {
            config.headers['Key'] = getToken() //让每个请求携带自定义token
            // console.log(config);
        }
        return config
    },
    error => {
        Promise.reject(error)
    }
)


// request拦截器
server.interceptors.response.use(
    response => {
        const res = response.data
        console.log(res);
        if (res.Status === 1) {
            Message({
                message: res.Message,
                type: 'success',
                duration: 5 * 1000
            })
            return response

        } else if (res.Status === 3) {
            // 3登录失效
            MessageBox.alert('登录失效!', '系统提示', {
                confirmButtonText: '确定',
                showClose: false,
                type: 'warning',
                callback: () => {
                    store.dispatch('FedLogOut').then(() => {
                        location.reload() // 为了重新实例化vue-router对象 避免bug
                    })
                }
            })
            Message({
                message: res.Message,
                type: 'warning',
                duration: 5 * 1000
            })
            return Promise.reject(res.Message || '出现错误')
            // return false
        }
        else {
            return response
        }
    },
    error => {
        if (error.message) {
            Message({
                message: error.message,
                type: 'error',
                duration: 5 * 1000
            })
            console.log(error);
        }
        return Promise.reject(error)
    }
)
export function get(url, params = {}) {
    return new Promise((resolve, reject) => {
        server.get(url, {
            params: params,
            paramsSerializer: params => {
                // return Qs.stringify(params, { indices: false })
                return Qs.stringify(params, { arrayFormat: 'indices' })
            }
        })
            .then((response) => {
                resolve(response)
            })
            .catch((err) => {
                console.log(err);
                reject(err)
            })
    })
}


export function post(url, data = {}, responseType = {}) {
    return new Promise((resolve, reject) => {
        // `timeout` 指定请求超时的毫秒数(0 表示无超时时间) 如果请求花费了超过 `timeout` 的时间，请求将被中断
        server.post(url, data, responseType, { timeout: 1000 }).then(
            response => {
                resolve(response)
            },
            err => {
                reject(err)
            }
        )
    })
}

export default server