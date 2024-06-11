<template>
  <div>
    <RevisionProyecto @escribirComentarios = "escribirComentarios"/>
  </div>
</template>

<script>
  import RevisionProyecto from '@/components/PA-RevisionProyecto.vue'
  export default {
    name: 'PA-RevisionProyectoView',
    components: {
      RevisionProyecto
    },
    methods: {
      escribirComentarios() {
        this.$router.push({name: 'observaciones-proyecto'});
      }
    }
  }
</script>