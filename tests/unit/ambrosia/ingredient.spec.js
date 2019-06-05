import Ingredient from "@/ambrosia/ingredient";

describe("Ingredient Conversion", () => {
  it("correctly converts units", () => {
    const ingredient = new Ingredient("water", "ml", 1000);
    const new_quantity = ingredient.convert_quantity("l");
    expect(new_quantity).toBe(1);
  });
});

describe("Ingredient Merging", () => {
  it("merges multiuple ingredients", () => {
    const parsley1 = new Ingredient("parsley", "mg", 8500);
    const parsley2 = new Ingredient("parsley", "g", 20);
    const parsley3 = new Ingredient("parsley", "lb", 1);

    const merged = Ingredient.Merge("g", [parsley1, parsley2, parsley3]);

    expect(merged.name).toMatch("parsley");
    expect(merged.unit).toMatch("g");
    expect(merged.quantity).toBeCloseTo(482.09);
  });
});

describe("Ingredient List Merging", () => {
  it("merge produces a sorted set", () => {
    const parsley1 = new Ingredient("parsley", "mg", 8500);
    const chicken1 = new Ingredient("chicken", "g", 800);
    const cream1 = new Ingredient("cream", "ml", 200);
    const list1 = [parsley1, chicken1, cream1];
    const parsley2 = new Ingredient("parsley", "g", 20);
    const list2 = [parsley2];
    const parsley3 = new Ingredient("parsley", "lb", 1);
    const cream3 = new Ingredient("cream", "l", 0.7);
    const list3 = [parsley3, cream3];

    let merged_list = Ingredient.MultiMerge([list1, list2, list3]);

    expect(merged_list.length).toBe(3);
    expect(merged_list[0].name).toMatch("chicken");
    expect(merged_list[1].name).toMatch("cream");
    expect(merged_list[2].name).toMatch("parsley");
  });

  it("accumulated ingredients", () => {
    const parsley1 = new Ingredient("parsley", "mg", 8500);
    const chicken1 = new Ingredient("chicken", "g", 800);
    const cream1 = new Ingredient("cream", "ml", 200);
    const list1 = [parsley1, chicken1, cream1];
    const parsley2 = new Ingredient("parsley", "g", 20);
    const list2 = [parsley2];
    const parsley3 = new Ingredient("parsley", "lb", 1);
    const cream3 = new Ingredient("cream", "l", 0.7);
    const list3 = [parsley3, cream3];

    let merged_list = Ingredient.MultiMerge([list1, list2, list3]);

    expect(merged_list[0].quantity).toBeCloseTo(800);
    expect(merged_list[1].quantity).toBeCloseTo(900);
    expect(merged_list[2].quantity).toBeCloseTo(482092);
  });
});
