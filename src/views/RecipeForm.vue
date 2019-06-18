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
            <!-- TODO add in stage name and notes
              <div class="field-body">
              <div class="field">
                <div class="control">
                  <textarea
                    class="textarea"
                    rows="2"
                    placeholder="stage summary"
                    v-model="stageSummary[slotProps.idStage]"
                    v-on:change="onStageMetaChanged(slotProps.idStage)"
                  ></textarea>
                </div>
              </div>
            </div> -->
          </div>
        </template>

        <template v-slot:ingredients="slotProps">
          <recipe-form-ingredients
            :idStage="slotProps.idStage"
          ></recipe-form-ingredients>
        </template>

        <template v-slot:steps="slotProps">
          <recipe-form-steps :idStage="slotProps.idStage"></recipe-form-steps>
        </template>

        <template v-slot:recipe-footer>
          <div class="field">
            <div class="control">
              <a class="button is-success is-pulled-right" @click="addStage"
                >Add Stage</a
              >
            </div>
          </div>
          <div class="field">
            <div class="control">
              <a class="button is-link is-large" @click="submitRecipe"
                >Submit</a
              >
            </div>
          </div>
        </template>
      </recipe-layout>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Recipe from "../ambrosia/recipe";
import RecipeLayout from "../components/RecipeLayout";
import RecipeFormHeader from "./recipe/Header.Form";
import RecipeFormIngredients from "./recipe/Ingredients.Form";
import RecipeFormSteps from "./recipe/Steps.Form.vue";

export default {
  name: "recipe-form",
  components: {
    RecipeLayout,
    "recipe-form-header": RecipeFormHeader,
    "recipe-form-ingredients": RecipeFormIngredients,
    "recipe-form-steps": RecipeFormSteps
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      myRecipe: "scratchpad/getRecipe"
    })
  },
  methods: {
    ...mapActions({
      setScratchpad: "scratchpad/setScratchpad",
      addStage: "scratchpad/addRecipeStage",
      commitRecipe: "scratchpad/commitRecipe"
    }),
    getNumStages: function() {
      if (!Array.isArray(this.myRecipe.stages)) {
        return 0;
      }

      return this.myRecipe.stages.length;
    },
    appendStage: function() {},
    submitRecipe: function() {
      this.commitRecipe();
    }
  },
  created: function() {
    // TODO will want a way of passing in a recipe here instead of starting from scratch
    this.setScratchpad(new Recipe());
    this.addStage();
  }
};
</script>
