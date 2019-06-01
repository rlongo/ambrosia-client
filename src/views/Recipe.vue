<template>
  <div class="recipe">
    <h1>{{recipe.name}}</h1>
    <h5>{{recipe.author}}</h5>
    <div class="tags">
      <span class="tag" v-for="tag in recipe.tags" v-bind:key="tag">{{tag}}</span>
    </div>
    <p class="notes">{{recipe.notes}}</p>
    <Stage v-for="stage in recipe.stages" v-bind:key="stage.name" v-bind:stage="stage"></Stage>
  </div>
</template>

<script>
import Stage from '../components/Stage';

export default {
  name: "Recipe",
  components: {Stage},
  props: ["recipe"]
}
</script>

<style lang="scss" scoped>
.tags {
  font-size: 0.85rem;
  font-style: italic;
  margin-bottom: 3vh;
  
  .tag {
    margin-right: 1vw;
  }
}
 
.notes {
  margin: 0 2vw;
  font-size: 0.9rem;
  text-align: left;
}
</style>
