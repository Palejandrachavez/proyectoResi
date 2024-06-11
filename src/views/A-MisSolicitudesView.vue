<template>
  <div>
    <MisSolicitudes @generarSolicitud = "generarSolicitud"/>
  </div>
</template>

<script>
  import MisSolicitudes from '@/components/A-MisSolicitudes.vue'
  export default {
    name: 'A-MisSolicitudesView',
    components: {
      MisSolicitudes
    },
    methods: {
      generarSolicitud() {
        this.$router.replace({name: 'propuesta-solicitud'});
      }
    }
  }
</script>