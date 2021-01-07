import request from '@/utils/request'
import Qs from 'qs'

export function login(username, password) {
    return request({
        url: '/login',
        method: 'post',
        data: {
            username,
            password
        },
        transformRequest: [function (data, headers) {
            // 对 data 进行任意转换处理
            return Qs.stringify(data)
        }],
    })
}

export function getInfo(token) {
    return request({
        url: '/login/DetailsByKey',
        method: 'post',
        data: {
            token
        },
        transformRequest: [function (data, headers) {
            // 对 data 进行任意转换处理
            console.log(data);
            return Qs.stringify(data)
        }],
    })
}