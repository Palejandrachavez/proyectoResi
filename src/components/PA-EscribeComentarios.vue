<template>
  <div class = "consulta comments">
    <div class = "wrapper card">
      <div class = "header">
        <div class = "header-left">
          <span> <img src = "@/assets/logo-itm.png"> </span>
        </div>
        <div class = "header-center">
          <h3> Gestión de Proyectos y Convenios para Residencias Profesionales </h3>
          <p class = "header-details"> Instituto Tecnológico de Mexicali </p>
        </div>
      </div>
      <form action = "#">
        <div class = "comment-details mt-2">
          <span class = "title"> Comentarios y observaciones </span>
          <div class = "fields">
            <div class = "input-field input-field3">
              <textarea placeholder = "Comentarios y observaciones"></textarea>
            </div>
          </div>
        </div>
        <div class = "buttons mt-4 mb-3 d-flex justify-content-end">
          <button class = "btnUpdate">
            <span class = "btnText"> Actualizar </span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
  @import '@/styles/consulta.css';
</style>