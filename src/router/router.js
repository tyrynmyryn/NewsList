import Main from '@/pages/Main'
import NewsInfoPage from '@/pages/NewsInfoPage'
import AddNews from '@/pages/AddNews'
import ChanageNews from '@/pages/ChangeNews'

import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/post/:index',
        component: NewsInfoPage
    },
    {
        path: '/addnews',
        component: AddNews
    },
    {
        path: '/edit/:index',
        component: ChanageNews
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router