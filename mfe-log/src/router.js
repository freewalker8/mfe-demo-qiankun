
export default [
  {
    path: '/log-access',
    name: 'logAccess',
    component: () => import(/* webpackChunkName: "logAccess" */ './views/log-access.vue'),
  },
  {
    path: '/log-login',
    name: 'logLogin',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "logLogin" */ './views/log-login.vue'),
  },
]
