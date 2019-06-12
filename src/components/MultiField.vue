<template>
  <div class="multifield">
    <slot name="header"></slot>

    <div
      class="multifield-row pure-control-group"
      v-for="i in numFields"
      v-bind:key="i"
    >
      <slot v-bind:rowid="i - 1"></slot>
      <button
        class="pure-button"
        @click="removeField(i)"
        type="button"
        v-if="hasMoreFields()"
      >
        -
      </button>
    </div>

    <button class="pure-button add-field" @click="addField()" type="button">
      <slot name="footer">
        Add Field
      </slot>
    </button>
  </div>
</template>

<script>
export default {
  name: "multi-field",
  data: function() {
    return {
      numFields: 1
    };
  },
  components: {},
  methods: {
    addField: function() {
      this.numFields++;
      this.$emit("addField");
    },
    removeField: function(index) {
      this.numFields--;
      this.$emit("removeField", index - 1);
    },
    hasMoreFields: function() {
      return this.numFields > 1;
    }
  }
};
</script>

<style lang="scss" scoped>
.multifield-row {
  display: flex;
  margin: 3px;

  * {
    flex: 1;
    margin: 4px;
  }

  button {
    flex: none;
    height: 48px;
    width: 48px;
    margin: 6px;
    text-align: center;
    background: $red;
    color: $dark;
  }
}

.add-field {
  background: $green;
  width: 100%;
}
</style>
