<template>
  <div>
      <h3 class="title">Ingredients</h3>

      <div class="field has-addons">
        <div class="control ingredient-qty">
          <input class="input" type="text" placeholder="qty">
        </div>
        <div class="control ingredient-unit">
          <input class="input" type="text" placeholder="unit">
        </div>
        <div class="control has-icons-right is-expanded">
          <input class="input" type="text" placeholder="name" />
          <span class="icon is-medium is-right">
            <a class="delete"></a>
          </span>
        </div>
      </div>

      <a class="button is-success">Add Ingredient</a>
  </div>
</template>

<script>
export default {
  name: "recipe-form-ingredients",
  computed: {},
  methods: {
  },
  data() {
    return {
    };
  }
};
</script>

<style lang="scss" scoped>
.ingredient-qty {
  max-width: 3rem;
}
.ingredient-unit {
  max-width: 4rem;
}
</style>
