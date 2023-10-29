const path = require('path');

module.exports = {
  entry: {
    main: './src/app.js',
    clases: './src/js/clases.js',
  },
  output: {
    filename: '[name].main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};