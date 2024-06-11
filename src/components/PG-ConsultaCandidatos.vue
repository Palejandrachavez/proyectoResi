<template>
  <div class = "consulta comments">
    <!--
    <div class = "init-wrapper">
      <p class = "text-center"> No tienes candidatos registrados, regresa en otro momento. </p>
    </div>
    -->
    <div class = "table-container card">
      <header class = "mb-1"> Sistema de Gestión de Proyectos y Convenios para Residencias Profesionales </header>
      <table class = "table mt-4">
        <thead>
          <tr>
            <th> </th>
            <th> Nombre </th>
            <th> Teléfono </th>
            <th> Correo electrónico </th>
            <th> Estatus </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-label = "Picture"> <img src = "@/assets/user-profile.png"> </td>
            <td data-label = "Name"> Aguilar Figueroa Leonardo Francisco </td>
            <td data-label = "Phone Number"> 686 461-7030 </td>
            <td data-label = "E-Mail"> a18490910@itmexicali.edu.mx </td>
            <td data-label = "Actions">
              <select class = "statusDropdown">
                <option value = "pendiente"> Pendiente </option>
                <option value = "en-proceso"> Aceptado </option>
                <option value = "completado"> Rechazado </option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
  @import '@/styles/misConvenios.css';
</style>