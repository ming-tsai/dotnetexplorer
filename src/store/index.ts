import Vue from "vue";
import Vuex from "vuex";
import Tool from "@/store/modules/tool";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    Tool: Tool
  }
});
