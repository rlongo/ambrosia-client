<template>
  <div>
    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label">Overview</label>
      </div>
      <div class="field-body">
        <div class="field">
          <div class="control">
            <input
              class="input"
              type="text"
              v-model="name"
              placeholder="Name"
            />
          </div>
        </div>
        <div class="field">
          <div class="control">
            <input
              class="input"
              type="text"
              v-model="author"
              placeholder="Author"
            />
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
              <vue-tags-input
                class="input"
                v-model="tag"
                :tags="tags"
                :allow-edit-tags="true"
                @tags-changed="newTags => (tags = newTags)"
              />
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
              <textarea
                class="textarea"
                rows="3"
                v-model="notes"
                placeholder="recipe notes"
              ></textarea>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import VueTagsInput from "@johmun/vue-tags-input";

export default {
  name: "recipe-form-header",
  components: {
    VueTagsInput
  },
  data() {
    return {
      tag: "",
      // Used to keep metadata from the tags input component
      localTagsCache: []
    };
  },
  computed: {
    ...mapGetters({
      myRecipe: "scratchpad/getRecipe"
    }),
    name: {
      get() {
        return this.myRecipe.name;
      },
      set(value) {
        this.setName(value);
      }
    },
    author: {
      get() {
        return this.myRecipe.author;
      },
      set(value) {
        this.setAuthor(value);
      }
    },
    tags: {
      get() {
        return this.localTagsCache;
      },
      set(value) {
        this.localTagsCache = value;
        this.setTags(value.map(tag => tag.text));
      }
    },
    notes: {
      get() {
        return this.myRecipe.notes;
      },
      set(value) {
        this.setNotes(value);
      }
    }
  },
  methods: {
    ...mapActions({
      setName: "scratchpad/setRecipeName",
      setAuthor: "scratchpad/setRecipeAuthor",
      setTags: "scratchpad/setRecipeTags",
      setNotes: "scratchpad/setRecipeNotes"
    })
  },
  mounted: function() {
    // TODO this may need to be re-enabled when loading in a recipe...
    // this.localTagsCache = this.myRecipe.tags.map(tag => {text: tag});
  }
};
</script>
