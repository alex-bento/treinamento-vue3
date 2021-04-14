import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('../views/home/index.vue')
const Feedbacks = () => import('../views/feedbacks/index.vue')
const Crendencial = () => import('../views/crendencial/index.vue')

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/feedbacks',
    name: 'Feedbacks',
    component: Feedbacks,
    meta: {
      hasAuth: true
    }
  },
  {
    path: '/crendencial',
    name: 'Crendencial',
    component: Crendencial,
    meta: {
      hasAuth: true
    }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: { name: 'Home' }
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router
