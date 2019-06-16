<template>
  <div id="app">
    <navbar />
    <br />
    <router-view />
    <br />
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          <strong>Ambrosia</strong> made with
          <font-awesome-icon class="made-with-love" icon="heart" /> by
          <a href="https://github.com/rlongo/ambrosia">rlongo</a>.
        </p>

        <p>
          The source code is licensed
          <a
            href="https://raw.githubusercontent.com/rlongo/ambrosia/master/LICENSE"
            >GNU General Public License v3.0</a
          >.
        </p>
      </div>
    </footer>
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
.made-with-love {
  color: $red;
}
</style>
