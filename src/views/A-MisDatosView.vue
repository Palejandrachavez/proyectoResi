<template>
  <div>
   
    <MisDatos/>
  </div>
</template>

<script> /*import MisSolicitudes from '@/components/A-MisSolicitudes.vue'
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
}*/
  import MisDatos from '@/components/A-MisDatos.vue'
  export default {
   
    components: {
     MisDatos
    },
    name: 'A-MisDatosView',
  }
</script>