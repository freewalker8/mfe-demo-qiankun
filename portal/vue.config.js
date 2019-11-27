const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin');

function resolve(dir) {
  return path.join(__dirname, dir);
}

const scriptPreloadAttr = {
  rel: 'preload',
  as: 'script'
}
const scriptAttr = {
  type: 'text/javascript'
}
const scriptPreloads = [
  '/libs/vue@2.6.10.min.js',
  '/libs/vue-router@3.1.3.min.js',
  '/libs/vuex@3.1.1.min.js',
  '/libs/vue-i18n@8.14.1.min.js'
]
const links = [
  '/libs/font-awesome-4.7.0/css/font-awesome.min.css',
  '/libs/bootstrap@4.3.1.min.css',
  ...(scriptPreloads.map(path => {return {
    path,
    publicPath: false,
    attributes: scriptPreloadAttr
  }}))
];

const scripts = [
  ...(scriptPreloads.map(path => {return {
    path,
    publicPath: false,
    append: false,
    attributes: scriptAttr
  }}))
];

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src'),
      },
    },
    externals: {
      vue: 'Vue',
      vuex: 'Vuex',
      'vue-router': 'VueRouter',
      'vue-i18n': 'VueI18n',
      // axios: 'axios',
      // 'element-ui': 'ElementUI'
    },
    plugins: [
      new HtmlWebpackTagsPlugin({
        usePublicPath: false,
        links,
        scripts,
      })
    ]
  },
  devServer: {
    // host: '0.0.0.0',
    hot: true,
    disableHostCheck: true,
    overlay: {
      warnings: false,
      errors: true,
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  // chainWebpack: (config) => {
  //   config.externals(['vue', 'vue-router', 'vuex', 'vue-i18n'])
  // },
  // filenameHashing: false,
}
