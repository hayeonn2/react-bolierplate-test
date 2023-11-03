const { merge } = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common.js');

require('dotenv').config({ path: './.env.production' });

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    // 환경 변수 등록/관리 설정
    new webpack.EnvironmentPlugin({
      // NODE_ENV: 'development',
      ...process.env,
    }),
  ],
});
