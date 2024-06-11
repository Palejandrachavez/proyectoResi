<template>
  <div class = "banco-de-proyectos">
    <!--
    <div class = "init-wrapper">
      <p class = "text-center"> No hay proyectos registrados, regresa en otro momento. </p>
    </div>
    -->
    <div class = "main">
      <div class = "main-header">
        <div class = "search">
          <input type = "text" placeholder = "Buscar...">
          <button class = "btn-search"> <i class = 'bx bx-search' > </i> </button>
        </div>
      </div>
      <div class = "filter-wrapper">
        <div class = "filter">
          <select class = "filter-dropdown">
            <option value = "carrera"> Carrera </option>
          </select>
          <select class = "filter-dropdown">
            <option value = "período"> Período proyectado </option>
          </select>
          <select class = "filter-dropdown">
            <option value = "vacantes"> Número de vacantes </option>
          </select>
        </div>
      </div>
      <div @click = "verProyecto" class = "wrapper">
        <div class = "card">
          <div class = "card-left">
            <span> <img src = "@/assets/logo-itm.png" alt = "company-logo"> </span>
          </div>
          <div class = "card-center">
            <h3> Gestión de Proyectos y Convenios para Residencias Profesionales </h3>
            <p class = "card-details"> Instituto Tecnológico de Mexicali </p>
            <p class = "card-loc mb-2"> <i class = 'bx bx-location-plus'> </i> Calzada Instituto Tecnológico s/n, Colonia Plutarco Elías Calles, 21376 Mexicali, B.C. </p>
            <div class = "card-sub">
              <p> <i class = 'bx bx-group'> </i> 2 vacantes </p>
              <p> <i class = 'bx bx-list-ul'> </i> Ingeniería en Sistemas Computacionales </p>
              <p> <i class = 'bx bx-time'> </i> AGOSTO 2023 - DICIEMBRE 2023 </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
  export default {
    name: 'Z-BancoProyectos',
    methods: {
      verProyecto() {
        this.$emit('verProyecto');
      }
    }
  }
</script>

<style scoped>
  @import '@/styles/bancoProyectos.css';
</style>