import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'

if (process.env.NODE_ENV === 'development') {
    Vue.use(Vuex)
}
const modulesFiles = require.context('./modules', true, /\.js$/)
//console.log(modulesFiles.keys());
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
    //console.log(modulePath);
    const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
    // console.log(moduleName);
    // console.log(modulesFiles);
    const value = modulesFiles(modulePath)
    //这个value就是我们需要的其中一个模块了
    // console.log(value);
    //因为我们这个模块导出时使用的export default  所以他会有一个default的属性，里面的内容就是我们导出的内容
    //每一个导出的内容 变成了modules的一个属性，最后把modeles整个返回作为reduce累加器的范围值   
    modules[moduleName] = value.default
    //console.log(modules);
    return modules
}, {})
const store = new Vuex.Store({
    modules,
    //此时的modeles会有例如user这个值,user里面有status，mutations，actions这些属性，getters去调用这些属性
    getters
    // getters:{
    //     token: state => state.user.token

    // }
})

export default store
