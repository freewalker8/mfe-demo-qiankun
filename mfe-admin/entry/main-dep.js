import Vue from 'vue';
import VueRouter from 'vue-router';
import {Tabs, TabPane} from 'element-ui';

import App from './App.vue';
import routes from './router';
import store from './store/index';

import 'element-ui/lib/theme-chalk/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.use(Tabs);
Vue.use(TabPane);

Vue.config.productionTip = false;

const router = new VueRouter({
  mode: 'history',
  routes,
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#spa-mfe-admin');
