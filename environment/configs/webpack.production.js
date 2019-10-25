const merge = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const baseConfig = require('./webpack.base')

const config = merge.smart(baseConfig, {
  module: {
    rules: [
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
    ],
  }
})

config.plugins.push(new MiniCssExtractPlugin('[name].css'))

module.exports = config
