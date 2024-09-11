const { merge } = require('webpack-merge')

const commonConfig = require('./webpack.common')

module.exports = (env) => {
  const config = require('./webpack.' + env)
  return merge(commonConfig, config)
}
