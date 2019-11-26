const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src'),
      },
    },
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
  //   config.devServer.set('inline', false);
  //   config.devServer.set('hot', true);
  //   config.devServer.set('headers', {
  //     'Access-Control-Allow-Origin': '*',
  //     'Access-Control-Allow-Headers': 'X-Requested-With',
  //     'Access-Control-Allow-Methods': 'PUT,POST,GET,DELETE,OPTIONS',
  //     'X-Powered-By': '3.2.1',
  //     'Content-Type': 'application/json;charset=utf-8',
  //   });   
  // },
  // filenameHashing: false,
}
