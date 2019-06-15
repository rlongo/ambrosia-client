import Recipe from "./recipe";
import Stage from "./stage";
import ingredient from "./ingredient";
import Ingredient from "./ingredient";

const state = {
  recipe: new Recipe()
};

const getters = {};

const actions = {};

const mutations = {
  setName(state, name) {
    state.recipe.name = name;
  },
  setAuthor(state, author) {
    state.recipe.author = author;
  },
  setTags(state, tags) {
    state.recipe.tags = tags.toLowerCase().split(" ");
  },
  setStage(state, stageIndex, name, notes, ingredients, steps) {
    let ingredients_list = [];

    for (let ingredient in ingredients) {
      ingredients_list.push(Ingredient.ParseIngredientString(ingredient));
    }

    const stage = new Stage(name, notes, ingredients_list, steps);
    state.recipe.stages[stageIndex] = stage;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
