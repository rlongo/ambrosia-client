<template>
    <ol class="procedure">
        <li class="step" v-for="step in steps" v-bind:key="step">{{step}}</li>
    </ol>
</template>

<script>
export default {
  name: "Procedure",
  components: {},
  props: ["steps"]
};
</script>

<style lang="scss" scoped>
.step {
    text-align: justify;
    margin: 0 5vw 1vh 0;
}
</style>
