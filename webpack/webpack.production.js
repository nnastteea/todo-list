const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  output: {
    filename: '[name].[contenthash].bundle.js',
  },
  optimization: {
    // создание распределенного файла времени выполнения (runtime)
    runtimeChunk: 'single', //в отдельный файл выносит код времени вып.
    minimize: true, //вкл минификацию кода
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true, //удаление console.log из кода
          },
        },
        extractComments: false, //не извлекать комментарии в отдельные файлы
      }),
    ],
  },
  performance: {
    // подсказки
    hints: 'warning',
    // максимальный размер входной точки в байтах
    // по умолчанию 250000
    maxEntrypointSize: 512000,
    // максимальный размер статических ресурсов
    // по умолчанию 250000
    maxAssetSize: 512000,
  },
})
