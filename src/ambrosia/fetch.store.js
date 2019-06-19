import { Client } from "./client";

const state = {
  status: undefined, // one of: failed, loading, set
  recipes: []
};

const getters = {
  getStatus(state) {
    return state.status;
  },
  getRecipes(state) {
    return state.recipes;
  }
};

const actions = {
  loadRecipes(context, tags) {
    context.commit("setStatus", "loading");

    let a = new Client();
    a.getRecipes(tags)
      .then(recipes => {
        context.commit("setRecipes", recipes);
        context.commit("setStatus", "set");
      })
      .catch(err => {
        console.log("error " + err);
        context.commit("setStatus", "failed");
      });
  },
  loadRecipe(context, recipeID) {
    context.commit("setStatus", "loading");

    let a = new Client();
    a.getRecipe(recipeID)
      .then(recipes => {
        context.commit("setRecipes", recipes);
        context.commit("setStatus", "set");
      })
      .catch(err => {
        console.log("error " + err);
        context.commit("setStatus", "failed");
      });
  },
  clearRecipes(context) {
    context.commit("clearRecipes");
  }
};

const mutations = {
  setStatus(state, status) {
    state.status = status;
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
