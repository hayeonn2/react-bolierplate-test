const { merge } = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common.js');

require('dotenv').config({ path: './.env.development' });

module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    static: false,
    client: {
      overlay: true,
    },
    historyApiFallback: true,
    port: 3000,
    compress: true,
    hot: true,
    proxy: {
      '/api': 'http://localhost:8000',
    },
  },
  plugins: [
    // 환경 변수 등록/관리 설정
    new webpack.EnvironmentPlugin({
      // NODE_ENV: 'development',
      ...process.env,
    }),
  ],
});
