<template>
  <div>
    <ConsultaProyecto @verComentarios = "verComentarios"/>
  </div>
</template>

<script>
  import ConsultaProyecto from '@/components/PG-ConsultaProyecto.vue'
  export default {
    name: 'PG-ConsultaProyectoView',
    components: {
      ConsultaProyecto
    },
    methods: {
      verComentarios() {
        this.$router.push({name: 'observaciones-proyecto'});
      }
    }
  }
</script>