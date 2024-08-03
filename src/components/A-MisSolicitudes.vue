<template>
  <div class = "mis-solicitudes">
    <div class = "wrapper request card card-request">
      <div class = "card-center-request">
        <h3 class = "title"> Solicitud de residencia </h3>
        <p class = "card-details-request"> Selecciona el proyecto del cual deseas generar una solicitud de residencia. </p>
        <div class = "buttons mb-4">
          <select class = "select projectDropdown">
            <option value = "ninguno"> -- </option>
          </select>
        </div>
        <div class = "buttonsRequest mb-1">
          <button @click = "generarSolicitud" class = "button btnGenerar">
            <span class = "btnText"> Generar </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'A-MisSolicitudes',
    methods: {
      generarSolicitud() {
        this.$emit('generarSolicitud');
      }
    }
  }
</script>

<style scoped>
  @import '../styles/misPostulaciones.css';
</style>