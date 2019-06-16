<template>
  <div class="recipe-layout">
    <div class="header">
      <slot name="header"></slot>
    </div>

    <div class="stages">
      <div class="stage" v-for="i in numStages" v-bind:key="i">
        <hr />

        <div>
          <slot name="stage-header" v-bind:idStage="i - 1"></slot>
        </div>

        <br />

        <div class="columns is-desktop">
          <div class="column is-full-tablet is-one-third-desktop">
            <slot name="ingredients" v-bind:idStage="i - 1"></slot>
          </div>
          <div class="column">
            <slot name="steps" v-bind:idStage="i - 1"></slot>
          </div>
        </div>
      </div>
    </div>

    <div class="recipe-footer">
      <slot name="recipe-footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "recipe-layout",
  props: {
    numStages: Number
  }
};
</script>

<style scoped></style>
