<template>
  <div class = "mis-datos">
    <div class = "wrapper card">
        <header> Registro de estudiantes </header>      
        <form>
          <div class = "personal-details">
            <span class = "title mt-2"> Detalles personales </span>
            <div class = "fields">
              <div class = "input-field">
                <label> Apellido paterno </label>
                <input type = "text" placeholder = "Apellido paterno" required>
              </div>
              <div class = "input-field">
                <label> Apellido materno </label>
                <input type = "text" placeholder = "Apellido materno" required>
              </div>
              <div class = "input-field">
                <label> Nombre(s) </label>
                <input type = "text" placeholder = "Nombres(s)" required>
              </div>
              <div class = "input-field">
                <label> Domicilio </label>
                <input type = "text" placeholder = "Domicilio" required>
              </div>
              <div class = "input-field">
                <label> Colonia </label>
                <input type = "text" placeholder = "Colonia" required>
              </div>
              <div class = "input-field">
                <label> Código postal </label>
                <input type = "number" placeholder = "Código postal" required>
              </div>
              <div class = "input-field">
                <label> Teléfono </label>
                <input type = "number" placeholder = "Teléfono" required>
              </div>
              <div class = "input-field">
                <label> Tipo de seguridad social </label>
                <input type = "text" placeholder = "Tipo de seguridad social" required>
              </div>
              <div class = "input-field">
                <label> Número de seguridad social </label>
                <input type = "number" placeholder = "Número de seguridad social" required>
              </div>
            </div>
          </div>
          <div class = "account-details">
            <span class = "title mt-3"> Detalles de la cuenta </span>
            <div class = "fields">
              <div class = "input-field">
                <label> Número de control </label>
                <input type = "text" placeholder = "Número de control" required>
              </div>
              <div class = "input-field">
                <label> Correo institucional </label>
                <input type = "text" placeholder = "Correo institucional" required>
              </div>
              <div class = "input-field">
                <label> Confirmar correo institucional </label>
                <input type = "text" placeholder = "Confirmar correo institucional" required>
              </div>
              <div class = "input-field">
                <label> Carrera </label>
                <input type = "text" placeholder = "Carrera" required>
              </div>
              <div class = "input-field">
                <label> Contraseña </label>
                <input type = "password" placeholder = "Contraseña" required>
              </div>
              <div class = "input-field">
                <label> Confirmar contraseña </label>
                <input type = "password" placeholder = "Confirmar contraseña" required>
              </div>
            </div>
          </div>
          <div class = "buttons">
            <p class = "mt-3"> ¿Ya tienes cuenta? Inicia sesión <a @click = "goToStudents" class = "custom-link"> aquí </a> </p>
            <button type = "submit" class = "btnSubmit button">
              <span class = "btnText"> Crear cuenta </span>
            </button>
          </div>
        </form>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'Registro-Alumno',
    methods: {
      goToStudents() {
        this.$router.push('/login-alumno');
      }
    }
  }
</script>

<style scoped>
  @import '../styles/registro.css';
</style>