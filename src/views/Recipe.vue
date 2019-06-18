<template>
  <div v-if="isLoaded()" class="container">
    <recipe-layout v-bind:numStages="getNumStages()">
      <template v-slot:header>
        <h1 class="title">{{ myRecipe.name }}</h1>
        <h5 class="subtitle">{{ myRecipe.author }}</h5>
        <div class="tags">
          <a
            class="tag is-link"
            v-for="tag in myRecipe.tags"
            v-bind:key="tag"
            v-on:click="goToTag(tag)"
            >#{{ tag }}</a
          >
        </div>
        <p class="notes">{{ myRecipe.notes }}</p>
      </template>

      <template v-slot:stage-header="slotProps">
        <h2 class="title is-3">
          {{ myRecipe.stages[slotProps.idStage].name }}
        </h2>
        <h5 class="subtitle is-6">
          {{ myRecipe.stages[slotProps.idStage].notes }}
        </h5>
      </template>

      <template v-slot:ingredients="slotProps">
        <table class="table is-striped is-narrow is-hoverable">
          <tbody>
            <tr
              v-for="ingredient in myRecipe.stages[slotProps.idStage]
                .ingredients"
              v-bind:key="ingredient.name"
            >
              <td>{{ ingredient.name }}</td>
              <td>
                {{ ingredient.quantity }} <i>{{ ingredient.unit }}</i>
              </td>
            </tr>
          </tbody>
        </table>
      </template>

      <template v-slot:steps="slotProps">
        <ol class="content">
          <li
            class="step"
            v-for="step in myRecipe.stages[slotProps.idStage].steps"
            v-bind:key="step"
          >
            {{ step }}
          </li>
        </ol>
      </template>
    </recipe-layout>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import RecipeLayout from "../components/RecipeLayout";

export default {
  name: "recipe",
  components: {
    RecipeLayout
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
      loadRecipe: "ambrosia/loadRecipe"
    }),
    getNumStages: function() {
      if (this.loading) {
        return 0;
      }

      return this.myRecipe.stages.length;
    }
  },
  created: function() {
    this.loadRecipe();
  }
};
</script>
