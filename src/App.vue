<template>
  <login-view />
</template>

<script>
import LoginView from "./views/LoginView.vue";

export default {
  components: { LoginView },
  name: "App",
};
</script>

<style>
@import "../src/styles/root.css";
</style>
