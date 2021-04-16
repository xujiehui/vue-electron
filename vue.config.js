const OutputCompileTimeWebpackPlugin = require('output-compile-time-webpack-plugin')

module.exports = {
  pages: {
    index: {
      entry: 'src/renderer/main.js'
    }
  },
  configureWebpack: config => {
    const plugins = [new OutputCompileTimeWebpackPlugin()]
    config.plugins.push(...plugins)
  }
}
