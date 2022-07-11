//@ts-check

'use strict';

const path = require('path');
const process = require("process");

// eslint-disable-next-line @typescript-eslint/naming-convention
const HtmlWebpackPlugin = require('html-webpack-plugin');
// eslint-disable-next-line @typescript-eslint/naming-convention
const { VueLoaderPlugin } = require("vue-loader");

/**@type {"development" | "production"} */
let mode = process.env.mode === "development" ? "development" : "production";

//@ts-check
/** @typedef {import('webpack').Configuration} WebpackConfig **/

/** @type WebpackConfig */
const webConfig = {
  target: 'web', // vscode extensions run in a Node.js-context 📖 -> https://webpack.js.org/configuration/node/
  mode: mode, // this leaves the source code as close as possible to the original (when packaging we set this to 'production')

  entry: {
    ormEditor: path.resolve(__dirname, "../src/view/orm/ormView.js")
  }, // the entry point of this extension, 📖 -> https://webpack.js.org/configuration/entry-context/
  output: {
    // the bundle is stored in the 'dist' folder (check package.json), 📖 -> https://webpack.js.org/configuration/output/
    path: path.resolve(__dirname, '../dist'),
    filename: '[name]/app.js',
    libraryTarget: 'window'
  },
  resolve: {
    // support reading TypeScript and JavaScript files, 📖 -> https://github.com/TypeStrong/ts-loader
    extensions: ['.js', '.css', '.less']
  },
  optimization: {
    minimize: mode !== "development"
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.jsx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.html?$/,
        use: 'raw-loader'
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']   //  <=  Order is very important
      }
    ]
  },
  devtool: 'nosources-source-map',
  plugins: [
    new VueLoaderPlugin()
  ]
};

if (mode === "development") {
  webConfig.devServer = {
    port: 80,
    open: true
  };
}

module.exports = webConfig;