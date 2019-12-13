import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

let modulesId = null;

function loadModules() {
  const modulesContext = require.context('./modules', true, /index.js/);
  const modules = {};

  modulesId = modulesContext.id;
  modulesContext.keys().forEach((key) => {
    const path = key.split('/');
    const modulePath = path.slice(1, -1);

    modules[modulePath[0]] = modulesContext(key).default;
  });

  return modules;
}

const store = new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: loadModules()
})

if (module.hot) {
  module.hot.accept([modulesId], () => {
    const modules = loadModules;
    store.hotUpdate({
      modules
    })
  })
}

export default store;
