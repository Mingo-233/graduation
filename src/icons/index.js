import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon'// svg组件

// register globally
Vue.component('svg-icon', SvgIcon)
const requireAll = requireContext => requireContext.keys().map(requireContext)

/* require.context有三个参数：
    directory：说明需要检索的目录
    useSubdirectories：是否检索子目录
    regExp: 匹配文件的正则表达式
 */
const req = require.context('./svg', true, /\.svg$/)
requireAll(req)

/*
值得注意的是require.context函数执行后返回的是一个函数,并且这个函数有3个属性

resolve {Function} -接受一个参数request,request为test文件夹下面匹配文件的相对路径,返回这个匹配文件相对于整个工程的相对路径

keys {Function} -返回匹配成功模块的名字组成的数组

id {String} -执行环境的id,返回的是一个字符串,主要用在module.hot.accept,应该是热加载
 */