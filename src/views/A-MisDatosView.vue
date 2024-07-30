<template>
  <div>
    <h1>HOLIS</h1>
    <router-view/>
  </div>
</template>

<script>
  import MisDatos from '@/components/A-MisDatos.vue'
  export default {
   
    components: {
      MisDatos
    },
    name: 'A-MisDatosView',
  }
</script>