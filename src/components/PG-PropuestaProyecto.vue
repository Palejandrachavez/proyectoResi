<template>
  <div class = "consulta">
    <div class = "wrapper card">
      <header> Propuesta de anteproyecto </header>
      <form action = "#">
        <div class = "general-details">
          <span class = "title mt-2"> Detalles generales </span>
          <div class = "fields">
            <div class = "input-field">
              <label> Carrera solicitada </label>
              <input type = "text" placeholder = "Carrera solicitada" required>
            </div>
            <div class = "input-field">
              <label> Número de residentes requeridos </label>
              <input type = "text" placeholder = "Número de residentes requeridos" required>
            </div>
            <div class = "input-field">
              <label> Período proyectado </label>
              <input type = "text" placeholder = "Período proyectado" required>
            </div>
            <div class = "input-field input-field2">
              <label> Asesor externo </label>
              <input type = "password" placeholder = "Asesor externo" required>
            </div>
            <div class = "input-field input-field2">
              <label> Puesto del asesor </label>
              <input type = "password" placeholder = "Puesto del asesor" required>
            </div>
            <div class = "input-field input-field2">
              <label> Persona que firmará el acuerdo de trabajo </label>
              <input type = "password" placeholder = "Persona que firmará el acuerdo de trabajo" required>
            </div>
            <div class = "input-field input-field2">
              <label> Puesto del firmante </label>
              <input type = "password" placeholder = "Puesto del firmante" required>
            </div>
          </div>
        </div>
        <div class = "project-details">
          <span class = "title mt-3"> Detalles del proyecto </span>
          <div class = "fields">
            <div class = "input-field input-field3">
              <label> Nombre del proyecto </label>
              <input type = "text" placeholder = "Nombre del proyecto" required>
            </div>
            <div class = "input-field input-field3">
              <label> Objetivo del proyecto </label>
              <textarea placeholder = "Objetivo del proyecto" required></textarea>
            </div>
            <div class = "input-field input-field3">
              <label> Justificación del proyecto </label>
              <textarea placeholder = "Justificación del proyecto" required></textarea>
            </div>
          </div>
        </div>
        <div class = "company-details">
          <span class = "title mt-3"> Detalles de la empresa </span>
          <div class = "fields">
            <div class = "input-field">
              <label> RFC </label>
              <input type = "text" placeholder = "RFC" required>
            </div>
            <div class = "input-field">
              <label> Giro o ramo </label>
              <input type = "text" placeholder = "Giro o ramo" required>
            </div>
            <div class = "input-field">
              <label> Sector </label>
              <input type = "text" placeholder = "Sector" required>
            </div>
            <div class = "input-field input-field4">
              <label> Nombre de la empresa </label>
              <input type = "text" placeholder = "Nombre de la empresa" required>
            </div>
            <div class = "input-field">
              <label> Teléfono </label>
              <input type = "text" placeholder = "Teléfono" required>
            </div>
            <div class = "input-field">
              <label> FAX </label>
              <input type = "text" placeholder = "FAX" required>
            </div>
            <div class = "input-field">
              <label> Domicilio </label>
              <input type = "password" placeholder = "Domicilio" required>
            </div>
            <div class = "input-field">
              <label> Colonia </label>
              <input type = "password" placeholder = "Colonia" required>
            </div>
            <div class = "input-field">
              <label> Código postal </label>
              <input type = "password" placeholder = "Código postal" required>
            </div>
            <div class = "input-field">
              <label> Titular de la empresa </label>
              <input type = "password" placeholder = "Titular de la empresa" required>
            </div>
            <div class = "input-field">
              <label> Puesto del titular </label>
              <input type = "password" placeholder = "Puesto del titular" required>
            </div>
            <div class = "input-field input-field3">
              <label> Misión de la empresa </label>
              <textarea placeholder = "Misión de la empresa" required></textarea>
            </div>
          </div>
        </div>
        <div class = "buttons mt-4 mb-3 d-flex justify-content-end">
          <button class = "btnSubmit">
            <span class = "btnText"> Enviar propuesta </span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
  @import '@/styles/consulta.css';
</style>