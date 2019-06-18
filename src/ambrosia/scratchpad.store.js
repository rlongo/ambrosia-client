import Recipe from "./recipe";
import Stage from "./stage";
import { Client } from "./client";

const state = {
  inTransmission: false,
  wasSuccessful: false,
  recipe: new Recipe()
};

const getters = {
  getRecipe(state) {
    return state.recipe;
  },
  getIsTransmitting(state) {
    return state.inTransmission;
  },
  getWasSuccessful(state) {
    return state.wasSuccessful;
  } 
};

const mutations = {
  mSetRecipe(state, recipe) {
    state.recipe = recipe;
  },

  mSetTransmission(state, inTransmission) {
    state.inTransmission = inTransmission;
  },
  mWasSuccessful(state, wasSuccessful) {
    state.wasSuccessful = wasSuccessful;
  },

  // RECIPE
  mSetRecipeName(state, name) {
    state.recipe.name = name;
  },
  mSetRecipeAuthor(state, author) {
    state.recipe.author = author;
  },
  mSetRecipeTags(state, tags) {
    state.recipe.tags = tags;
  },
  mSetRecipeNotes(state, notes) {
    state.recipe.notes = notes;
  },
  mAddRecipeStage(state) {
    state.recipe.stages.push(new Stage());
  },

  // STAGE DATA
  mSetStageHeader(state, params) {
    state.recipe.stages[params.stageID].name = params.name;
    state.recipe.stages[params.stageID].notes = params.notes;
  },
  mSetStageIngredients(state, params) {
    state.recipe.stages[params.stageID].ingredients = JSON.parse(
      JSON.stringify(params.ingredients)
    );
  },
  mSetStageSteps(state, params) {
    state.recipe.stages[params.stageID].steps = JSON.parse(
      JSON.stringify(params.steps)
    );
  }
};

const actions = {
  setScratchpad(context, recipe) {
    context.commit("mSetRecipe", recipe);
  },

  // RECIPE
  setRecipeName(context, name) {
    context.commit("mSetRecipeName", name);
  },
  setRecipeAuthor(context, author) {
    context.commit("mSetRecipeAuthor", author);
  },
  setRecipeTags(context, tags) {
    context.commit("mSetRecipeTags", tags);
  },
  setRecipeNotes(context, notes) {
    context.commit("mSetRecipeNotes", notes);
  },
  addRecipeStage(context) {
    // Add a new stage to the list
    context.commit("mAddRecipeStage");
  },

  // STAGE DATA
  setStageHeader(context, params) {
    context.commit("mSetStageHeader", params);
  },
  setStageIngredients(context, params) {
    context.commit("mSetStageIngredients", params);
  },
  setStageSteps(context, params) {
    context.commit("mSetStageSteps", params);
  },

  commitRecipe(context) {
    context.commit("mWasSuccessful", false);
    context.commit("mSetTransmission", true);

    let a = new Client();
    a.postRecipe(JSON.parse(JSON.stringify(context.state.recipe)))
      .then(() => {
        context.commit("mWasSuccessful", true);
      })
      .catch(err => {
        console.log("error: " + err);
        context.commit("mWasSuccessful", false);
      })
      .finally(() => {
        context.commit("mSetTransmission", false);
      });
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
