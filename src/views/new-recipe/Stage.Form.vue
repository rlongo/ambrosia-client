<template>
  <div>
    <h1>Stage</h1>

    <div class="pure-control-group">
      <label>Notes</label>
      <textarea type="text" placeholder="notes" />
    </div>

    <multi-field
      v-on:addField="addIngredient"
      v-on:removeIngredient="removeStep"
    >
      <template v-slot:header>
        <h3>Ingredients</h3>
      </template>

      <template v-slot:default="slotProps">
        <input
          type="text"
          v-model="ingredients[slotProps.rowid]"
          placeholder="<qty> <unit> <name>"
        />
      </template>
      <template v-slot:footer>
        Add Another Ingredient
      </template>
    </multi-field>

    <multi-field v-on:addField="addStep" v-on:removeField="removeStep">
      <template v-slot:header>
        <h3>Steps</h3>
      </template>

      <template v-slot:default="slotProps">
        <input type="text" v-model="steps[slotProps.rowid]" />
      </template>

      <template v-slot:footer>
        Add Another Step
      </template>
    </multi-field>
  </div>
</template>

<script>
import MultiField from "../../components/MultiField";

export default {
  name: "Procedure",
  data: function() {
    return {
      steps: [],
      ingredients: []
    };
  },
  components: {
    MultiField
  },
  methods: {
    addStep: function() {
      this.steps.push("");
    },
    removeStep: function(index) {
      this.steps.splice(index, 1);
    },
    addIngredient: function() {
      this.ingredients.push("");
    },
    removeIngredient: function(index) {
      this.ingredients.splice(index, 1);
    }
  }
};
</script>
