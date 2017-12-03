var path = require('path');
var config = {
    entry: './app.jsx',
    output: {
      path: __dirname,
      filename: 'build.js'
    },
    devtool: '#sourcemap',
    stats: {
     colors: true,
     reasons: true
    },
    module: {
      loaders: [{
          test: /\.jsx?$/,
          loader: 'babel',
          query:
          {
              presets:['es2015', 'react']
          }
      }]
  },

};

module.exports = config;