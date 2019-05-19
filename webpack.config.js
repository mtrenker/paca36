const path = require('path');
const app = require('./package.json');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.tsx'),

  output: {
    filename: 'paca36.[hash].js',
    path: path.resolve(__dirname, 'dist'),
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },

  module: {
    rules: [{ test: /\.(ts|js)x?$/, loader: 'babel-loader', exclude: /node_modules/ }],
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: app.name
    }),
    new Dotenv(),
  ],

  node: {
    fs:'empty'
  },

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
  }
};
