'use strict'
const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const LodashModuleReplacementPlugin = require("lodash-webpack-plugin");
function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    // 部署应用时的基本 URL
    publicPath: './',
    // build时构建文件的目录 构建时传入 --no-clean 可关闭该行为
    // outputDir: process.env.outputDir,
    outputDir: __dirname + '/../graduate_server/webdist/',
    devServer: {
        "open": true
    },
    // build时放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
    assetsDir: 'static',
    // 指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径。
    indexPath: 'index.html',
    // 默认在生成的静态资源文件名中包含hash以控制缓存
    filenameHashing: true,
    // 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码 (在生产构建时禁用 eslint-loader)
    lintOnSave: false,
    // 是否使用包含运行时编译器的 Vue 构建版本
    runtimeCompiler: false,
    // Babel 显式转译列表
    transpileDependencies: [],
    // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建
    productionSourceMap: false,
    // 设置生成的 HTML 中 <link rel="stylesheet"> 和 <script> 标签的 crossorigin 属性（注：仅影响构建时注入的标签）
    crossorigin: '',
    // 在生成的 HTML 中的 <link rel="stylesheet"> 和 <script> 标签上启用 Subresource Integrity (SRI)
    integrity: false,
    configureWebpack: config => {
        const plugins = []
        // 后端未开启.gz访问，暂时注释，需要可开启
        // const CompressionWebpackPlugin = require('compression-webpack-plugin')
        // plugins.push(
        //   new CompressionWebpackPlugin({
        //     filename: "[path].gz[query]",
        //     algorithm: "gzip",
        //     test: new RegExp("\\.(" + productionGzipExtensions.join("|") + ")$"), //匹配文件名
        //     threshold: 10240, //对10K以上的数据进行压缩
        //     minRatio: 0.8,
        //     deleteOriginalAssets: false //是否删除源文件
        //   })
        // )
        plugins.push(
            new htmlWebpackPlugin({
                hash: true,
                minify: { // 压缩HTML文件
                    removeComments: true, // 移除HTML中的注释
                    collapseWhitespace: true, // 删除空白符与换行符
                    minifyCSS: true// 压缩内联css
                },
                // favicon: './public/favicon.ico',
                // title: process.env.VUE_APP_BASE_NAME,
                filename: 'index.html',
                template: process.env.NODE_ENV === 'production' ? './public/index.prod.html' : './public/index.dev.html',
                inject: true
            })
        )
        if (process.env.NODE_ENV === 'production') {
            config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true // 正式环境下删除console
            config.externals = {
                'vue': 'Vue',
                'vuex': 'Vuex',
                'vue-router': 'VueRouter',
                'axios': 'axios',
                'element-ui': 'ELEMENT'
            }
        }
        // config.devtool = 'source-map'
        config.plugins = [...config.plugins, ...plugins]
        // config.entry.app = ['babel-polyfill', './src/main.js'];
    },
    chainWebpack: config => {
        // if (process.env.NODE_ENV === 'production') {
        //     config
        //         .plugin('webpack-bundle-analyzer')
        //         .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
        //     config.plugin("loadshReplace").use(new LodashModuleReplacementPlugin());
        // }
        config.resolve.alias
            .set("@", resolve('src'))
        config.module
            .rule('svg')
            .exclude.add(resolve('src/icons'))
            .end()
        config.module
            .rule('svg-sprite-loader')
            .test(/\.svg$/)
            .include
            .add(resolve('src/icons')) // 处理svg目录
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]'
            })
            .end()
    }
}
