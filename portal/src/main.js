/**
 * @author stoneliang
 * @since 2019-11-19
 */

import fetch from 'isomorphic-fetch';
import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import {
  registerMicroApps, runAfterFirstMounted, setDefaultMountApp, start 
} from 'qiankun';
import Framework from './App.vue';
import '@/utils/bus';

import 'element-ui/lib/theme-chalk/index.css';

let app = null;

function render({ appContent, loading }) {
  if (!app) {
    Vue.use(Vuex);
    Vue.use(VueRouter);
    app = new Vue({
      el: '#wst-container',
      router: new VueRouter({}),
      data() {
        return {
          content: appContent,
          loading,
        };
      },
      render(h) {
        return h(Framework, {
          props: {
            content: this.content,
            loading: this.loading,
          },
        });
      },
    });
  } else {
    app.content = appContent;
    app.loading = loading;
  }
}

function genActiveRule(routerPrefix) {
  return location => location.pathname.startsWith(routerPrefix);
}

render({ loading: true });

// support custom fetch see: https://github.com/kuitos/import-html-entry/blob/91d542e936a74408c6c8cd1c9eebc5a9f83a8dc0/src/index.js#L163
const request = url => fetch(url, {
  referrerPolicy: 'origin-when-cross-origin',
});

registerMicroApps(
  [
    { 
      name: 'mfe-admin', 
      entry: '//localhost:8002', 
      render, 
      activeRule: genActiveRule('/mfe-admin') 
    },
    { 
      name: 'mfe-log', 
      entry: '//localhost:8001', 
      render, 
      activeRule: genActiveRule('/mfe-log') 
    },
  ],
  {
    beforeLoad: [
      // eslint-disable-next-line no-shadow
      (app) => {
        console.log('before load', app);
      },
    ],
    beforeMount: [
      // eslint-disable-next-line no-shadow
      (app) => {
        console.log('before mount', app);
      },
    ],
    afterUnmount: [
      // eslint-disable-next-line no-shadow
      (app) => {
        console.log('after unload', app);
      },
    ],
  },
  {
    fetch: request,
  },
);

setDefaultMountApp('/mfe-log');
runAfterFirstMounted(() => console.info('first app mounted'));

start({ prefetch: true, fetch: request });
