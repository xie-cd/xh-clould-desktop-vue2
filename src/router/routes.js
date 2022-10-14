// import DockBox from '../components/DockBox'
import StartMenu from '../components/StartMenu'
import SearchWin from '../components/SearchWin'
import WindowExplorer from '../components/WindowExplorer'
import WindowSetting from '../components/WindowSetting'

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
            default: StartMenu,
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
            default: SearchWin,
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
            default: WindowExplorer,
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
            default: WindowSetting,
            dockboxRv:()=>import("../components/DockBox")
        },
        meta: {
            title: '设置'
        },
    }

]

export default routes