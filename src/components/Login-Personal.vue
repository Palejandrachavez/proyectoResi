<template>
        <div class = "wrapper card">
      <div class = "d-flex justify-content-center">
        <img src = "assets/Logo-ITM.png" alt = "logo-itm" class = "max-w-full">
      </div>
      <ul class = "nav nav-pills">
        <li @click = "goToStudents" class = "nav-item me-1">
          <a class = "nav-link"> Estudiantes </a>
        </li>
        <li class = "nav-item me-1">
          <a class = "nav-link active"> Personal </a>
        </li>
        <li @click = "goToCompanies" class = "nav-item">
          <a class = "nav-link"> Empresas </a>
        </li>
      </ul>
      <form>
        <div class = "input-group">
          <input type = "text" v-model = "User" placeholder = "Número de control" required>
        </div>
        <div class = "input-group">
          <input type = "password" v-model = "Password" placeholder = "Contraseña" required>
        </div>
        <div class = "buttons">
          <button type = "submit" class = "btnLogin">
            <span class = "btnText"> Iniciar sesión </span>
          </button>
          <button type = "submit" class = "btnSignIn mt-3">
            <span class = "btnText"> Registrarse </span>
          </button>
        </div>
      </form>
    </div>
</template>

<script>
  export default {
    name: 'Login-Personal',
    methods: {
      goToStudents() {
        this.$router.replace('/login-alumno');
      },
      goToCompanies() {
        this.$router.replace('/login-empresa');
      }
    }
  }
</script>

<style scoped>
  @import '@/styles/login.css';
</style>