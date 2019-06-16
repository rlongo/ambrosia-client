export default class Recipe {
  constructor(id, name, author, notes, tags, stages) {
    this.id = id;
    this.name = name;
    this.author = author;
    this.notes = notes;
    this.tags = tags;
    this.stages = stages;

    if (this.tags === undefined) {
      this.tags = [];
    }
    if (this.stages === undefined) {
      this.stages = [];
    }
  }
}
