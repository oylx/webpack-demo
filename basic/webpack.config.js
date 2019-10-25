const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash:6].js',
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        include: [
          path.resolve(__dirname, 'src'),
        ],
        use: [
          //libraryName要写，否则报错
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              cacheDirectory: true,
            }
          }
        ]
      },
      {
        test: /.less$/,
        use: [
          'style-loader',
          {
            //webpack 4 :MiniCssExtractPlugin取代ExtractTextPlugin
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader',
          'less-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader'
          },
        ],
      },
    ],
  },

  // 代码模块路径解析的配置
  resolve: {
    modules: [
      "node_modules",
      path.resolve(__dirname, 'src'),
    ],

    extensions: [".wasm", ".mjs", ".js", ".json", ".jsx"],
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html', // 配置输出文件名和路径
      template: 'src/index.html', // 配置文件模板
    }),
    new MiniCssExtractPlugin('[name].[hash:6].css'),
  ],
}
