const path = require('path');

module.exports = {
  entry: './asynchronous.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
};