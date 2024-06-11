<template>
  <div class = "mis-postulaciones">
    <!--
    <div class = "init-wrapper">
      <p class = "text-center"> No tienes ninguna postulación registrada, regresa en otro momento. </p>
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
            <select class = "select statusDropdown" disabled>
              <option value = "pendiente"> Pendiente </option>
              <option value = "aceptado"> Aceptado </option>
              <option value = "rechazado"> Rechazado </option>
            </select>
            <button class = "button btnDelete">
              <i class = 'bx bx-trash'> </i>
            </button>
            <button class = "button btnConfirm">
              <i class = 'bx bxs-user-check' > </i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'A-MisPostulaciones',
    methods: {
      verProyecto() {
        this.$emit('verProyecto');
      }
    }
  }
</script>

<style scoped>
  @import '@/styles/misPostulaciones.css';
</style>