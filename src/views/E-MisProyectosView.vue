<template>
  <div>
    <MisProyectos @verProyecto = "verProyecto" @verComentarios = "verComentarios" @agregarProyecto = "agregarProyecto"/>
  </div>
</template>

<script>
  import MisProyectos from '@/components/E-MisProyectos.vue'
  export default {
    name: 'E-MisProyectosView',
    components: {
      MisProyectos
    },
    methods: {
      verProyecto() {
        this.$router.push({name: 'consulta-proyecto'});
      },
      verComentarios() {
        this.$router.push({name: 'observaciones-proyecto'});
      },
      agregarProyecto() {
        this.$router.push({name: 'propuesta-proyecto'});
      }
    }
  }
</script>