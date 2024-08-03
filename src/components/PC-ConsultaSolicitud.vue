<template>
  <div class = "consulta">
    <div class = "wrapper card">
      <header> Solicitud de residencia </header>      
      <form action = "#">
        <div class = "general-details">
          <span class = "title mt-2"> Detalles generales </span>
          <div class = "fields">
            <div class = "input-field input-field2">
              <label> Lugar de la solicitud </label>
              <input type = "text" placeholder = "Lugar de la solicitud" disabled>
            </div>
            <div class = "input-field input-field2">
              <label> Fecha de la solicitud </label>
              <input type = "date" placeholder = "Fecha de la solicitud" disabled>
            </div>
            <div class = "input-field input-field2">
              <label> Jefe de la división de estudios profesionales </label>
              <input type = "text" placeholder = "Jefe de la división de estudios profesionales" disabled>
            </div>
            <div class = "input-field input-field2">
              <label> Coordinador de la carrera </label>
              <input type = "text" placeholder = "Coordinador de la carrera" disabled>
            </div>
          </div>
        </div>
        <div class = "project-details">
          <span class = "title mt-3"> Detalles del proyecto </span>
          <div class = "fields">
            <div class = "input-field">
              <label> Opción elegida </label>
              <input type = "text" placeholder = "Opción elegida" disabled>
            </div>
            <div class = "input-field">
              <label> Número de residentes requeridos </label>
              <input type = "text" placeholder = "Número de residentes requeridos" disabled>
            </div>
            <div class = "input-field">
              <label> Período proyectado </label>
              <input type = "text" placeholder = "Período proyectado" disabled>
            </div>
            <div class = "input-field input-field3">
              <label> Nombre del proyecto </label>
              <input type = "text" placeholder = "Nombre del proyecto" disabled>
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
        </div>
        <div class = "student-details">
          <span class = "title mt-3"> Detalles del estudiante </span>
          <div class = "fields">
            <div class = "input-field">
              <label> Número de control </label>
              <input type = "text" placeholder = "Número de control" disabled>
            </div>
            <div class = "input-field">
              <label> Correo electrónico </label>
              <input type = "text" placeholder = "Correo electrónico" disabled>
            </div>
            <div class = "input-field">
              <label> Carrera </label>
              <input type = "text" placeholder = "Carrera" disabled>
            </div>
            <div class = "input-field input-field4">
              <label> Nombre </label>
              <input type = "text" placeholder = "Nombre" disabled>
            </div>
            <div class = "input-field">
              <label> Teléfono </label>
              <input type = "number" placeholder = "Teléfono" disabled>
            </div>
            <div class = "input-field">
              <label> Tipo de seguridad social </label>
              <input type = "text" placeholder = "Tipo de seguridad social" disabled>
            </div>
            <div class = "input-field">
              <label> Número de seguridad social </label>
              <input type = "number" placeholder = "Número de seguridad social" disabled>
            </div>
            <div class = "input-field">
              <label> Domicilio </label>
              <input type = "text" placeholder = "Domicilio" disabled>
            </div>
          </div>
        </div>
        <div class = "company-details">
          <span class = "title mt-3"> Detalles de la empresa </span>
          <div class = "fields">
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
        <div class = "buttons mt-4 mb-3 d-flex justify-content-end">
          <button class = "btnPrint">
            <span class = "btnText"> <i class = 'bx bx-printer'> </i> Imprimir </span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
  @import '../styles/consulta.css';
</style>