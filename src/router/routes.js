
const routes = [
    {
        path:'/',
        name:'desktop',
        components:{
            dockboxRv:()=>import("../components/DockBox")
        },
        meta: {
            title: '任务栏'
        },

    },
    {
        path: '/start_menu',
        name: 'startMenu',
        components: {
            default: ()=>import("../components/StartMenu"),
            dockboxRv:()=>import("../components/DockBox")
        },
        meta: {
            title: '开始菜单'
        },

    },
    {
        path: '/search',
        name: 'search',
        components: {
            default: ()=>import("../components/SearchWin"),
            dockboxRv:()=>import("../components/DockBox")
        },
        meta: {
            title: '搜索'
        },
    }, 
    {
        path: '/explorer',
        name: 'explorer',
        components: {
            default: ()=>import("../components/WindowExplorer"),
            dockboxRv:()=>import("../components/DockBox")
        },
        meta: {
            title: '资源管理器'
        },
    }, 
    {
        path: '/setting',
        name: 'setting',
        components: {
            default: ()=>import("../components/WindowSetting"),
            dockboxRv:()=>import("../components/DockBox")
        },
        meta: {
            title: '设置'
        },
    },
    {
        path: '/calc',
        name: 'calc',
        components: {
            default: ()=>import("../components/Calc.vue"),
            dockboxRv:()=>import("../components/DockBox")
        },
        meta: {
            title: '关于'
        },
    },
    {
        path: '/about',
        name: 'about',
        components: {
            default: ()=>import("../components/About.vue"),
            dockboxRv:()=>import("../components/DockBox")
        },
        meta: {
            title: '关于'
        },
    }

]

export default routes