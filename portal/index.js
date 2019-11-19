/**
 * @author stoneliang
 * @since 2019-11-19
 */

import fetch from 'isomorphic-fetch';
import Vue from 'vue';
import { registerMicroApps, runAfterFirstMounted, setDefaultMountApp, start } from 'qiankun';
import Framework from './Framework.vue';

let app = null;

function render({ appContent, loading }) {
  if (!app) {
    app = new Vue({
      el: '#container',
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
const request = url =>
  fetch(url, {
    referrerPolicy: 'origin-when-cross-origin',
  });

registerMicroApps(
  [
    { name: 'mfe-admin', entry: {script: ['//localhost:9002/app.js']}, render, activeRule: genActiveRule('/react') },
    { name: 'mfe-log', entry: {script: ['//localhost:9001/app.js']}, render, activeRule: genActiveRule('/15react15') },
    { name: 'mfe-common', entry: {script: ['//localhost:9000/app.js']}, render, activeRule: genActiveRule('/vue') },
  ],
  {
    beforeLoad: [
      app => {
        console.log('before load', app);
      },
    ],
    beforeMount: [
      app => {
        console.log('before mount', app);
      },
    ],
    afterUnmount: [
      app => {
        console.log('after unload', app);
      },
    ],
  },
  {
    fetch: request,
  },
);

setDefaultMountApp('/common');
runAfterFirstMounted(() => console.info('first app mounted'));

start({ prefetch: true, fetch: request });
