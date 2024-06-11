<template>
  <div class = "mis-proyectos">
    <!--
    <div class = "wrapper">
      <div class = "container card justify-content-center">
        <p> No tienes ningún proyecto registrado, prueba agregando uno. </p>
      </div>
      <div class = "buttons">
        <button class = "button btnAdd">
          <i class = 'bx bx-plus-circle'> </i>
        </button>
      </div>
    </div>
    -->
    <div class = "wrapper">
      <div class = "card">
        <div class = "card-left">
          <span> <img src = "@/assets/logo-itm.png" alt = "company-logo"> </span>
        </div>
        <div class = "card-center">
          <h3> Gestión de Proyectos y Convenios para Residencias Profesionales </h3>
          <p class = "card-details"> Instituto Tecnológico de Mexicali </p>
          <div class = "buttons mb-1">
            <button @click = "verProyecto" class = "button btnDetails">
              <span class = "btnText"> Ver proyecto </span>
            </button>
            <button class = "button btnDelete btnD2">
              <i class = 'bx bx-trash'> </i>
            </button>
          </div>
        </div>
      </div>
      <div @click = "agregarProyecto" class = "buttons">
        <button class = "button btnAdd">
          <i class = 'bx bx-plus-circle'> </i>
        </button>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'PA-MisProyectos',
    methods: {
      verProyecto() {
        this.$emit('verProyecto');
      },
      agregarProyecto() {
        this.$emit('agregarProyecto');
      }
    }
  }
</script>

<style scoped>
  @import '@/styles/misPostulaciones.css';
</style>