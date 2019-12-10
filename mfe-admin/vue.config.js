const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

function resolve(dir) {
  return path.join(__dirname, dir);
}

const ENV = process.env.NODE_ENV;
const port = process.env.PORT || 8002;
const entry = './src/main.js';

module.exports = {
  // outputDir: 'dist',
  // assetsDir: 'static',
  filenameHashing: true,
  // publicPath:`//localhost:${port}`, // mfe模式需要设置publicPath，在这里设置或在入口文件引入set-public-path打包时动态改变
  // 自定义webpack配置
  devServer: {
    // host: '0.0.0.0',
    hot: true,
    disableHostCheck: true,
    port,
    overlay: {
      warnings: false,
      errors: true
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  },
  // 自定义webpack配置
  configureWebpack: {
    // name: name,
    resolve: {
      alias: {
        '@': resolve('src')
      }
    },
    output: {
      // 把子应用打包成 umd 库格式
      library: '[name]',
      filename: '[name]-[hash].js',
      libraryTarget: 'umd',
      globalObject: 'this',
    }
  },
  chainWebpack: (config) => {
    const isMFE = ['mfe_dev', 'mfe_prod'].includes(ENV); // 是否是微前端模式
    const isProd = ['mfe_prod', 'production'].includes(ENV); // 是否是生产模式

    console.log('env:', ENV);
    console.log('entry:', entry);
    !isProd && console.log('dev port:', port);

    config.entry('app')
      .add(entry)
      .end();

    if (isMFE) {
      config.externals({
        vue: 'Vue',
        vuex: 'Vuex',
        'vue-router': 'VueRouter',
        'vue-i18n': 'VueI18n',
        axios: 'axios',
        // 'element-ui': 'ElementUI'
      });    
    }
    if (isProd) {
      config.plugin('webpack-bundle-anlyzer')
        .use(BundleAnalyzerPlugin)
        .tap(args => [...args, {
          analyzerPort: 8020
        }])
        .end()
    }
  },
}
