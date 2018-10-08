const path = require('path');

module.exports = {
  context: __dirname,
  entry: './frontend/eris.jsx',
  output: {
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '*']
  },
  module: {
    rules: [
      {
        test: [/\.jsx?$/], // Specifies file types to transpile
        exclude: /(node_modules)/, // Leaves dependencies alone
        loader: 'babel-loader', // Sets Babel as the transpiler
        query: {
          presets: ['@babel/env', '@babel/react'] // Tells Babel what syntaxes to translate
        }
      }
    ]
  },
  devtool: 'source-map'
};
