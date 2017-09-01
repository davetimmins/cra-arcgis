var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function override(config, env) {
  
  config.output.libraryTarget = 'amd';

  config.externals = [
    function(context, request, callback) {
      if (/^dojo/.test(request) ||
          /^dojox/.test(request) ||
          /^dijit/.test(request) ||
          /^esri/.test(request)
      ) {
        return callback(null, "amd " + request);
      }

      callback();
    }
  ];
  
  config.plugins = [...config.plugins,    
    new HtmlWebpackPlugin({
      inject: false,
      template: './public/index.html',
      filename: 'index.html'
    })
  ];

  return config;
};