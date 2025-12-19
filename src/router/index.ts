import {createRouter, createWebHistory} from 'vue-router'
import type {RouteRecordRaw, Router} from 'vue-router'
import HelloWorld from "../components/HelloWorld.vue";

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'home',
        component: HelloWorld
    },
]


const router: Router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
