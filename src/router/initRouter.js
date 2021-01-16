// import Layout from '@/layout'

const initRouters = [
    // {
    //     name: '首页',
    //     component: 'Layout',
    //     path: '/',
    //     id: '1000',
    //     meta: {
    //         icon: 'el-icon-notebook-1',
    //         title: '首页'
    //     },
    //     children: [
    //     ]
    // },
    {
        name: '采样问卷',
        component: 'Layout',
        path: '/questions',
        id: '400',
        meta: {
            icon: 'el-icon-notebook-1',
            title: '采样问卷'
        },
        children: [
            {
                name: '问卷',
                component: 'Layout',
                path: '/question',
                id: '401',
                meta: {
                    icon: 'el-icon-menu',
                    title: '问卷'
                },
                children: []
            },
        ]
    },
]
export default initRouters
