const ENV = process.env.NODE_ENV;
const entry = './src/main.js';
const packageName = 'admin';
module.exports = {
  chainWebpack: (config) => {
    console.log('env:', ENV);
    console.log('entry:', entry);

    config.entry('app')
      .add(entry)
      .end();

    config.devServer.set('inline', false);
    config.devServer.set('hot', true);
    // config.devServer.set('headers', {
    //   'Access-Control-Allow-Origin': '*',
    //   'Access-Control-Allow-Headers': 'X-Requested-With',
    //   'Access-Control-Allow-Methods': 'PUT,POST,GET,DELETE,OPTIONS',
    //   'X-Powered-By': '3.2.1',
    //   'Content-Type': 'application/json;charset=utf-8',
    // });

    
    config.output
      .library(`${packageName}-[name]`)
      .libraryTarget('umd')
      .jsonpFunction(`webpackJsonp_${packageName}`);
  },
  filenameHashing: false,
}
