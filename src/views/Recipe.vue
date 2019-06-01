<template>
  <div class="recipe">
    <RecipeHeader v-bind:recipe="recipe"></RecipeHeader>
    <Stage v-for="stage in recipe.stages" v-bind:key="stage.name" v-bind:stage="stage"></Stage>
  </div>
</template>

<script>
import RecipeHeader from '../components/RecipeHeader';
import Stage from '../components/Stage';

export default {
  name: "Recipe",
  components: {RecipeHeader, Stage},
  props: ["recipe"]
}
</script>

<style lang="scss" scoped>
.recipe {
  margin: 2%;
}
</style>
