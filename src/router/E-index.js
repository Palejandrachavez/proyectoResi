import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'inicio',
    component: () => import(/* webpackChunkName: "inicio" */ '../views/Z-InicioView.vue')
  },
  {
    path: '/mis-datos',
    name: 'mis-datos',
    component: () => import(/* webpackChunkName: "mis-datos" */ '../views/E-MisDatosView.vue')
  },
  {
    path: '/mis-proyectos',
    name: 'mis-proyectos',
    component: () => import(/* webpackChunkName: "mis-proyectos" */ '../views/E-MisProyectosView.vue')
  },
  {
    path: '/consulta-proyecto',
    name: 'consulta-proyecto',
    component: () => import(/* webpackChunkName: "consulta-proyecto" */ '../views/E-ConsultaProyectoView.vue')
  },
  {
    path: '/observaciones-proyecto',
    name: 'observaciones-proyecto',
    component: () => import(/* webpackChunkName: "observaciones-proyecto" */ '../views/E-ConsultaComentariosView.vue')
  },
  {
    path: '/propuesta-proyecto',
    name: 'propuesta-proyecto',
    component: () => import(/* webpackChunkName: "propuesta-proyecto" */ '../views/E-PropuestaProyectoView.vue')
  },
  {
    path: '/mis-candidatos',
    name: 'mis-candidatos',
    component: () => import(/* webpackChunkName: "mis-candidatos" */ '../views/E-MisCandidatosView.vue')
  },
  {
    path: '/consulta-candidatos',
    name: 'consulta-candidatos',
    component: () => import(/* webpackChunkName: "consulta-candidatos" */ '../views/E-ConsultaCandidatosView.vue')
  },
  {
    path: '/banco-de-proyectos',
    name: 'banco-de-proyectos',
    component: () => import(/* webpackChunkName: "banco-de-proyectos" */ '../views/Z-BancoProyectosView.vue')
  },
  {
    path: '/consulta-proyecto-banco',
    name: 'consulta-proyecto-banco',
    component: () => import(/* webpackChunkName: "consulta-proyecto-banco" */ '../views/E-ConsultaBancoView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router