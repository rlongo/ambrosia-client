<template>
  <multi-field v-on:addField="addField" v-on:removeField="removeField">
    <template v-slot:header>
      <h1>Stages</h1>
    </template>

    <template v-slot:default="slotProps">
      <textarea
        class="pure-u-1"
        type="text"
        v-model="steps[slotProps.rowid]"
        placeholder="i.e. easter cookie baking biscotti lemon"
      />
    </template>
  </multi-field>
</template>

<script>
import MultiField from "../../components/MultiField";

export default {
  name: "Procedure",
  data: function() {
    return {
      steps: []
    };
  },
  components: {
    MultiField
  },
  methods: {
    addField: function() {
      this.steps.push("");
    },
    removeField: function(index) {
      this.steps.splice(index, 1);
    }
  }
};
</script>
