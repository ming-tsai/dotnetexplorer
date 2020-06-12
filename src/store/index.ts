import Vue from "vue";
import Vuex from "vuex";
import Theme from "@/store/modules/theme";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    Theme: Theme
  }
});
