const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    register: path.resolve(__dirname, 'src/scripts/register.js'),
    login: path.resolve(__dirname,'src/scripts/login.js'),
    home: path.resolve(__dirname,'src/scripts/home.js'),
    dashboard: path.resolve(__dirname,'src/scripts/dashboard.js')
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'admin/register/index.html',
      template: path.resolve(__dirname, 'src/templates/register/register.html'),
      chunks: ['register'],
    }),
    new HtmlWebpackPlugin({
      filename: 'admin/login/index.html',
      template: path.resolve(__dirname, 'src/templates/login/login.html'),
      chunks: ['login'],
    }),
    new HtmlWebpackPlugin({
      filename: 'admin/index.html',
      template: path.resolve(__dirname, 'src/templates/home/index.html'),
      chunks: ['home'],
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/templates/dashboard/index.html'),
      chunks: ['dashboard'],
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/public/'),
          to: path.resolve(__dirname, 'dist/'),
        },
      ],
    }),
  ],
};
