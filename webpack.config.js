const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const paths = {
  entry: path.resolve(__dirname, 'src', 'index.jsx'),
  dist: path.resolve(__dirname, 'dist'),
  html: path.resolve(__dirname, 'public', 'index.html'),
  src: path.resolve(__dirname, 'src'),
};

module.exports = (env) => {
  const mode = env.mode || 'development';
  const port = env.port || 3000;
  const isDev = mode === 'development';
  return {
    mode: mode,
    entry: paths.entry,
    output: {
      filename: isDev ? '[name].[contenthash].js' : 'bundle.js',
      path: paths.dist,
      clean: true,
    },
    plugins: [
      new webpack.ProgressPlugin(),
      new HtmlWebpackPlugin({
        cache: false,
        template: paths.html,
      })
    ],
    resolve: {
      extensions: ['.js', 'jsx'],
      preferAbsolute: true,
      modules: [
        paths.src, 'node_modules',
      ],
      mainFiles: ['index'],
      alias: {},
    },
    devServer: {
      open: isDev,
      port: port,
      historyApiFallback: true,
      hot: true,
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                "@babel/preset-env",
                ["@babel/preset-react", { "runtime": "automatic" }]
              ]
            }
          }
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                modules: {
                  auto: (resPath) => Boolean(resPath.includes('.module.')),
                  localIdentName: isDev
                    ? '[path][name]__[local]--[hash:base64:5]'
                    : '[hash:base64:8]',
                },
              },
            },
            'sass-loader',
          ],
        }
      ]
    }
  };
}