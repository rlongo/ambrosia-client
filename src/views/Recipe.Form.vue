<template>
  <form class="pure-form pure-form-aligned">
    <StageForm ></StageForm>
  </form>
</template>

<script>
import StageForm from '../components/Stage.Form';

export default {
  name: "Recipe",
  components: { StageForm },
}
</script>

<style lang="scss" scoped>
form {
  margin: 8px;
}
</style>
