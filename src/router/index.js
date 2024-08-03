import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/login-alumno",
  },
  {
    path: "/login-alumno",
    name: "login-alumno",
    component: () =>
      import(
        /* webpackChunkName: "login-alumno" */ "../components/Login-Alumno.vue"
      ),
  },
  {
    path: "/menu-alumno",
    name: "menu-alumno",
    component: () =>
      import(/* webpackChunkName: "menu-alumno" */ "../A-Main.vue"),
  
    children: [
   
      {
        path: "/mis-datos",
        name: "mis-datos",
        component: () =>
          import(/* webpackChunkName: "mis-datos" */ "../views/A-MisDatosView.vue"),
      },
    
      {
        path: "/mis-solicitudes",
        name: "mis-solicitudes",
        component: () =>
          import(
            /* webpackChunkName: "mis-solicitudes" */ "../views/A-MisSolicitudesView.vue"
          ),
      },
      {
        path: "/propuesta-solicitud",
        name: "propuesta-solicitud",
        component: () =>
          import(
            /* webpackChunkName: "generar-solicitud" */ "../views/A-PropuestaSolicitudView.vue"
          ),
      },
      {
        path: "/mis-postulaciones",
        name: "mis-postulaciones",
        component: () =>
          import(
            /* webpackChunkName: "mis-postulaciones" */ "../views/A-MisPostulacionesView.vue"
          ),
      },
      {
        path: "/consulta-postulacion",
        name: "consulta-postulacion",
        component: () =>
          import(
            /* webpackChunkName: "consulta-postulacion" */ "../views/A-ConsultaPostulacionView.vue"
          ),
      },
      {
        path: "/banco-de-proyectos",
        name: "banco-de-proyectos",
        component: () =>
          import(
            /* webpackChunkName: "banco-de-proyectos" */ "../views/Z-BancoProyectosView.vue"
          ),
      },
      {
        path: "/consulta-proyecto-banco",
        name: "consulta-proyecto-banco",
        component: () =>
          import(
            /* webpackChunkName: "consulta-proyecto-banco" */ "../views/A-ConsultaBancoView.vue"
          ),
      },
    ],
  },
  {
    path: "/login-personal",
    name: "login-personal",
    component: () =>
      import(
        /* webpackChunkName: "login-personal" */ "../components/Login-Personal.vue"
      ),
  },
  {
    path: "/login-empresa",
    name: "login-empresa",
    component: () =>
      import(
        /* webpackChunkName: "login-empresa" */ "../components/Login-Empresa.vue"
      ),
  },
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
