import Recipe from "./recipe";
import { Client } from "./client";

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
  loadRecipe(context) {
    context.commit("setLoading", true);

    let a = new Client();
    a.getRecipes()
      .then(response => {
        if (response.data && response.data.length > 0) {
          context.commit("setRecipe", response.data[0]);
        }
        context.commit("setLoading", false);
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

export default {
  state,
  getters,
  actions,
  mutations
};
