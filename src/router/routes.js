import Desktop from '../components/Desktop.vue'
import StartMenu from '../components/StartMenu'
import SearchWin from '../components/SearchWin'
import WindowExplorer from '../components/WindowExplorer'
import WindowSetting from '../components/WindowSetting'

const routes = [
    {
        path:'/',
        name:'desktop',
        component:{
            dockboxRv:Desktop
        },
        meta: {
            title: '桌面'
        },
    },
    {
        path: '/start_menu',
        name: 'startMenu',
        component: {
            default: StartMenu,
            dockboxRv:Desktop
        },
        meta: {
            title: '开始菜单'
        },

    },
    {
        path: '/search',
        name: 'search',
        component: SearchWin,
        meta: {
            title: '搜索'
        },
    }, 
    {
        path: '/explorer',
        name: 'explorer',
        component: WindowExplorer,
        meta: {
            title: '资源管理器'
        },
    }, 
    {
        path: '/setting',
        name: 'setting',
        component: WindowSetting,
        meta: {
            title: '设置'
        },
    }
]

export default routes