import Vue from 'vue'
import VueRouter from 'vue-router'
import Landing from '@/components/app/Landing'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/products',
    name: 'Product',
    component: () => import('../views/Products.vue')
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import('../views/Signup.vue')
  },
  {
    path: '/signin',
    name: 'Signin',
    component: () => import('../views/Signin.vue')
  },
]

const router = new VueRouter({
  routes,
  mode: 'history',
})

export default router
