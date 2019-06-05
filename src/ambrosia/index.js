import Vue from "vue";
import Vuex from "vuex";
import Recipe from "./recipe";
import { Client } from "./client";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

const state = {
  loading: false,
  recipe: new Recipe()
};

const getters = {
  getIsLoading(state) {
    return state.loading;
  },
  getRecipe(state) {
    return state.recipe;
  }
};

const actions = {
  getRecipe(context) {
    context.commit("setLoading", true);

    let a = new Client();
    a.getRecipes()
      .then(response => {
        context.commit("setLoading", false);
        if (response.data && response.data.length > 0) {
          context.commit("setRecipe", response.data[0]);
        }
      })
      .catch(err => {
        console.log("error" + err);
      });
  }
};

const mutations = {
  setLoading(state, isLoading) {
    state.loading = isLoading;
  },
  setRecipe(state, recipe) {
    state.recipe = recipe;
  },
  clearRecipe(state) {
    state.recipe = new Recipe();
  }
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  strict: debug
});
