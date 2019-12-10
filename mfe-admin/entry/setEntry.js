const fs = require('fs');

const ENV = process.env.NODE_ENV;
const entry = ['mfe_dev', 'mfe_prod'].includes(ENV) ? './entry/main-mfe.js' : './entry/main-dep.js';
const targetFile = './src/main.js';

fs.readFile(entry, (error, data) => {
  if (error) {
    throw new Error(error);
  }

  fs.writeFile(targetFile, data, (err) => {
    if (err) {
      throw new Error(err);
    }

    console.log('Set entry file content success');
  })
});
