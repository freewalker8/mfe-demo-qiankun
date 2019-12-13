export default {
  namespaced: true,
  state: {    
  },
  mutations: {
  },
  actions: {  
    addUser({commit}, payload) {
      commit('userMgt/addUser', payload, {root: true})
    }  
  },
  getters: {   
  }
}
