const ConvertUnit = require("convert-units");

export default class Ingredient {
  constructor(name, unit, quantity) {
    this.name = name;
    this.unit = unit;
    this.quantity = quantity;
  }

  convert_quantity(new_unit) {
    return ConvertUnit(this.quantity)
      .from(this.unit)
      .to(new_unit);
  }

  static Merge(new_unit, ingredients) {
    if (ingredients.length === 0) {
      throw "Nothing to merge";
    }

    const name = ingredients[0].name;

    const reducer = (acc, ingredient) => {
      const new_quantity = ConvertUnit(ingredient.quantity)
        .from(ingredient.unit)
        .to(new_unit);
      return acc + new_quantity;
    };

    const new_quantity = ingredients.reduce(reducer, 0);
    return new Ingredient(name, new_unit, new_quantity);
  }

  static MultiMerge(lists) {
    let ingredients = new Map();
    let merged_list = new Array();

    lists.forEach(sublist => {
      sublist.forEach(element => {
        if (!ingredients.has(element.name)) {
          ingredients.set(element.name, new Array());
        }
        ingredients.get(element.name).push(element);
      });
    });

    ingredients.forEach(v => {
      merged_list.push(Ingredient.Merge(v[0].unit, v));
    });

    merged_list.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });

    return merged_list;
  }
}
