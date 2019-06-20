export class Client {
  constructor() {
    this.apiRoot = "http://127.0.0.1:8000/api/v1";
  }

  async getRecipes(tags, author) {
    const url = new URL(this.apiRoot + "/recipes");

    const payload = {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    };

    let params = new URLSearchParams();

    if (Array.isArray(tags)) {
      tags.forEach(element => {
        params.append("tag", element);
      });
    }

    if (author !== undefined) {
      params.append("author", author);
    }

    url.search = params;

    let response = await fetch(new Request(url, payload));
    let recipes = await response.json();

    return recipes;
  }

  async getRecipe(recipeID) {
    if (recipeID === undefined) {
      throw " recipeID cannot be undefined!!";
    }

    const url = new URL(this.apiRoot + "/recipe/" + recipeID);

    const payload = {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    };


    let response = await fetch(new Request(url, payload));
    let recipes = await response.json();

    return [ recipes ];
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
