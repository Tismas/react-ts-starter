import path from 'path';
import Webpack, { WebpackPluginInstance } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const config: Webpack.Configuration = {
  entry: ['babel-polyfill', './src/index.tsx'],
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js',
    publicPath: '/',
  },
  plugins: [
    (new HtmlWebpackPlugin({
      inject: true,
      template: './public/index.html',
    }) as unknown) as WebpackPluginInstance,
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
