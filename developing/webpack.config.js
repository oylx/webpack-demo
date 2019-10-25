const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const FileListPlugin = require('./plugins/filelist')

module.exports = {
  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash:6].js',
  },

  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: [
          path.resolve(__dirname, 'src'),
        ],
        use: [
          {
            loader:'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              cacheDirectory: true,
            }
          }
        ]
      },
      {
        test: /\.(c|le)ss$/,
        use: [
          'style-loader',
          {
            loader:MiniCssExtractPlugin.loader
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
      {
        test: /\.md$/,
        use: [
          {
            loader: "html-loader"
          },
          path.resolve('./loaders/markdown.js')
        ]
      }
    ],
  },

  resolve: {
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html', // 配置输出文件名和路径
      template: 'src/index.html', // 配置文件模板
    }),
    new MiniCssExtractPlugin('[name].[hash:6].css'),
    new FileListPlugin()
  ],
}
