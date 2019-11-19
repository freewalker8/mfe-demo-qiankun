import Vue from 'vue';
import Router from 'vue-router';
import LogAccess from './views/log-access.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/log-access',
      name: 'logAccess',
      component: LogAccess,
    },
    {
      path: '/log-login',
      name: 'logLogin',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "logLogin" */ './views/log-login.vue'),
    },
  ],
});
