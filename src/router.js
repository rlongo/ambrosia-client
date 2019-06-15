import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/recipe",
      name: "recipe",
      component: () => import("./views/Recipe.vue")
    },
    {
      path: "/recipe/new",
      name: "add recipe",
      component: () => import("./views/RecipeForm.vue")
    }
  ]
});
