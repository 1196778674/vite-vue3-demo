const home = () => import('@/views/home.vue')
const login = () => import('@/views/login.vue')
const NOTFOUND = () => import('@/views/404.vue')

export const routes = [
    {
        path: '/',
        redirect: '/home',
    },
    {
        path: '/home',
        name: 'home',
        component: home,
    },
    {
        path: '/login',
        name: 'login',
        component: login,
    },
    {
        path: '/404',
        component: NOTFOUND,
    },
    {
        path: '/:pathMatch(.*)',
        redirect: '/404'
    }
]