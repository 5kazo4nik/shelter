const webpack = require('webpack');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// module.exports = (env, options) => {
//   const isProduction = options.mode === 'production';
//   const config = {
//     devtool: isProduction ? false : 'source-map',
//     watch: !isProduction,
//     watchOptions: {
//       poll: true,
//       ignored: /node_modules/,
//     },
//     entry: {
//       index: './shelter/pages/index.html',
//       pets: './shelter/pages/pets/pets.html',
//       indexjs: './shelter/scripts/index.js',
//       main: './shelter/sass/main.scss',
//       petscss: './shelter/sass/pets.scss',
//     },
//     output: {
//       filename: 'bundle.js',
//       path: path.resolve(__dirname, 'dist'),
//       assetModuleFilename: 'assets/[hash][ext][query]',
//     },
//     devServer: {
//       contentBase: './dist',
//       hot: true,
//     },
//     module: {
//       rules: [
//         {
//           test: /\.js$/,
//           exclude: /node_modules/,
//           use: {
//             loader: 'babel-loader',
//             options: {
//               presets: ['@babel/preset-env'],
//             },
//           },
//         },
//         {
//           test: /\.s[ac]ss$/i,
//           use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
//         },
//         {
//           test: /\.(png|svg|jpg|jpeg|gif)$/i,
//           type: 'asset/resource',
//         },
//         {
//           test: /\.(woff|woff2|eot|ttf|otf)$/i,
//           type: 'asset/resource',
//         },
//         {
//           test: /\.html$/i,
//           loader: 'html-loader',
//         },
//       ],
//     },
//     plugins: [
//       new CleanWebpackPlugin(),
//       new MiniCssExtractPlugin({
//         filename: 'css/[name].css',
//       }),
//       new HtmlWebpackPlugin({
//         template: './shelter/pages/index.html',
//         filename: 'index.html',
//         chunks: ['index', 'indexjs', 'main'],
//       }),
//       new HtmlWebpackPlugin({
//         template: './shelter/pages/pets/pets.html',
//         filename: 'pets.html',
//         chunks: ['pets', 'indexjs', 'petscss'],
//       }),
//     ],
//   };
// };

//////////////////////////////////////////////////////////////////

// module.exports = (env, options) => {
//   const isProduction = options.mode === 'production';
//   const config = {
//     mode: isProduction ? 'production' : 'development',
//     devtool: isProduction ? false : 'source-map',
//     watch: !isProduction,
//     watchOptions: {
//       poll: true,
//       ignored: /node_modules/,
//     },
//     entry: {
//       index: './shelter/pages/index.html',
//       pets: './shelter/pages/pets/pets.html',
//       indexjs: './shelter/scripts/index.js',
//       main: './shelter/sass/main.scss',
//       petscss: './shelter/sass/pets.scss',
//     },
//     output: {
//       path: path.resolve(__dirname, 'dist'),
//       filename: '[name].js',
//     },
//     module: {
//       rules: [
//         {
//           test: /\.js$/,
//           exclude: /node_modules/,
//           use: {
//             loader: 'babel-loader',
//             options: {
//               presets: ['@babel/preset-env'],
//             },
//           },
//         },
//         {
//           test: /\.html$/i,
//           loader: 'html-loader',
//           options: {
//             sources: {
//               list: [
//                 { tag: 'img', attribute: 'src', type: 'src' },
//                 { tag: 'link', attribute: 'href', type: 'src' },
//                 { tag: 'script', attribute: 'src', type: 'src' },
//               ],
//             },
//           },
//         },
//         {
//           test: /\.scss$/,
//           use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
//         },
//         {
//           test: /\.(png|jpe?g|gif|svg)$/i,
//           type: 'asset/resource',
//           generator: {
//             filename: 'img/[name].[ext]',
//           },
//         },
//         {
//           test: /\.(woff|woff2|eot|ttf|otf)$/i,
//           type: 'asset/resource',
//           generator: {
//             filename: 'fonts/[name][ext]',
//           },
//         },
//       ],
//     },
//     plugins: [
//       new CleanWebpackPlugin(),
//       new MiniCssExtractPlugin({
//         filename: '[name].css',
//       }),
//       new HtmlWebpackPlugin({
//         template: './shelter/pages/index.html',
//         filename: 'index.html',
//         chunks: ['index', 'indexjs', 'main'],
//       }),
//       new HtmlWebpackPlugin({
//         template: './shelter/pages/pets/pets.html',
//         filename: 'pets.html',
//         chunks: ['pets', 'indexjs', 'petscss'],
//       }),
//     ],
//   };
//   return config;
// };

/////////////////////////////////////////////

module.exports = (env, options) => {
  const isProduction = options.mode === 'production';
  const config = {
    mode: isProduction ? 'production' : 'development',
    devtool: isProduction ? false : 'source-map',
    watch: !isProduction,
    watchOptions: {
      poll: true,
      ignored: /node_modules/,
    },
    entry: ['./scripts/index.js'],
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'script.js',
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
      ],
    },
    plugins: [new CleanWebpackPlugin()],
  };
  return config;
};
