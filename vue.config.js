const path = require('path')
const resolve = url => path.resolve(__dirname, url)
const isCoverage = process.env.NODE_ENV === 'coverage'

module.exports = {
  lintOnSave: false,
  configureWebpack: {
    resolve: {
      alias: {
        '@assets': resolve('public/assets/'),
        '@catalog': resolve('src/components/catalog'),
        '@store': resolve('src/store.js'),
      },
    }
  },
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
  css: {
    loaderOptions: {
      stylus: {
        // GLOBAL Variables
        import: resolve('src/variables.styl')
      }
    }
  }
}
