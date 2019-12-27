
export default [
  {
    path: '/user-mgt',
    name: 'userMgt',
    component: () => import(/* webpackChunkName: "user_mgt" */ './views/user-mgt.vue'),
  },
  {
    path: '/user-add',
    name: 'userAdd',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "user_add" */ './views/user-add.vue')
  }
];
