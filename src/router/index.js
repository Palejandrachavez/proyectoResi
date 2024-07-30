import { createRouter, createWebHistory } from 'vue-router'
///import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    redirect: 'login-alumno'
  },
  {
    path: '/login-alumno',
    name: 'login-alumno',
    component: () => import(/* webpackChunkName: "login-alumno" */ '../components/Login-Alumno.vue')
  },
  {
    path: '/menu-alumno',
    name: 'menualumno',
    component: () => import(/* webpackChunkName: "registro-alumno" */ '../A-Main.vue')
  },
  {
    path: '/login-personal',
    name: 'login-personal',
    component: () => import(/* webpackChunkName: "login-personal" */ '../components/Login-Personal.vue')
  },
  {
    path: '/login-empresa',
    name: 'login-empresa',
    component: () => import(/* webpackChunkName: "login-empresa" */ '../components/Login-Empresa.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
