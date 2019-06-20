<template>
  <div id="app">
    <navbar />
    <br />
    <router-view />
    <br />
    <bottom />
  </div>
</template>

<script>
import navbar from "./components/Navbar";
import bottom from "./components/Footer";

export default {
  name: "App",
  components: {
    navbar,
    bottom
  }
};
</script>
