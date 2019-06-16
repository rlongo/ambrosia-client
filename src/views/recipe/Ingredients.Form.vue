<template>
  <div>
    <h3 class="title">Ingredients</h3>

    <div
      class="field has-addons"
      v-for="(ingredient, i) in ingredients"
      v-bind:key="i"
    >
      <div class="control ingredient-qty">
        <input
          class="input"
          type="number"
          v-model.number="ingredients[i].quantity"
          v-on:change="onIngredientsChanged"
          placeholder="qty"
        />
      </div>
      <div class="control ingredient-unit">
        <input
          class="input"
          type="text"
          v-model="ingredients[i].unit"
          v-on:change="onIngredientsChanged"
          placeholder="unit"
        />
      </div>
      <div class="control has-icons-right is-expanded">
        <input
          class="input"
          type="text"
          v-model="ingredients[i].name"
          v-on:change="onIngredientsChanged"
          placeholder="name"
        />
        <span class="icon is-medium is-right">
          <a class="delete" @click="removeIngredient(i)"></a>
        </span>
      </div>
    </div>

    <a class="button is-success" @click="addIngredient()">Add Ingredient</a>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Ingredient from "../../ambrosia/ingredient";

export default {
  name: "recipe-form-ingredients",
  props: {
    idStage: Number
  },
  data() {
    return {
      ingredients: [new Ingredient()]
    };
  },
  computed: {},
  methods: {
    ...mapActions({
      storeIngredients: "scratchpad/setStageIngredients"
    }),
    addIngredient() {
      this.ingredients.push(new Ingredient());
    },
    removeIngredient(id) {
      this.ingredients.splice(id, 1);
      this.onIngredientsChanged();
    },
    onIngredientsChanged() {
      this.storeIngredients({
        stageID: this.idStage,
        ingredients: this.ingredients
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.ingredient-qty {
  max-width: 5rem;
}
.ingredient-unit {
  max-width: 8rem;
}
</style>
