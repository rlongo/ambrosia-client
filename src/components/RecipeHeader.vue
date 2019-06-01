<template>
  <div class="recipe-info">
    <h1 class="name">{{recipe.name}}</h1>
    <h5 class="author">{{recipe.author}}</h5>
    <div class="tags">
      <span class="tag" v-for="tag in recipe.tags" v-bind:key="tag">{{tag}}</span>
    </div>
    <p class="notes">{{recipe.notes}}</p>
  </div>
</template>

<script>
import Stage from '../components/Stage';

export default {
  name: "RecipeHeader",
  components: {Stage},
  props: ["recipe"]
}
</script>

<style lang="scss" scoped>
.name {
    margin-bottom: 0;
}

.author {
  margin: 0.2em 0;
}

.tags {
  font-size: 0.85rem;
  font-style: italic;
  margin-bottom: 3vh;
  
  .tag {
    margin-right: 1vw;
  }
}
 
.notes {
  font-size: 0.9rem;
  text-align: left;
}
</style>
