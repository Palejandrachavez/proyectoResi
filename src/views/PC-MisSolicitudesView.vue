<template>
  <div>
    <MisSolicitudes @verSolicitud = "verSolicitud"/>
  </div>
</template>

<script>
  import MisSolicitudes from '@/components/PC-MisSolicitudes.vue'
  export default {
    name: 'PC-MisSolicitudesView',
    components: {
      MisSolicitudes
    },
    methods: {
      verSolicitud() {
        this.$router.push({name: 'consulta-solicitud'});
      },
    }
  }
</script>