const path = require('path');
// const px2rem = require('postcss-px2rem')

const resolve = (dir) => {
  return path.join(__dirname, dir)
}

// const postcss = px2rem({
//   remUnit: 46   //基准大小 baseSize，需要和rem.js中相同
// })

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? './.'
    : '/',
  chainWebpack: (config) => {
    config.resolve.alias
      .set('assets', resolve('src/assets'))
      .set('viewss', resolve('src/views'))
      .set('components', resolve('src/components'))
      .set('base', resolve('src/base'))
      .set('apis', resolve('src/apis'))
  },
  // css: {
  //   loaderOptions: {
  //     postcss: {
  //       plugins: [
  //         postcss
  //       ]
  //     }
  //   }
  // }
}