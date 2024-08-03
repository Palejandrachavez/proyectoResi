<template>
  <div class = "mis-candidatos">
    <!--
    <div class = "init-wrapper">
      <p class = "text-center"> No tienes ningún proyecto registrado, regresa en otro momento. </p>
    </div>
    -->
    <div class = "wrapper">
      <div class = "card">
        <div class = "card-left">
          <span> <img src = "../assets/logo-itm.png" alt = "company-logo"> </span>
        </div>
        <div class = "card-center">
          <h3> Gestión de Proyectos y Convenios para Residencias Profesionales </h3>
          <p class = "card-details"> Instituto Tecnológico de Mexicali </p>
          <div class = "buttons mb-1">
            <button @click = "verProyecto" class = "button btnDetails">
              <span class = "btnText"> Ver proyecto </span>
            </button>
            <button @click = "verCandidatos" class = "button btnDetails">
              <span class = "btnText"> Ver candidatos </span>
            </button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'PG-MisCandidatos',
    methods: {
      verProyecto() {
        this.$emit('verProyecto');
      },
      verCandidatos() {
        this.$emit('verCandidatos');
      }
    }
  }
</script>

<style scoped>
  @import '../styles/misPostulaciones.css';
</style>