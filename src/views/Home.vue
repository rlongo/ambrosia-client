<template>
  <div class="home">
    <Recipe v-bind:recipe="myrecipe" v-bind:key="myrecipe.name"></Recipe>
  </div>
</template>

<script>
import Recipe from "./Recipe";
import { Ambrosia } from "../ambrosia/ambrosia";

export default {
  name: "home",
  components: {
    Recipe
  },
  data: function() {
    return {
      ambrosia: new Ambrosia(),
      myrecipe: {name: "loading"}
    };
  },
  methods: {
    loadRecipe: function() {
      this.myrecipe = this.ambrosia.getRecipe();
      console.log("Got Recipe:", this.myrecipe.name);
    }
  },
  mounted: function() {
    this.loadRecipe();
  }
};
</script>
