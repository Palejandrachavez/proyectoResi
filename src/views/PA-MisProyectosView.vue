<template>
  <div>
    <MisProyectos @verProyecto = "verProyecto"  @agregarProyecto = "agregarProyecto"/>
  </div>
</template>

<script>
  import MisProyectos from '@/components/PA-MisProyectos.vue'
  export default {
    name: 'PA-MisProyectosView',
    components: {
      MisProyectos
    },
    methods: {
      verProyecto() {
        this.$router.push({name: 'consulta-proyecto'});
      },
      agregarProyecto() {
        this.$router.push({name: 'propuesta-proyecto'});
      }
    }
  }
</script>