import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    filterTitle: '',
  },
  mutations: {
    filterTitle(state, payload) {
      state.filterTitle = payload;
    },
  },
  getters: {
    filterTitle(state) {
      return state.filterTitle;
    },
  },
  actions: {
  },
  modules: {
  },
});
