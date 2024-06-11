<template>
  <div class = "mis-revisiones">
    <!--
    <div class = "init-wrapper">
      <p class = "text-center"> No tienes ninguna revisión pendiente, regresa en otro momento. </p>
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
            <select class = "select statusDropdown-active">
              <option value = "en-revision"> En revisión </option>
              <option value = "aceptado"> Aceptado </option>
              <option value = "rechazado"> Rechazado </option>
            </select>
            <button @click = "escribirComentarios" class = "button btnComments">
              <i class = 'bx bx-edit'> </i>
            </button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'PA-MisRevisiones',
    methods: {
      verProyecto() {
        this.$emit('verProyecto');
      },
      escribirComentarios() {
        this.$emit('escribirComentarios');
      }
    }
  }
</script>

<style scoped>
  @import '@/styles/misPostulaciones.css';
</style>