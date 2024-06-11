<template>
  <div>
    <MisPostulaciones @verProyecto = "verProyecto"/>
  </div>
</template>

<script>
  import MisPostulaciones from '@/components/A-MisPostulaciones.vue'
  export default {
    name: 'A-MisPostulacionesView',
    components: {
      MisPostulaciones
    },
    methods: {
      verProyecto() {
        this.$router.push({name: 'consulta-postulacion'});
      }
    }
  }
</script>