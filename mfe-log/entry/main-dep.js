import Vue from 'vue';
import VueRouter from 'vue-router';
import {
  Tabs, 
  TabPane, 
  Table, 
  TableColumn
} from 'element-ui';

import App from './App.vue';
import routes from './router';
import store from './store';

import 'element-ui/lib/theme-chalk/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.use(VueRouter);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(Table);
Vue.use(TableColumn);

Vue.config.productionTip = false;

const router = new VueRouter({
  mode: 'history',
  routes,
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#spa-mfe-log');
