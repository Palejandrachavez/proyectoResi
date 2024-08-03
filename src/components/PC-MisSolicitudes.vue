<template>
  <div class = "mis-solicitudes-coo">
    <!--
    <div class = "init-wrapper">
      <p class = "text-center"> No tienes solicitudes registradas, regresa en otro momento. </p>
    </div>
    -->
    <div class = "table-container card">
      <header class = "mb-1"> Mis solicitudes </header>
      <table class = "table mt-4">
        <thead>
          <tr>
            <th> </th>
            <th> Nombre </th>
            <th> Empresa </th>
            <th> Período </th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-label = "Picture"> <img src = "../assets/Alex.pjg"> </td>
            <td data-label = "Student Name"> Chavez Ruiz Paz Alejandra </td>
            <td data-label = "Company Name"> Instituto Tecnológico de Mexicali </td>
            <td data-label = "Date"> ABRIL - AGOSTO 2024 </td>
            <td data-label = "Actions"> <a @click = "verSolicitud" class = "btnVer"> <i class = 'bx bx-info-circle'> </i> </a> </td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'PC-MisSolicitudes',
    methods: {
      verSolicitud() {
        this.$emit('verSolicitud');
      }
    }
  }
</script>

<style scoped>
  @import '../styles/misConvenios.css';
</style>