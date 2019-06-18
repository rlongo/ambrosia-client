export class Client {
  constructor() {
    this.apiRoot = "http://127.0.0.1:8000/api/v1";
  }

  async getRecipes() {
    const url = this.apiRoot + "/recipes";

    const payload = {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    };

    let response = await fetch(new Request(url, payload));
    let recipes = await response.json();

    return recipes;
  }

  async postRecipe(recipe) {
    const url = this.apiRoot + "/recipe";

    const payload = {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "omit",
      headers: {
        "Content-Type": "application/json"
      },
      redirect: "follow",
      referrer: "no-referrer",
      body: JSON.stringify(recipe)
    };

    await fetch(new Request(url, payload));
  }
}
