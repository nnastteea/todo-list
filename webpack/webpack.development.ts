import { merge } from 'webpack-merge';
import common from './webpack.common';
import { Configuration } from 'webpack';

const developmentConfig: Configuration = {
  mode: 'development',
  output: {
    filename: '[name].bundle.js',
  },
  devtool: 'eval-cheap-source-map',
  devServer: {
    static: './dist',
    compress: true,
    historyApiFallback: true,
    open: true,
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
  },
};

export default merge(common, developmentConfig);