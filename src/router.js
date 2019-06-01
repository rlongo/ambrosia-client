import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

// PureCSS
import "purecss/build/pure-min.css";
import "purecss/build/grids-responsive-min.css";

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
    }
  ]
});
