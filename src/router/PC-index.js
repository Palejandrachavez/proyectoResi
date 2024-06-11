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
    path: '/mis-solicitudes',
    name: 'mis-solicitudes',
    component: () => import(/* webpackChunkName: "mis-solicitudes" */ '../views/PC-MisSolicitudesView.vue')
  },
  {
    path: '/consulta-solicitud',
    name: 'consulta-solicitud',
    component: () => import(/* webpackChunkName: "consulta-solicitud" */ '../views/PC-ConsultaSolicitudView.vue')
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