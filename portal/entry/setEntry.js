const fs = require('fs');

const ENV = process.env.NODE_ENV;
const entry = ENV !== 'mfe' ? './entry/main-dep.js' : './entry/main-mfe.js';
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
