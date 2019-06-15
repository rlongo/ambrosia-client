<template>
  <form class="pure-form pure-form-stacked">
    <fieldset class="procedure-form">
      <div class="pure-control-group">
        <label for="name">Name</label>
        <input id="name" type="text" placeholder="Recipe Name" />
        <span class="pure-form-message-inline">This is a required field.</span>
      </div>
      <div class="pure-control-group">
        <label for="name">Author</label>
        <input id="name" type="text" placeholder="Author Name" />
        <span class="pure-form-message-inline">This is a required field.</span>
      </div>
      <div class="pure-control-group">
        <label for="name">Tags</label>
        <textarea
          id="name"
          type="text"
          placeholder="i.e. easter cookie baking biscotti lemon"
        />
        <span class="pure-form-message-inline">Separate with spaces</span>
      </div>
    </fieldset>

    <StageForm></StageForm>
  </form>
</template>

<script>
import StageForm from "./Stage.Form";

export default {
  name: "Recipe",
  components: { StageForm }
};
</script>

<style lang="scss">
form {
  margin: 8px;

  @media screen and (max-width: 35.5em) {
    width: calc(100% - 16px);
  }
  @media screen and (min-width: 35.5em) {
    margin-left: auto;
    margin-right: auto;
    width: 80%;
  }
}

input,
textarea {
  background: none;
  // border: 2px solid $theme-font !important;
  width: 100%;
}
</style>
