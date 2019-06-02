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
      this.ambrosia.getRecipes()
        .then(response => {
          if (response.data && response.data.length > 0) {
            this.myrecipe = response.data[0];
          }
        })
        .catch(err => {
          console.log("error" + err);
        });
    }
  },
  mounted: function() {
    this.loadRecipe();
  }
};
</script>
