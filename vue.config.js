const webpack = require("webpack");

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/assets/scss/master.scss";`
      }
    }
  },
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        "process.env": {
          ROOT_API: String(process.env.GIT_COMMIT)
        }
      })
    ]
  }
};
