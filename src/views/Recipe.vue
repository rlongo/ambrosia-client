<template>
  <div class="recipe">
    <RecipeHeader></RecipeHeader>
    <Stage
      v-for="stage in myRecipe.stages"
      v-bind:key="stage.name"
      v-bind:stage="stage"
    ></Stage>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import RecipeHeader from "../components/RecipeHeader";
import Stage from "../components/Stage";

export default {
  name: "Recipe",
  components: { RecipeHeader, Stage },
  computed: {
    ...mapGetters({
      myRecipe: "getRecipe"
    })
  }
};
</script>

<style lang="scss" scoped>
.recipe {
  margin: 2%;
}
</style>
