export default class RecipeStage {
  constructor(name, notes, ingredients, steps) {
    this.name = name;
    this.notes = notes;
    this.ingredients = ingredients;
    this.steps = steps;

    if (this.ingredients===undefined) {
      this.ingredients = [];
    }
    if (this.steps===undefined) {
      this.steps = [];
    }
  }
}
