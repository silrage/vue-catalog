const path = require('path')
const isCoverage = process.env.NODE_ENV === 'coverage'
module.exports = {
  lintOnSave: false,
  chainWebpack: config => {
    if (isCoverage) {
      config.module
        .rule('js')
        .use('istanbul-instrumenter-loader')
        .loader('istanbul-instrumenter-loader')
        .options({
          esModules: true
        })
        .after('babel-loader');
    }
  },
}
