import {createRouter, createWebHistory} from 'vue-router'
import type {RouteRecordRaw, Router} from 'vue-router'
import test from '@/views/Test.vue'

const routes: RouteRecordRaw[] = [
    {
        path: '/test',
        name: 'home',
        component: test
    },
]


const router: Router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
