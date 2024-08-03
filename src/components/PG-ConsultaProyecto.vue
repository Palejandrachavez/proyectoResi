<template>
  <div class = "consulta">
    <div class = "wrapper card">
      <div class = "header">
        <div class = "header-left">
          <span> <img src = "../assets/Logo-ITM.png"> </span>
        </div>
        <div class = "header-center">
          <h3> Gestión de Proyectos y Convenios para Residencias Profesionales </h3>
          <p class = "header-details"> Instituto Tecnológico de Mexicali </p>
          <div class = "buttons">
            <select class = "statusDropdown" disabled>
              <option value = "en-revision"> En revisión </option>
              <option value = "aprobado"> Aprobado </option>
              <option value = "rechazado"> Rechazado </option>
            </select>
            <button class = "btnDelete">
              <i class = 'bx bx-trash'> </i>
            </button>
            <button @click = "verComentarios" class = "btnComments">
              <i class = 'bx bx-detail'> </i>
            </button>
          </div>
        </div>
      </div>
      <form action = "#">
        <div class = "general-details mt-4">
          <span class = "title"> Detalles generales </span>
          <div class = "fields mt-2">
            <div class = "input-field">
              <label> Carrera solicitada </label>
              <input type = "text" placeholder = "Carrera solicitada" disabled>
            </div>
            <div class = "input-field">
              <label> Número de residentes requeridos </label>
              <input type = "text" placeholder = "Número de residentes requeridos" disabled>
            </div>
            <div class = "input-field">
              <label> Período proyectado </label>
              <input type = "text" placeholder = "Período proyectado" disabled>
            </div>
            <div class = "input-field input-field2">
              <label> Asesor externo </label>
              <input type = "text" placeholder = "Asesor externo" disabled>
            </div>
            <div class = "input-field input-field2">
              <label> Puesto del asesor </label>
              <input type = "text" placeholder = "Puesto del asesor" disabled>
            </div>
            <div class = "input-field input-field2">
              <label> Persona que firmará el acuerdo de trabajo </label>
              <input type = "text" placeholder = "Persona que firmará el acuerdo de trabajo" disabled>
            </div>
            <div class = "input-field input-field2">
              <label> Puesto del firmante </label>
              <input type = "text" placeholder = "Puesto del firmante" disabled>
            </div>
          </div>
          <div class = "project-details mt-3">
            <span class = "title"> Detalles del proyecto</span>
            <div class = "fields mt-2">
              <div class = "input-field input-field3">
                <label> Nombre del proyecto </label>
                <input type = "text" placeholder = "Nombre del proyecto" disabled>
              </div>
              <div class = "input-field input-field3">
                <label> Objetivo del proyecto </label>
                <textarea placeholder = "Objetivo del proyecto" disabled></textarea>
              </div>
              <div class = "input-field input-field3">
                <label> Justificación del proyecto </label>
                <textarea placeholder = "Justificación del proyecto" disabled></textarea>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'E-ConsultaProyecto',
    methods: {
      verComentarios() {
        this.$emit('verComentarios');
      }
    }
  }
</script>

<style scoped>
  @import '../styles/consulta.css';
</style>