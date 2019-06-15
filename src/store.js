import Vue from "vue";
import Vuex from "vuex";
import { Fetch, Scratchpad } from "./ambrosia";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    ambrosia: {
      namespaced: true,
      ...Fetch
    },
    scratchpad: {
      namespaced: true,
      ...Scratchpad
    }
  },
  strict: process.env.NODE_ENV !== "production"
});
