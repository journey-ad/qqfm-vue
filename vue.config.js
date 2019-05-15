const px2rem = require('postcss-px2rem')

const postcss = px2rem({
  remUnit: 50   //基准大小 baseSize，需要和rem.js中相同
})

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? './.'
    : '/',
  css: {
    loaderOptions: {
      sass: {
        // @/ is an alias to src/
        // so this assumes you have a file named `src/variables.scss`
        data: '@import "@/style.scss";'
      },
      postcss: {
        plugins: [
          postcss
        ]
      }
    }
  }
}