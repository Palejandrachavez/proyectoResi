<template>
  <div>

    <router-view/>
  </div>
</template>

<script>
import LoginAlumno from '@/components/Login-Alumno.vue'
  export default {
  components: { LoginAlumno },
    name: 'LoginView',
   
  }
</script>
