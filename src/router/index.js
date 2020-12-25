import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/dashboard'
        },
        {
            path:'/bossRegister',
            name:'bossRegister',
            component:()=>import("../components/register/bossRegister")
        },
        {
            path:'/employRegister',
            name:'employRegister',
            component:()=>import("../components/register/employRegister")
        },
        {
            path: '/login',
            component: () => import(/* webpackChunkName: "home" */ '../components/login/loginMain'),
            redirect: '/employLoginForm',
            children:[
                {
                    path: '/employLoginForm',
                    name:"employLoginForm",
                    component:()=>import("../components/login/employForm"),
                },
                {
                    path: '/bossLoginForm',
                    name:"bossLoginForm",
                    component:()=>import("../components/login/bossForm"),
                },

            ]
        },
        {
            path: '/',
            component: () => import(/* webpackChunkName: "home" */ '../components/common/Home.vue'),
            meta: { title: '自述文件' },
            children: [
                {
                    path: '/market',
                    component: () => import(/* webpackChunkName: "home" */ '../components/integrationMall/integrationMall.vue'),
                },
                {
                    path: '/dashboard',
                    component: () => import(/* webpackChunkName: "dashboard" */ '../components/page/Dashboard.vue'),
                    meta: { title: '首页' }
                },
                {
                    path: '/icon',
                    component: () => import(/* webpackChunkName: "icon" */ '../components/page/Icon.vue'),
                    meta: { title: '自定义图标' }
                },
                {
                    path: '/table',
                    name: 'table',
                    component: () => import(/* webpackChunkName: "table" */ '../components/page/BaseTable.vue'),
                    meta: { title: '公司' }
                    // children:[{
                    //     path: '/goodHospital',
                    //     name: 'goodHospital',
                    //     component: () => import('../components/company/changshaGoodHospital.vue'),
                    //     meta: { title: '长沙好医院'}
                    // }]
                },
                {
                    path: '/tabs',
                    name: 'tabs',
                    component: () => import(/* webpackChunkName: "tabs" */ '../components/page/Tabs.vue'),
                    meta: { title: '职位信息' }
                },
                {
                    path: '/form',
                    component: () => import(/* webpackChunkName: "form" */ '../components/page/BaseForm.vue'),
                    meta: { title: '基本表单' }
                },
                {
                    // 富文本编辑器组件
                    path: '/editor',
                    component: () => import(/* webpackChunkName: "editor" */ '../components/page/VueEditor.vue'),
                    meta: { title: '富文本编辑器' }
                },
                {
                    // markdown组件
                    path: '/markdown',
                    component: () => import(/* webpackChunkName: "markdown" */ '../components/page/Markdown.vue'),
                    meta: { title: 'markdown编辑器' }
                },
                {
                    // 图片上传组件
                    path: '/upload',
                    component: () => import(/* webpackChunkName: "upload" */ '../components/page/Upload.vue'),
                    meta: { title: '文件上传' }
                },
                {
                    // vue-schart组件
                    path: '/jobinformation',
                    component: () => import(/* webpackChunkName: "chart" */ '../components/page/JobInformation.vue'),
                    meta: { title: '公司信息' }
                },
                {
                    // vue-schart组件
                    path: '/charts',
                    component: () => import(/* webpackChunkName: "chart" */ '../components/page/BaseCharts.vue'),
                    meta: { title: 'schart图表' }
                },
                {
                    // 拖拽列表组件
                    path: '/drag',
                    component: () => import(/* webpackChunkName: "drag" */ '../components/page/DragList.vue'),
                    meta: { title: '拖拽列表' }
                },
                {
                    // 拖拽Dialog组件
                    path: '/dialog',
                    component: () => import(/* webpackChunkName: "dragdialog" */ '../components/page/DragDialog.vue'),
                    meta: { title: '拖拽弹框' }
                },
                {
                    // 国际化组件
                    path: '/i18n',
                    component: () => import(/* webpackChunkName: "i18n" */ '../components/page/I18n.vue'),
                    meta: { title: '国际化' }
                },
                {
                    // 权限页面
                    path: '/permission',
                    component: () => import(/* webpackChunkName: "permission" */ '../components/page/Permission.vue'),
                    meta: { title: '权限测试', permission: true }
                },
                {
                    path: '/404',
                    component: () => import(/* webpackChunkName: "404" */ '../components/page/404.vue'),
                    meta: { title: '404' }
                },
                {
                    path: '/403',
                    component: () => import(/* webpackChunkName: "403" */ '../components/page/403.vue'),
                    meta: { title: '403' }
                },
                {
                    path: '/zixun1',
                    component: () => import(/* webpackChunkName: "403" */ '../components/page/zixun1.vue'),
                    meta: { title: 'zixun1' }
                },
                {
                    path: '/zixun2',
                    component: () => import(/* webpackChunkName: "403" */ '../components/page/zixun2.vue'),
                    meta: { title: 'zixun2' }
                },
                {
                    path: '/zixun3',
                    component: () => import(/* webpackChunkName: "403" */ '../components/page/zixun3.vue'),
                    meta: { title: 'zixun3' }
                },
                {
                    path: '/zixun4',
                    component: () => import(/* webpackChunkName: "403" */ '../components/page/zixun4.vue'),
                    meta: { title: 'zixun4' }
                },
                {
                    path: '/zixun5',
                    component: () => import(/* webpackChunkName: "403" */ '../components/page/zixun5.vue'),
                    meta: { title: 'zixun5' }
                },
                {
                    path: '/goodHospital',
                    name: 'goodHospital',
                    component: () => import('../components/company/changshaGoodHospital.vue'),
                    meta: {title: '长沙好医院'}
                },
                {
                    path: '/beijingFirstHospital',
                    name: 'beijingFirstHospital',
                    component: () => import('../components/company/beijingFirstHospital.vue'),
                    meta: {title: '北京大学第一医院'},

                },
                {
                    path: '/bjPosition',
                    name: 'bjPosition',
                    component: () => import('../components/company/beijingHospitalPosition.vue'),
                    meta: {title: 'bjPosition'}
                },
                {
                    path: '/shanghaiRuijinHospital',
                    name: 'shanghaiRuijinHospital',
                    component: () => import('../components/company/shanghaiRuijinHospital.vue'),
                    meta: {title: '上海交通大学医学院附属瑞金医院'}
                },
                {
                    path: '/changshaSkinHospital',
                    name: 'changshaSkinHospital',
                    component: () => import('../components/company/changshaSkinHospital.vue'),
                    meta: {title: '长沙皮肤医院'}
                },
                {
                    path: '/xiangYaHospital',
                    name: 'xiangYaHospital',
                    component: () => import('../components/company/xiangYaHospital.vue'),
                    meta: {title: '湘雅医院'}
                },
                {
                    path: '/xiangya',
                    name: 'xiangya',
                    component:() => import('../components/company/xiangYaHospital.vue')
                }
            ]
        },
        {
            path: '/login',
            component: () => import(/* webpackChunkName: "login" */ '../components/page/Login.vue'),
            meta: { title: '登录' }
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
});
