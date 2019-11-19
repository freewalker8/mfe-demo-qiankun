import Vue from 'vue';
import singleSpaVue from 'single-spa-vue';

import App from './App.vue';
import router from './router';
import store from './store';

import './set-public-path';


Vue.config.productionTip = false;

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    render: h => h(App),
    router,
    store
  },
});

export const bootstrap = vueLifecycles.bootstrap;
export function mount(props) {
  console.log('mfe-admin mount, token', props.authToken); // do something with the common authToken
  return vueLifecycles.mount(props);
}
export function unmount(props) {
  console.log('mfe-admin unmount');
  return vueLifecycles.unmount(props);
}
