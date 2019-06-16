module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/assets/scss/master.scss";`
      }
    }
  },
  devServer: {
    proxy: "http://localhost:8000"
  }
};
