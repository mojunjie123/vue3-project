import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/chooseArea',
    component: () => import('../views/chooseArea/index.vue'),
  },
  {
    path: '/chooseCity',
    component: () => import('../views/chooseCity/index.vue'),
  },
  {
    path: '/chooseTime',
    component: () => import('../views/chooseTime/index.vue'),
  },
]

const router = createRouter({
  routes,
  history: createWebHistory(),
})

export default router
