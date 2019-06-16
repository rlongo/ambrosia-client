import AxiosClient from "axios";

export class Client {
  constructor() {
    this.axios = AxiosClient.create({
      baseURL: "http://127.0.0.1:8000/api/v1",
      timeout: 10000,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods":
          "GET, POST, PATCH, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"
      }
    });

    if (process.env.NODE_ENV !== "production") {
      this.axios.interceptors.request.use(request => {
        console.log("Starting Request", request);
        return request;
      });

      this.axios.interceptors.response.use(response => {
        console.log("Response:", response);
        return response;
      });
    }
  }

  getRecipes() {
    return this.axios.get("/recipes");
  }

  postRecipe(recipe) {
    return this.axios.post("/recipe", recipe);
  }
}
