import path from 'path';
import Webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const isProduction = process.env.NODE_ENV === 'production' ? 'production' : 'development';

const config: Webpack.Configuration = {
  entry: ['babel-polyfill', './src/index.tsx'],
  mode: isProduction,
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: isProduction ? 'app.[contenthash].js' : 'app.js',
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
