<template>
  <div>
          <h3 class="title">Steps</h3>
          <div class="field">
            <div class="control has-icons-right">
              <textarea
                class="textarea"
                rows="2"
                placeholder="steps summary"
              ></textarea>
              <span class="icon is-medium is-right">
                <a class="delete"></a>
              </span>
            </div>
            <br />
            <div class="control">
              <a class="button is-success">Add Step</a>
            </div>
          </div>
  </div>
</template>

<script>
export default {
  name: "recipe-form-steps",
  computed: {},
  methods: {
  },
  data() {
    return {
    };
  }
};
</script>