import IndexApp from '@/components/pages/IndexApp.vue'
import AboutApp from '@/components/pages/AboutApp.vue'

const routes = [
    {
        path: '/',
        name: 'index',
        component: IndexApp
    },
    {
        path: '/about',
        name: 'about',
        component: AboutApp
    }
]

export default routes