<template>
  <div id = "app">
    <nav class = "sidebar">
      <header>
        <div class = "image-text">
          <span class = "picture"> <img src = "../src/assets/coordinacion.png" alt = "profile-picture"> </span>
          <div class = "text header-text">
            <span class = "name"> Coordinación de Sistemas Computacionales </span>
          </div>
        </div>
      </header>
      <div class = "menu-bar">
        <div class = "menu mt-4">
          <li class = "search-box">
            <a class = "itm-link" href = "http://www.itmexicali.edu.mx/" target = "_blank">
              <span class = "logo"> <img class = "logo-tec" src = "../src/assets/logo-itm.png" alt = "logo-itm"> </span>
            </a>
          </li>
          <li class = "nav-link">
            <router-link to = "/">
              <i class = 'bx bx-home icon'> </i>
              <span class = "text nav-text"> Inicio </span>
            </router-link>
          </li>
          <li class = "nav-link">
            <router-link to = "/mis-datos">
              <i class = 'bx bx-user-circle icon'> </i>
              <span class = "text nav-text"> Mis datos </span>
            </router-link>
          </li>
          <li class = "nav-link">
            <router-link to = "/mis-solicitudes">
              <i class = 'bx bx-edit icon'> </i>
              <span class = "text nav-text"> Mis solicitudes </span>
            </router-link>
          </li>
          <li class = "nav-link">
            <router-link to = "/banco-de-proyectos">
              <i class = 'bx bx-briefcase icon'> </i>
              <span class = "text nav-text"> Banco de proyectos </span>
            </router-link>
          </li>
        </div>
        <div class = "bottom-content">
          <li class = "nav-link">
            <router-link to = "/banco-de-proyectos">
              <i class = 'bx bx-log-out icon'> </i>
              <span class = "text nav-text"> Cerrar sesión </span>
            </router-link>
          </li>
        </div>
      </div>
    </nav>
    <div class = "content-container">
      <router-view/>
    </div>
  </div>
</template>

<style>
  @import '../src/styles/root.css';
</style>