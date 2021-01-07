import Cookies from 'js-cookie'

const TokenKey = 'Admin-base-Token'
const TokenInfo = 'Admin-base-Info'
export function getToken() {
    return Cookies.get(TokenKey)
}

export function setToken(token) {
    return Cookies.set(TokenKey, token)
}
export function removeToken(token) {
    return Cookies.remove(TokenKey)
}

export function getInfos() {
    return Cookies.get(TokenInfo)
}

export function setInfos(token) {
    delete token.RankRule
    return Cookies.set(TokenInfo, token)
}

export function removeInfos() {
    return Cookies.remove(TokenInfo)
}

// export function getRoles() {
//     if (Cookies.get(TokenInfo)) {
//         return JSON.parse(Cookies.get(TokenInfo)).SysRoleInfo.map(res => {
//             return res.Name
//         })
//     } else {
//         return []
//     }
// }

