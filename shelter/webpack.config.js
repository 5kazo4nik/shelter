const webpack = require('webpack');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (env, options) => {
  const isProduction = options.mode === 'production';
  const filename = (ext) => (isProduction ? `[name].[contenthash].${ext}` : `[name].${ext}`);
  const optimization = () => {
    const configObj = {
      splitChunks: {
        chunks: 'all',
      },
    };
    return configObj;
  };

  const config = {
    mode: isProduction ? 'production' : 'development',
    devtool: isProduction ? false : 'source-map',
    watch: !isProduction,
    watchOptions: {
      poll: true,
      ignored: /node_modules/,
    },
    optimization: optimization(),
    entry: {
      main: './scripts/main.js',
      pets: './scripts/pets.js',
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: `./scripts/${filename('js')}`,
      publicPath: '',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        },
        {
          test: /\.html$/i,
          loader: 'html-loader',
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath: (resourcePath, context) => {
                  return path.relative(path.dirname(resourcePath), context) + '/';
                },
              },
            },
            'css-loader',
            'sass-loader',
          ],
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          type: 'asset/resource',
          generator: {
            filename: `./img/${filename('[ext]')}`,
          },
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
          generator: {
            filename: `./fonts/${filename('[ext]')}`,
          },
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({
        filename: `./css/${filename('css')}`,
      }),
      new HtmlWebpackPlugin({
        template: './pages/index.html',
        filename: 'index.html',
        chunks: ['main'],
        minify: {
          collapseWhitespace: isProduction ? true : false,
        },
      }),
      new HtmlWebpackPlugin({
        template: './pages/pets/pets.html',
        filename: 'pets.html',
        chunks: ['pets'],
        minify: {
          collapseWhitespace: isProduction ? true : false,
        },
      }),
    ],
  };
  return config;
};
