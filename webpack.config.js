const path = require('path');

module.exports = {
  mode: 'production',
  target: ['web', 'es5'],
  entry: {
    entryA: path.resolve(__dirname, 'src/entryA.js'),
    entryB: path.resolve(__dirname, 'src/entryB.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
};
