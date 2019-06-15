<template>
  <div class="container">
    <h1 class="title is-1">New Recipe</h1>
    <form>
      <recipe-layout v-bind:numStages="getNumStages()">
        <template v-slot:header>
            <recipe-form-header></recipe-form-header>
        </template>

        <template v-slot:stage-header="slotProps">
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">Stage {{ slotProps.idStage + 1 }}</label>
            </div>
            <div class="field-body">
              <div class="field">
                <div class="control">
                  <textarea
                    class="textarea"
                    rows="2"
                    placeholder="stage summary"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </template>

        <template v-slot:ingredients="slotProps">
          <recipe-form-ingredients class=""></recipe-form-ingredients>
        </template>

        <template v-slot:steps="slotProps">
          <recipe-form-steps class=""></recipe-form-steps>
        </template>
      </recipe-layout>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import RecipeLayout from "../components/RecipeLayout";
import RecipeFormHeader from "./recipe/Header.Form"
import RecipeFormIngredients from "./recipe/Ingredients.Form"
import RecipeFormSteps from "./recipe/Steps.Form.vue"

export default {
  name: "recipe-form",
  components: {
    RecipeLayout,
    'recipe-form-header': RecipeFormHeader,
    'recipe-form-ingredients': RecipeFormIngredients,
    'recipe-form-steps': RecipeFormSteps
  },
  computed: {},
  methods: {
    ...mapActions({
      loadRecipe: "ambrosia/getRecipe"
    }),
    getNumStages: function() {
      return 3;
    }
  },
  data() {
    return {
    };
  },
  mounted: function() {
  }
};
</script>