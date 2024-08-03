<template>
  <div class = "mis-datos">
    <div class = "wrapper card">
      <header class = "header"> Información del perfil </header>
      <form class = "form" action = "#">
        <div class = "d-flex justify-content-center">
          <div id = "profile-picture" class = "image text-center">
            <span class = "picture"> <img class = "init-img" src = "../assets/alex.jpg" alt = "profile-picture">  </span>
          </div>
        </div>
        <div class = "account-details">
          <span class = "title mt-4"> Detalles de la cuenta </span>
          <div class = "fields">
            <div class = "input-field">
              <label class = "label"> Número de empleado </label>
              <input class = "input" type = "text" placeholder = "Número de empleado" required>
            </div>
            <div class = "input-field">
              <label class = "label"> Correo institucional </label>
              <input class = "input" type = "text" placeholder = "Correo institucional" required>
            </div>
            <div class = "input-field">
              <label class = "label"> Confirmar correo institucional </label>
              <input class = "input" type = "text" placeholder = "Confirmar correo institucional" required>
            </div>
            <div class = "input-field">
              <label class = "label"> Departamento </label>
              <input class = "input" type = "text" placeholder = "Departamento" required>
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
          <div class = "fields">
            <div class = "input-field">
              <label class = "label"> Apellido paterno </label>
              <input class = "input" type = "text" placeholder = "Apellido paterno" required>
            </div>
            <div class = "input-field">
              <label class = "label"> Apellido materno </label>
              <input class = "input" type = "text" placeholder = "Apellido materno" required>
            </div>
            <div class = "input-field">
              <label class = "label"> Nombre(s) </label>
              <input class = "input" type = "text" placeholder = "Nombres(s)" required>
            </div>
            <div class = "input-field">
              <label class = "label"> Teléfono </label>
              <input class = "input" type = "text" placeholder = "Teléfono" required>
            </div>
            <div class = "input-field">
              <label class = "label"> Tipo de seguridad social </label>
              <input class = "input" type = "text" placeholder = "Tipo de seguridad social" required>
            </div>
            <div class = "input-field">
              <label class = "label"> Número de seguridad social </label>
              <input class = "input" type = "number" placeholder = "Número de seguridad social" required>
            </div>
          </div>
        </div>
        <div class = "buttons">
          <button class = "button btnEdit" type = "submit">
            <span class = "btnText"> Editar </span>
          </button>
          <button class = "button btnSave" type = "submit">
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