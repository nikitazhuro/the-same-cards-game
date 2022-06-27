const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: ['./src/index.tsx'],
  resolve: {
    extensions: [".tsx", ".js", ".ts"],
  },
  output: {
    filename: '[name].build.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['babel/preset-env', 'babel/preset-react'],
          },
        }
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },

    ]
  },
  devServer: {
    port: 4000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ]
}