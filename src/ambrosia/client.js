export class Client {
  constructor() {
    this.apiRoot = "http://127.0.0.1:8000/api/v1";
  }

  getRecipes() {
    const url = this.apiRoot + "/recipes";

    const payload = {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    };

    return fetch(new Request(url, payload));
  }

  postRecipe(recipe) {
    const url = this.apiRoot + "/recipe";

    const payload = {
      method: "POST",
      mode: "no-cors",
      cache: "no-cache",
      credentials: "omit",
      headers: {
        "Content-Type": "application/json"
      },
      redirect: "follow",
      referrer: "no-referrer",
      body: JSON.stringify(recipe)
    };

    return fetch(new Request(url, payload));
  }
}
