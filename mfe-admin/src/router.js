import Vue from 'vue';
import Router from 'vue-router';
import UserMgt from './views/user-mgt.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/user-mgt',
      name: 'userMgt',
      component: UserMgt,
    },
    {
      path: '/user-add',
      name: 'userAdd',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "user_add" */ './views/user-add.vue'),
    },
  ],
});
