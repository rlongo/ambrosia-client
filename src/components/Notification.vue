<template>
  <div
    class="post-status notification"
    v-if="isVisible"
    v-bind:class="{
      'is-info': isInfo(),
      'is-success': isSuccess(),
      'is-danger': isFail(),
      'is-warning': isWarning()
    }"
  >
    <button class="delete is-large" @click="cancel"></button>

    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "recipe-form",
  components: {},
  data() {
    return {
      isVisible: false,
      state: undefined
    };
  },
  methods: {
    isActive: function() {
      return this.isVisible;
    },
    show: function(state) {
      this.state = state;
      this.isVisible = true;
    },
    cancel: function() {
      this.isVisible = false;
    },
    isSuccess() {
      return this.state === "success";
    },
    isFail() {
      return this.state === "fail";
    },
    isWarning() {
      return this.state === "warning";
    },
    isInfo() {
      return this.state === "info";
    }
  }
};
</script>
