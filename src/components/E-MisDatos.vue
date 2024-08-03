<template>
  <div class = "mis-datos">
    <div class = "wrapper card">
      <header class = "header"> Información del perfil </header>
      <form class = "form" action = "#">
        <div class = "d-flex justify-content-center">
          <div id = "profile-picture" class = "image text-center">
            <span class = "picture"> <img class = "init-img" src = "../assets/camera.png" alt = "profile-picture"> </span>
          </div>
        </div>
        <div class = "account-details">
          <span class = "title mt-4"> Detalles de la cuenta </span>
          <div class = "fields">
            <div class = "input-field">
              <label class = "label"> RFC </label>
              <input class = "input" type = "text" placeholder = "RFC" required>
            </div>
            <div class = "input-field">
              <label class = "label"> Correo electrónico </label>
              <input class = "input" type = "text" placeholder = "Correo electrónico" required>
            </div>
            <div class = "input-field">
              <label class = "label"> Confirmar correo electrónico </label>
              <input class = "input" type = "text" placeholder = "Confirmar correo electrónico" required>
            </div>
            <div class = "input-field">
              <label class = "label"> Número de convenio </label>
              <input class = "input" type = "text" placeholder = "Número de convenio" required>
            </div>
            <div class = "input-field">
              <label class = "label"> Contraseña </label>
              <input class = "input" type = "password" placeholder = "Contraseña" required>
            </div>
            <div class = "input-field">
              <label class = "label"> Confirmar contraseña </label>
              <input class = "input" type = "password" placeholder = "Confirmar contraseña" required>
            </div>
          </div>
        </div>
        <div class = "personal-details">
          <span class = "title mt-3"> Detalles personales </span>
          <div class = "fields2">
            <div class = "input-field">
              <label class = "label"> Nombre </label>
              <input class = "input" type = "text" placeholder = "Nombre" required>
            </div>
            <div class = "input-field">
              <label class = "label"> Giro o ramo </label>
              <input class = "input" type = "text" placeholder = "Giro o ramo" required>
            </div>
            <div class = "input-field">
              <label class = "label"> Sector </label>
              <input class = "input" type = "text" placeholder = "Sector" required>
            </div>
            <div class = "input-field">
              <label class = "label"> Domicilio </label>
              <input class = "input" type = "text" placeholder = "Domicilio" required>
            </div>
            <div class = "input-field">
              <label class = "label"> Colonia </label>
              <input class = "input" type = "text" placeholder = "Colonia" required>
            </div>
            <div class = "input-field">
              <label class = "label"> Código postal </label>
              <input class = "input" type = "number" placeholder = "Código postal" required>
            </div>
            <div class = "input-field">
              <label class = "label"> Ciudad </label>
              <input class = "input" type = "text" placeholder = "Ciudad" required>
            </div>
            <div class = "input-field">
              <label class = "label"> Teléfono (no celular) </label>
              <input class = "input" type = "number" placeholder = "Teléfono (no celular)" required>
            </div>
            <div class = "input-field">
              <label class = "label"> FAX </label>
              <input class = "input" type = "text" placeholder = "FAX" required>
            </div>
            <div class = "input-field">
              <label class = "label"> Apellido paterno del titular </label>
              <input class = "input" type = "text" placeholder = "Apellido paterno del titular" required>
            </div>
            <div class = "input-field">
              <label class = "label"> Apellido materno del titular </label>
              <input class = "input" type = "text" placeholder = "Apellido materno del titular" required>
            </div>
            <div class = "input-field">
              <label class = "label"> Nombre(s) del titular </label>
              <input class = "input" type = "text" placeholder = "Nombre(s) del titular" required>
            </div>
            <div class = "input-field">
              <label class = "label"> Puesto del titular </label>
              <input class = "input" type = "text" placeholder = "Puesto del titular" required>
            </div>
            <div class = "input-field input-field2">
              <label class = "label"> Misión de la empresa </label>
              <input class = "input" type = "text" placeholder = "Misión de la empresa" required>
            </div>
          </div>
        </div>
        <div class = "buttons">
          <button type = "submit" class = "button btnEdit">
            <span class = "btnText"> Editar </span>
          </button>
          <button type = "submit" class = "button btnSave">
            <span class = "btnText"> Guardar </span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
  @import '../styles/registro.css';
</style>