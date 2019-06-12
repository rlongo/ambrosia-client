<template>
  <div class="recipe-info">
    <h1 class="name">{{ myRecipe.name }}</h1>
    <h5 class="author">{{ myRecipe.author }}</h5>
    <div class="tags">
      <a
        class="tag pure-button"
        v-for="tag in myRecipe.tags"
        v-bind:key="tag"
        v-on:click="goToTag(tag)"
        >#{{ tag }}</a
      >
    </div>
    <p class="notes">{{ myRecipe.notes }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "RecipeHeader",
  computed: {
    ...mapGetters({
      myRecipe: "ambrosia/getRecipe"
    })
  },
  methods: {
    goToTag: function(event) {
      console.log(event);
    }
  }
};
</script>

<style lang="scss" scoped>
.name {
  margin-bottom: 0;
}

.author {
  margin: 0.2em 0;
}

.tags {
  font-size: 0.8em;
  font-style: italic;
  margin-bottom: 3vh;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  .tag {
    margin: 1%;
    padding: 1%;

    @media screen and (min-width: 64em) {
      padding: 10px;
      margin: 5px;
    }

    background: $theme;
    border: 1px solid $purple;
    color: $theme-font;
    border-radius: 4px;
  }
}

.notes {
  font-size: 0.9em;
  text-align: left;
}
</style>
