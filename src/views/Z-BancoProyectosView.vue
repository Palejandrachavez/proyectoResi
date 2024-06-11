<template>
  <div>
    <BancoProyectos @verProyecto = "verProyecto"/>
  </div>
</template>

<script>
  import BancoProyectos from '@/components/Z-BancoProyectos.vue'
  export default {
    name: 'Z-BancoProyectosView',
    components: {
      BancoProyectos
    },
    methods: {
      verProyecto() {
        this.$router.push({name: 'consulta-proyecto-banco'});
      }
    }
  }
</script>