import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';
import routes from './router';
import store from './store/index';

// import './set-public-path';


Vue.config.productionTip = false;

let router = null;
let instance = null;

export async function bootstrap() {
  console.log('vue app bootstraped');
}

export async function mount(props) {
  console.log('props from main framework', props);
  router = new VueRouter({
    base: '/mfe-admin',
    mode: 'history',
    routes,
  });
  instance = new Vue({
    render: h => h(App),
    router,
    store
  }).$mount('#spa-mfe-admin');
}

export async function unmount() {
  instance.$destroy();
  instance = null;
  router = null;
}
