/* eslint-disable no-shadow */
const path = require('path');
const fs = require('fs');
const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin');

function resolve(dir) {
  return path.join(__dirname, dir);
}

/**
 * 获取代理库地址
 * @param {String} dir 目录地址
 */
function getPortalLibs(dir = './public/libs') {
  const cssFiles = [];
  const jsFiles = [];
  const jsReg = /\.js$/;
  const cssReg = /\.css$/;
  const basePath = '/libs/';

  try {
    const files = fs.readdirSync(dir); 

    files.map((file) => {
      if (jsReg.test(file)) {
        jsFiles.push(basePath + file);
      } else if (cssReg.test(file)) {
        cssFiles.push(basePath + file);
      }
      return file;
    });

    return {
      cssFiles,
      jsFiles
    }
  } catch (error) {
    throw new Error(error);
  }
}

const libs = getPortalLibs();

const scriptPreloadAttr = {
  rel: 'preload',
  as: 'script'
}
const scriptAttr = {
  type: 'text/javascript'
}

const links = [
  '/libs/font-awesome-4.7.0/css/font-awesome.min.css',
  ...libs.cssFiles,
  ...(libs.jsFiles.map(path => ({
    path,
    publicPath: false,
    attributes: scriptPreloadAttr
  })))
];

const scripts = [
  ...(libs.jsFiles.map(path => ({
    path,
    publicPath: false,
    append: false, // 添加到已有脚本前面————代理库需要先加载
    attributes: scriptAttr
  })))
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
      axios: 'axios',
      'vue-router': 'VueRouter',
      'vue-i18n': 'VueI18n',
      'element-ui': 'ElementUI'
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
  // },
  // filenameHashing: false,
}
