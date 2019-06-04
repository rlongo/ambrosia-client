<template>
    <fieldset class="procedure-form">
        <h3>Stage 1</h3>

        <div class="pure-control-group">
            <label for="name">Name</label>
            <input id="name" type="text" placeholder="Recipe Name">
            <span class="pure-form-message-inline">This is a required field.</span>
        </div>
        <div class="pure-control-group">
            <label for="name">Author</label>
            <input id="name" type="text" placeholder="Author Name">
            <span class="pure-form-message-inline">This is a required field.</span>
        </div>
        <div class="pure-control-group">
            <label for="name">Tags</label>
            <textarea id="name" type="text" placeholder="i.e. easter cookie baking biscotti lemon"/>
            <span class="pure-form-message-inline">Separate with spaces</span>
        </div>
    </fieldset>
</template>

<script>
export default {
  name: "Procedure",
  components: {},
};
</script>

<style lang="scss" scoped>
input, textarea {
    background: none;
    border: 2px solid $theme-font !important;
    
    @media screen and (max-width: 35.5em) {
        width: 100%;
    }
}
</style>
