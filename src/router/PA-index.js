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
    component: () => import(/* webpackChunkName: "mis-datos" */ '../views/P-MisDatosView.vue')
  },
  {
    path: '/mis-proyectos',
    name: 'mis-proyectos',
    component: () => import(/* webpackChunkName: "mis-proyectos" */ '../views/PA-MisProyectosView.vue')
  },
  {
    path: '/consulta-proyecto',
    name: 'consulta-proyecto',
    component: () => import(/* webpackChunkName: "consulta-proyecto" */ '../views/PA-ConsultaProyectoView.vue')
  },
  {
    path: '/propuesta-proyecto',
    name: 'propuesta-proyecto',
    component: () => import(/* webpackChunkName: "propuesta-proyecto" */ '../views/PA-PropuestaProyectoView.vue')
  },
  {
    path: '/mis-revisiones',
    name: 'mis-revisiones',
    component: () => import(/* webpackChunkName: "mis-revisiones" */ '../views/PA-MisRevisionesView.vue')
  },
  {
    path: '/revision-proyecto',
    name: 'revision-proyecto',
    component: () => import(/* webpackChunkName: "revision-proyecto" */ '../views/PA-RevisionProyectoView.vue')
  },
  {
    path: '/observaciones-proyecto',
    name: 'observaciones-proyecto',
    component: () => import(/* webpackChunkName: "observaciones-proyecto" */ '../views/PA-EscribeComentariosView.vue')
  },
  {
    path: '/banco-de-proyectos',
    name: 'banco-de-proyectos',
    component: () => import(/* webpackChunkName: "banco-de-proyectos" */ '../views/Z-BancoProyectosView.vue')
  },
  {
    path: '/consulta-proyecto-banco',
    name: 'consulta-proyecto-banco',
    component: () => import(/* webpackChunkName: "consulta-proyecto-banco" */ '../views/P-ConsultaBancoView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router