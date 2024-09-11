const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: '[name].bundle.js',
  },
  // оптимальный вариант с точки зрения скорости и содержательности
  devtool: 'eval-cheap-source-map',
  devServer: {
    static: './dist',
    // gzip-сжатие обслуживаемых (served) файлов
    compress: true,
    // вместо ошибки 404 (запрашиваемая страница отсутствует), возвращается index.html
    historyApiFallback: true,
    // открыть браузер после начала обслуживания файлов
    open: true,
    // порт
    client: {
      overlay: {
        errors: true, //показывать ошибки
        warnings: false, //не показывать предупреждения}
      },
    },
  },
})
