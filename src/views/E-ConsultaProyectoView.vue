<template>
  <div>
    <ConsultaProyecto @verComentarios = "verComentarios"/>
  </div>
</template>

<script>
  import ConsultaProyecto from '@/components/E-ConsultaProyecto.vue'
  export default {
    name: 'E-ConsultaProyectoView',
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