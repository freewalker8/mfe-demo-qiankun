import Vue from 'vue';

import App from './App.vue';
import router from './router';
import store from './store';

// import './set-public-path';


// Vue.config.productionTip = false;

let instance = null;

export async function bootstrap() {
  console.log('vue app bootstraped');
}

export async function mount(props) {
  console.log('props from main framework', props);
  instance = new Vue({
    el: '#spa-mfe-log',
    render: h => h(App),
    router,
    store
  });
}

export async function unmount() {
  instance.$destroy();
  instance = null;
}
