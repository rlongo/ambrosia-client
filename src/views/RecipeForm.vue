<template>
  <div class="container">
    <notification class="status-notification" ref="notify">
      <template>{{ notifyContent }}</template>
    </notification>

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
                  <input class="input" type="text"
                    placeholder="stage name"
                    v-model="stageHeaders[slotProps.idStage]"
                    v-on:change="onStageHeaderChanged(slotProps.idStage)">
                </div>
              </div>

            </div>
          </div>


              <div class="field">
                <div class="control">
                  <textarea
                    class="textarea"
                    rows="2"
                    placeholder="stage summary"
                    v-model="stageSummaries[slotProps.idStage]"
                    v-on:change="onStageHeaderChanged(slotProps.idStage)"
                  ></textarea>
                </div>
              </div>
        </template>

        <template v-slot:ingredients="slotProps">
          <recipe-form-ingredients :idStage="slotProps.idStage"></recipe-form-ingredients>
        </template>

        <template v-slot:steps="slotProps">
          <recipe-form-steps :idStage="slotProps.idStage"></recipe-form-steps>
        </template>

        <template v-slot:recipe-footer>
          <div class="field">
            <div class="control">
              <a class="button is-success is-pulled-right" @click="addStage">Add Stage</a>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <a class="button is-link is-large" @click="submitRecipe">Submit</a>
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
import Notification from "../components/Notification";
import RecipeFormHeader from "./recipe/Header.Form";
import RecipeFormIngredients from "./recipe/Ingredients.Form";
import RecipeFormSteps from "./recipe/Steps.Form.vue";

export default {
  name: "recipe-form",
  components: {
    RecipeLayout,
    notification: Notification,
    "recipe-form-header": RecipeFormHeader,
    "recipe-form-ingredients": RecipeFormIngredients,
    "recipe-form-steps": RecipeFormSteps
  },
  data() {
    return {
      notifyContent: "",
      stageHeaders: [],
      stageSummaries: []
    };
  },
  computed: {
    ...mapGetters({
      myRecipe: "scratchpad/getRecipe",
      isInTransmission: "scratchpad/getIsTransmitting",
      didPostSucceed: "scratchpad/getWasSuccessful"
    })
  },
  methods: {
    ...mapActions({
      setScratchpad: "scratchpad/setScratchpad",
      addStage: "scratchpad/addRecipeStage",
      commitRecipe: "scratchpad/commitRecipe",
      setStageHeader: "scratchpad/setStageHeader"
    }),
    getNumStages: function() {
      if (!Array.isArray(this.myRecipe.stages)) {
        return 0;
      }

      return this.myRecipe.stages.length;
    },
    submitRecipe: function() {
      this.$refs.notify.cancel();
      this.commitRecipe();
    },

    notifyInTransmission() {
      if (!this.$refs.notify.isActive()) {
        this.notifyContent = "Trying to Serve Recipe on Ambrosia";
        this.$refs.notify.show("warning");
      }
    },
    notifyPostStatus() {
      if (this.didPostSucceed) {
        this.notifyContent = "Recipe served on Ambrosia";
        this.$refs.notify.show("success");
      } else {
        this.notifyContent = "Failed to Serve Recipe to Ambrosia";
        this.$refs.notify.show("fail");
      }
    },
    onStageHeaderChanged(stageID) {
      this.setStageHeader({
        stageID: stageID,
        name: this.stageHeaders[stageID],
        notes: this.stageSummaries[stageID]
      });
    }
  },
  created: function() {
    // TODO will want a way of passing in a recipe here instead of starting from scratch
    this.setScratchpad(new Recipe());
    this.addStage();
  },
  watch: {
    isInTransmission: function(val) {
      if (val) {
        this.notifyInTransmission();
      }
    },
    didPostSucceed: function() {
      this.notifyPostStatus();
    }
  }
};
</script>

<style lang="scss" scoped>
.status-notification {
  position: absolute;
  bottom: 20px;
  left: 5%;
  right: 5%;
  min-height: 5%;
  width: 90%;
  z-index: 99;
}
</style>
