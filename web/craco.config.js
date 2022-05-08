const path = require("path")
const { getLoader, loaderByName } = require("@craco/craco")

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Because CEF has issues with loading source maps properly atm,
      // lets use the best we can get in line with `eval-source-map`
      if (webpackConfig.mode === 'development' && process.env.IN_GAME_DEV) {
        webpackConfig.devtool = 'eval-source-map'
        webpackConfig.output.path = path.join(__dirname, 'build')
      }

      // your overridden `file-loader`
      const overrideOptions = {
        loader: "file-loader",
        options: {
          test: /\.(png|jpe?g|gif|svg)$/i
        },
      }

      // override `style-loader`
      const { isFound, match } = getLoader(webpackConfig, loaderByName('file-loader'))

      if (isFound) {
        match.parent[match.index] = overrideOptions
      }

      return webpackConfig
    }
  },

  devServer: (devServerConfig) => {
    if (process.env.IN_GAME_DEV) {
     // Used for in-game dev mode
     devServerConfig.devMiddleware.writeToDisk = true
    }

    return devServerConfig
  }
}
