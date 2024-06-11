<template>
  <div>
    <MisRevisiones @verProyecto = "verProyecto"  @escribirComentarios = "escribirComentarios"/>
  </div>
</template>

<script>
  import MisRevisiones from '@/components/PA-MisRevisiones.vue'
  export default {
    name: 'PA-MisRevisionesView',
    components: {
      MisRevisiones
    },
    methods: {
      verProyecto() {
        this.$router.push({name: 'revision-proyecto'});
      },
      escribirComentarios() {
        this.$router.push({name: 'observaciones-proyecto'});
      }
    }
  }
</script>