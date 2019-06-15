<template>
  <div class="container">
    <h1 class="title is-1">New Recipe</h1>
    <form>
      <recipe-layout v-bind:numStages="getNumStages()">
        <template v-slot:header>
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">Overview</label>
            </div>
            <div class="field-body">
              <div class="field">
                <div class="control">
                  <input class="input" type="text" placeholder="Name">
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <input class="input" type="text" placeholder="Author">
                </div>
              </div>
            </div>
          </div>

          <div class="field is-horizontal">
            <div class="field-label"></div>
            <div class="field-body">
              <div class="field is-expanded">
                <div class="field has-addons">
                  <p class="control is-expanded">
                    <textarea class="textarea" rows="3" placeholder="recipe summary"></textarea>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </template>

        <template v-slot:stage-header="slotProps">
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">Stage {{slotProps.idStage+1}}</label>
            </div>
            <div class="field-body">
              <div class="field">
                <div class="control">
                  <textarea class="textarea" rows="2" placeholder="stage summary"></textarea>
                </div>
              </div>
            </div>
          </div>
        </template>

        <template v-slot:ingredients="slotProps">
          <h3 class="title">Ingredients</h3>

            <div class="field">
                <div class="control has-icons-right">
                    <input class="input" type="text" placeholder="qty unit name">
                    <span class="icon is-medium is-right">
                    <a class="delete"></a>
                    </span>
                </div>
                <br/>
                <div class="control">
                    <a class="button is-success">Add Ingredient</a>
                </div>
            </div>

        </template>

        <template v-slot:steps="slotProps">
          <h3 class="title">Steps</h3>
            <div class="field">
                <div class="control has-icons-right">
                    <textarea class="textarea" rows="2" placeholder="steps summary"></textarea>
                    <span class="icon is-medium is-right">
                    <a class="delete is-danger"></a>
                    </span>
                </div>
                <br/>
                <div class="control">
                    <a class="button is-success">Add Step</a>
                </div>
            </div>

        </template>
      </recipe-layout>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import RecipeLayout from "../components/RecipeLayout";

export default {
  name: "recipe-form",
  components: {
    RecipeLayout
  },
  computed: {},
  methods: {
    ...mapActions({
      loadRecipe: "ambrosia/getRecipe"
    }),
    getNumStages: function() {
      return 3;
    }
  }
};
</script>
