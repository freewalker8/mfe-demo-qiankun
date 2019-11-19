import Vue from 'vue';
import singleSpaVue from 'single-spa-vue';

import './set-public-path';

import App from './App.vue';
import router from './router';
import './utils/bus'; // 全局事件处理
import 'element-ui/lib/theme-chalk/index.css';


Vue.config.productionTip = false;

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    render: h => h(App),
    router,
  },
});

export const bootstrap = vueLifecycles.bootstrap;
export function mount(props) {
  console.log(props.authToken); // do something with the common authToken
  return vueLifecycles.mount(props);
}
export const unmount = vueLifecycles.unmount;
