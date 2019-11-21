import Vue from 'vue';

// import './set-public-path';

import App from './App.vue';
import router from './router';
import './utils/bus'; // 全局事件处理
import 'element-ui/lib/theme-chalk/index.css';


// Vue.config.productionTip = false;

let instance = null;

export async function bootstrap() {
  console.log('vue app bootstraped');
}

export async function mount(props) {
  console.log('props from main framework', props);
  instance = new Vue({
    el: '#vueRoot',
    render: h => h(App),
    router
  });
}

export async function unmount() {
  instance.$destroy();
  instance = null;
}