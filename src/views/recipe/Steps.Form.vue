<template>
  <div>
    <h3 class="title">Steps</h3>
    <div class="field" v-for="(step, i) in steps" v-bind:key="i">
      <div class="control has-icons-right">
        <textarea
          class="textarea"
          rows="2"
          placeholder="steps summary"
          v-model="steps[i]"
          v-on:change="onStepsChanged"
        ></textarea>
        <span class="icon is-medium is-right">
          <a class="delete" @click="removeStep(i)"></a>
        </span>
      </div>
    </div>
    <div class="control">
      <a class="button is-success" @click="addStep()">Add Step</a>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "recipe-form-steps",
  props: {
    idStage: Number
  },
  data() {
    return {
      steps: [""]
    };
  },
  computed: {},
  methods: {
    ...mapActions({
      storeSteps: "scratchpad/setStageSteps"
    }),
    addStep() {
      this.steps.push("");
    },
    removeStep(id) {
      this.steps.splice(id, 1);
      this.onStepsChanged();
    },
    onStepsChanged() {
      this.storeSteps({ stageID: this.idStage, steps: this.steps });
    }
  }
};
</script>
