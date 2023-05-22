import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    types: JSON.parse(localStorage.getItem("types") || "[]"),
  },
  mutations: {
    async loadFloors(state) {
      state.types = [];
      let response = await fetch("https://moscow.fargospc.ru/test/json/");
      let content = await response.json();
      state.types.push(content);
      localStorage.setItem("types", JSON.stringify(state.types));
    },
  },
  actions: {
    loadFloors({ commit, state }) {
      commit("loadFloors");
    },
  },
  modules: {},
  getters: {
    types: (s) => s.types,
    floorsById: (s) => (id) =>
      s.types[0]?.sections
        .find((x) => x.id === id)
        .items.map((x) => s.types[0]?.elements[x]),
  },
});