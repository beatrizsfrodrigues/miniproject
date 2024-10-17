<template>
  <h1>Flockly</h1>
  <Home msg="Welcome to Your Vue.js App" />
</template>

<script>
import Home from "./components/Home.vue";

export default {
  name: "App",
  components: {
    Home,
  },
};
</script>

<style>
body {
  background-color: #dff2d8;
  margin: 0px;
  color: #7a6263;
  padding: 48px;
  font-family: "Quicksand", sans-serif;
}
</style>
