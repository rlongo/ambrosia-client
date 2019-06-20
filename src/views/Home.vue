<template>
  <div class="container">
    <div class="columns is-vcentered">
      <vue-tags-input
        class="input"
        v-model="tag"
        :allow-edit-tags="true"
        @tags-changed="onNewTags"
      />
    </div>

    <div class="card" v-for="recipe in recipes" v-bind:key="recipe._id">
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img
                src="https://bulma.io/images/placeholders/96x96.png"
                alt="Placeholder image"
              />
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4">{{ recipe.name }}</p>
            <p class="subtitle is-6">{{ recipe.author }}</p>
          </div>
        </div>

        <div class="content">
          {{ recipe.notes }}
        </div>
      </div>
      <footer class="card-footer">
        <a href="#" class="card-footer-item">
          Planner<font-awesome-icon icon="cart-plus"
        /></a>
        <router-link
          :to="{ name: 'recipe', params: { recipeID: recipe._id } }"
          class="card-footer-item"
          >View<font-awesome-icon icon="file"
        /></router-link>
        <router-link :to="{ name: 'home' }" class="card-footer-item"
          >Edit<font-awesome-icon icon="edit"
        /></router-link>
      </footer>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import VueTagsInput from "@johmun/vue-tags-input";

export default {
  name: "home",
  components: {
    VueTagsInput
  },
  data() {
    return {
      tag: ""
    };
  },
  computed: {
    ...mapGetters({
      recipes: "ambrosia/getRecipes"
    })
  },
  methods: {
    ...mapActions({
      loadRecipes: "ambrosia/loadRecipes",
      clearRecipes: "ambrosia/clearRecipes"
    }),
    onNewTags: function(tags) {
      tags = tags.map(t => t.text);
      if (tags.length > 0) {
        this.loadRecipes(tags);
      } else {
        this.clearRecipes();
      }
    }
  },
  created: function() {
    this.clearRecipes();
  }
};
</script>

.<style lang="scss" scoped>
vue-tags-input {
  margin: 0 auto;
}

.card {
  margin: 5%;
}
</style>
