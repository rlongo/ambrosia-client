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
      loading: "ambrosia/getIsLoading",
      myRecipe: "ambrosia/getRecipe"
    })
  },
  methods: {
    isLoaded: function() {
      return !this.loading;
    },
    ...mapActions({
      loadRecipe: "ambrosia/getRecipe"
    })
  },
  mounted: function() {
    this.loadRecipe();
  }
};
</script>
