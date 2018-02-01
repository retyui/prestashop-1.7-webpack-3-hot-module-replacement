const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const {DEV, outputFolderName} = require('./util.js');

let config = {
  entry: {
    main: [
      './js/theme.js',
      './css/theme.scss'
    ]
  },
  output: {
    path: path.resolve(__dirname, `../../${outputFolderName}/`),
    filename: 'theme.js'
  },
  module: {
    rules: [
      {
        test: /\.js/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: !DEV
              }
            },
            'postcss-loader',
            'sass-loader'
          ]
        })
      },
      {
        test: /.(png|woff(2)?|eot|ttf|svg)(\?[a-z0-9=\.]+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '../css/[hash].[ext]'
            }
          }
        ]
      },
      {
        test : /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      }
    ]
  },
  externals: {
    prestashop: 'prestashop',
    $: '$',
    jquery: 'jQuery'
  },
  plugins: [
    new ExtractTextPlugin({
      filename: path.join('..', 'css', 'theme.css'),
      allChunks: true,
      disable: DEV
    })
  ]
};

module.exports = config;
