<template>
  <div v-if="isLoaded" class="home">
    <Recipe v-bind:recipe="myRecipe" v-bind:key="myRecipe.name"></Recipe>
  </div>
</template>

<script>
import Recipe from "./Recipe";
import { mapGetters, mapActions } from 'vuex';

export default {
  name: "home",
  components: {
    Recipe
  },
  computed: {...mapGetters({
      loading: 'getIsLoading',
      myRecipe: 'getRecipe'
    })
  },
  methods: {
    isLoaded: function() {
      return !loading;
    },
    ...mapActions({
      loadRecipe: 'getRecipe'
    }),
  },
  mounted: function() {
    this.loadRecipe();
  }
};
</script>
