import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';
import routes from './router';
import store from './store';

import './set-public-path';


Vue.config.productionTip = false;

let router = null;
let instance = null;

export async function bootstrap() {
  console.log('vue app bootstraped');
}

export async function mount(props) {
  console.log('props from main framework', props);
  router = new VueRouter({
    base: '/mfe-log',
    mode: 'history',
    routes,
  });
  instance = new Vue({
    render: h => h(App),
    router,
    store
  }).$mount('#spa-mfe-log');
}

export async function unmount() {
  instance.$destroy();
  instance = null;
  router = null;
}
