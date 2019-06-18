<template>
  <nav class="navbar is-info" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link class="navbar-item" v-bind:to="'/'">
        <h1 class="title">Ambrosia</h1>
      </router-link>

      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
        v-on:click="toggleMenuEvent"
        v-bind:class="{ 'is-active': isOpen }"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div class="navbar-menu" v-bind:class="{ 'is-active': isOpen }">
      <div class="navbar-start">
        <router-link class="navbar-item" v-bind:to="'/'">
          Cart
        </router-link>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <router-link class="navbar-item" v-bind:to="'/recipe/new'">
              <button class="button is-primary">New</button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "navbar",
  data: function() {
    return {
      isOpen: false
    };
  },
  methods: {
    toggleMenuEvent: function(event) {
      this.toggleMenu();
      event.preventDefault();
    },
    toggleMenu: function() {
      this.isOpen = !this.isOpen;
    }
  }
};
</script>

<style></style>
