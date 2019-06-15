<template>
<div>
  <div class="field is-horizontal">
    <div class="field-label is-normal">
      <label class="label">Overview</label>
    </div>
    <div class="field-body">
      <div class="field">
        <div class="control">
          <input class="input" type="text" placeholder="Name">
        </div>
      </div>
      <div class="field">
        <div class="control">
          <input class="input" type="text" placeholder="Author">
        </div>
      </div>
    </div>
  </div>

    <div class="field is-horizontal tags-parent">
      <div class="field-label"></div>
      <div class="field-body">
        <div class="field is-expanded">
          <div class="field has-addons">
            <p class="control is-expanded">
              <input class="input" type="tags" placeholder="Add Tag (press enter)">
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="field is-horizontal">
      <div class="field-label"></div>
      <div class="field-body">
        <div class="field is-expanded">
          <div class="field has-addons">
            <p class="control is-expanded">
              <textarea class="textarea" rows="3" placeholder="recipe summary"></textarea>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import BulmaTags from "bulma-tagsinput/dist/js/bulma-tagsinput.min.js";
import "bulma-tagsinput/dist/css/bulma-tagsinput.sass";

export default {
  name: "recipe-form-header",
  computed: {},
  methods: {},
  data() {
    return {
      tags: []
    };
  },
  mounted: function() {
    this.tags = BulmaTags.attach();
  }
};
</script>

<style lang="scss" scoped>
// Little hack to make the tags play nice
.tags-parent {
  margin-bottom: calc(2 * #{$size-7}) !important;
}
</style>
