<template>
  <div v-if="isLoaded" class="home">
    <Recipe></Recipe>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Recipe from "./recipe/Recipe";

export default {
  name: "home",
  components: {
    Recipe
  },
  computed: {
    ...mapGetters({
      loading: "getIsLoading",
      myRecipe: "getRecipe"
    })
  },
  methods: {
    isLoaded: function() {
      return !this.loading;
    },
    ...mapActions({
      loadRecipe: "getRecipe"
    })
  },
  mounted: function() {
    this.loadRecipe();
  }
};
</script>
