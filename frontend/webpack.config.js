const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
      },
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
      {
        test: /\.(png|jpe?|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader'
          }
        ],
      },
    ],
  },
  mode: 'development',
  entry: {
    Index: './src/index.js'
  },
  output: {
    publicPath: './',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Angular Webpack',
      template: './src/index.html'
    })
  ],
  devServer: {
    publicPath: '/',
    contentBase: path.join(process.cwd(), 'dist'),
    historyApiFallback: true
  },
  optimization: {
    splitChunks: {
      // include all types of chunks
      chunks: 'all',
      cacheGroups: {
        vendor: {
          // splits up our npm dependencies for lazy loading
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            // get the name. E.g node_modules/packageName/not/this/part.js
            // or node_modules/packageName
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];

            // npm package names are URL-safe, but some servers don't like @ symbols

            return `npm.${packageName.replace('@', '')}`;
          }
        }
      }
    }
  }
}