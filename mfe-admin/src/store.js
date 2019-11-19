import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [{username:'stone', email: 'stone@mfe.com', latestLogin: '2019-08-08 12:00:00'}]
  },
  mutations: {
    addUser(state, payload) {
      state.users.push(payload);
    }
  },
  actions: {
    
  },
  getters: {
    users(state) {
      return state.users;
    }
  }
});
