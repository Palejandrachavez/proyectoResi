<template>
  <div>
    <MisCandidatos @verProyecto = "verProyecto" @verCandidatos = "verCandidatos"/>
  </div>
</template>

<script>
  import MisCandidatos from '@/components/PG-MisCandidatos.vue'
  export default {
    name: 'PG-MisCandidatosView',
    components: {
      MisCandidatos
    },
    methods: {
      verProyecto() {
        this.$router.push({name: 'consulta-proyecto'});
      },
      verCandidatos() {
        this.$router.push({name: 'consulta-candidatos'});
      }
    }
  }
</script>