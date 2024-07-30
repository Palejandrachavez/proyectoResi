
import { createRouter, createWebHistory } from 'vue-router'

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
    component: () => import(/* webpackChunkName: "mis-datos" */ '../views/A-MisDatosView.vue')
  },
  
  {
    path: '/mis-solicitudes',
    name: 'mis-solicitudes',
    component: () => import(/* webpackChunkName: "mis-solicitudes" */ '../views/A-MisSolicitudesView.vue')
  },
  {
    path: '/propuesta-solicitud',
    name: 'propuesta-solicitud',
    component: () => import(/* webpackChunkName: "generar-solicitud" */ '../views/A-PropuestaSolicitudView.vue')
  },
  {
    path: '/mis-postulaciones',
    name: 'mis-postulaciones',
    component: () => import(/* webpackChunkName: "mis-postulaciones" */ '../views/A-MisPostulacionesView.vue')
  },
  {
    path: '/consulta-postulacion',
    name: 'consulta-postulacion',
    component: () => import(/* webpackChunkName: "consulta-postulacion" */ '../views/A-ConsultaPostulacionView.vue')
  },
  {
    path: '/banco-de-proyectos',
    name: 'banco-de-proyectos',
    component: () => import(/* webpackChunkName: "banco-de-proyectos" */ '../views/Z-BancoProyectosView.vue')
  },
  {
    path: '/consulta-proyecto-banco',
    name: 'consulta-proyecto-banco',
    component: () => import(/* webpackChunkName: "consulta-proyecto-banco" */ '../views/A-ConsultaBancoView.vue')
  },
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
