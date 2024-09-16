import { merge } from "webpack-merge";
import common from "./webpack.common";
import { Configuration } from "webpack";
import TerserPlugin from "terser-webpack-plugin";

const productionConfig: Configuration = {
  mode: "production",
  devtool: "source-map",
  output: {
    filename: "[name].[contenthash].bundle.js",
  },
  optimization: {
    runtimeChunk: "single",
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true,
          },
        },
        extractComments: false,
      }),
    ],
  },
  performance: {
    hints: "warning",
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
};

export default merge(common, productionConfig);
