import { Client } from "./client";

const state = {
  loading: false,
  recipes: []
};

const getters = {
  getIsLoading(state) {
    return state.loading;
  },
  getRecipes(state) {
    return state.recipes;
  }
};

const actions = {
  loadRecipe(context, tags) {
    context.commit("setLoading", true);

    let a = new Client();
    a.getRecipes(tags)
      .then(recipes => {
        context.commit("setRecipes", recipes);
      })
      .catch(err => {
        console.log("error" + err);
      })
      .finally(() => {
        context.commit("setLoading", false);
      });
  },
  clearRecipes(context) {
    context.commit("clearRecipes");
  }
};

const mutations = {
  setLoading(state, isLoading) {
    state.loading = isLoading;
  },
  setRecipes(state, recipes) {
    state.recipes = recipes;
  },
  clearRecipes(state) {
    state.recipes = [];
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
