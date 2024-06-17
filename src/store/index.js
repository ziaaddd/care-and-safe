import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      locale: "en",
    };
  },
  getters: {
    isArabic(state) {
      // it change from selected option in the header
      return state.locale === "ar";
    },
  },
  mutations: {
    updateLocal(state, payload) {
      state.locale = payload;
    },
  },
  actions: {
    updateLocal({ commit }, payload) {
      commit("updateLocal", payload);
    },
  },
});

export default store;
