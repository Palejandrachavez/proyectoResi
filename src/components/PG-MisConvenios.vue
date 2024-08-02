<template>
  <div class = "mis-convenios">
    <!--
    <div class = "init-wrapper">
      <p class = "text-center"> No tienes convenios registrados, regresa en otro momento. </p>
    </div>
    -->
    <div class = "table-container card">
      <header class = "mb-1"> Mis convenios </header>
      <table class = "table mt-4">
        <thead>
          <tr>
            <th> </th>
            <th> Nombre de la empresa </th>
            <th> Número de teléfono </th>
            <th> Correo electrónico </th>
            <th> Fecha </th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-label = "Picture"> <img src = "../assets/Logo-ITM.png"> </td>
            <td data-label = "Company Name"> Instituto Tecnológico de Mexicali </td>
            <td data-label = "Phone Number"> 686 580-4980 </td>
            <td data-label = "E-Mail"> direccion@itmexicali.edu.mx </td>
            <td data-label = "Date"> 2023 </td>
            <td data-label = "Actions"> <a ref = "#" class = "btnVer"> <i class = 'bx bx-info-circle'> </i> </a> </td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<style scoped>
  @import '@/styles/misConvenios.css';
</style>