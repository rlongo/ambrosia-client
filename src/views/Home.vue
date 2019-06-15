<template>
  <div v-if="isLoaded" class="home">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus illum beatae velit a quisquam corporis saepe minus eveniet inventore eum ducimus corrupti enim perferendis, optio sunt ullam quibusdam quam incidunt.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit alias aut soluta quod voluptate. Quia eaque nesciunt, autem quis, in amet dolor magnam sint consectetur, sapiente porro adipisci eius aperiam!
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus sequi quasi magnam corrupti sunt consequatur labore fuga a corporis dignissimos reiciendis, rerum reprehenderit, veritatis hic quisquam rem nobis, quibusdam illum.
  
    
  
  </div>
  
</template>

<script>
import { mapGetters, mapActions } from "vuex";
// import Recipe from "./recipe/Recipe";

export default {
  name: "home",
  components: {
    // Recipe
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
