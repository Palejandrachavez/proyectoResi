<template>
  <div class = "consulta">
    <div class = "wrapper card">
      <div class = "header">
        <div class = "header-left">
          <span> <img src = "../assets/logo-itm.png"> </span>
        </div>
        <div class = "header-center">
          <h3> Gestión de Proyectos y Convenios para Residencias Profesionales </h3>
          <p class = "header-details"> Instituto Tecnológico de Mexicali </p>
          <div class = "buttons">
            <button class = "btnApply">
              <span class = "btnText"> Postularse </span>
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
              <input type = "password" placeholder = "Asesor externo" disabled>
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
        <div class = "company-details mt-3">
          <span class = "title"> Detalles de la empresa </span>
          <div class = "fields mt-2">
            <div class = "input-field">
              <label> RFC </label>
              <input type = "text" placeholder = "RFC" disabled>
            </div>
            <div class = "input-field">
              <label> Giro o ramo </label>
              <input type = "text" placeholder = "Giro o ramo" disabled>
            </div>
            <div class = "input-field">
              <label> Sector </label>
              <input type = "text" placeholder = "Sector" disabled>
            </div>
            <div class = "input-field input-field4">
              <label> Nombre de la empresa </label>
              <input type = "text" placeholder = "Nombre de la empresa" disabled>
            </div>
            <div class = "input-field">
              <label> Teléfono </label>
              <input type = "text" placeholder = "Teléfono" disabled>
            </div>
            <div class = "input-field">
              <label> FAX </label>
              <input type = "text" placeholder = "FAX" disabled>
            </div>
            <div class = "input-field">
              <label> Domicilio </label>
              <input type = "text" placeholder = "Domicilio" disabled>
            </div>
            <div class = "input-field">
              <label> Colonia </label>
              <input type = "text" placeholder = "Colonia" disabled>
            </div>
            <div class = "input-field">
              <label> Código postal </label>
              <input type = "text" placeholder = "Código postal" disabled>
            </div>
            <div class = "input-field">
              <label> Titular de la empresa </label>
              <input type = "text" placeholder = "Titular de la empresa" disabled>
            </div>
            <div class = "input-field">
              <label> Puesto del titular </label>
              <input type = "text" placeholder = "Puesto del titular" disabled>
            </div>
            <div class = "input-field input-field3">
              <label> Misión de la empresa </label>
              <textarea placeholder = "Misión de la empresa" disabled></textarea>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
  @import '../styles/consulta.css';
</style>