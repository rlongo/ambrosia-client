<template>
  <div id="app">
    <navbar />
    <br />
    <router-view />
  </div>
</template>

<script>
import navbar from "./components/Navbar";

export default {
  name: "App",
  components: {
    navbar
  }
};
</script>

<style lang="scss">
body {
  background: $theme;
}
</style>
