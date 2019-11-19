import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    accessLogs: [{
      date: '2019-08-09',
      operator: 'stone',
      detail: '登录系统'
    }]
  },
  mutations: {
    addAccessLog(state, payload) {
      state.accessLogs.push(payload);
    }
  },
  actions: {

  },
  getters: {
    accessLogs(state) {
      return state.accessLogs;
    }
  }
});
