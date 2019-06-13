import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";
import router from "./router";
import { Fetch, Scratchpad } from "./ambrosia";
import "./registerServiceWorker";

Vue.use(Vuex);
Vue.config.productionTip = false;

const store = new Vuex.Store({
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
  strict: process.env.NODE_ENV !== 'production'
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
