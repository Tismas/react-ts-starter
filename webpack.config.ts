import * as path from 'path';
import Webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import HtmlWebpackPlugin = require('html-webpack-plugin');

const config: Webpack.Configuration & { devServer: WebpackDevServer.Configuration } = {
  entry: ['babel-polyfill', './src/index.tsx'],
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
  devServer: {
    historyApiFallback: true,
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js',
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: './public/index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
        },
      },
    ],
  },
};

module.exports = config;
