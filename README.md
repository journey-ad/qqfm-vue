# Vue 制作的 QQFM 播放器

[DEMO](http://lab.getloli.com/qqfm-vue)（非实时代码）

![qrcode](https://api.imjad.cn/qrcode/?text=http%3A%2F%2Flab.getloli.com%2Fqqfm-vue&size=200&level=H)

<details>
 <summary>建议在无痕浏览窗口中打开且使用 http 协议访问</summary>
  
 由于腾讯的防盗链策略，登录过腾讯业务后会在 `.qq.com` 域上设置`skey`字段值的 Cookie
  
 企鹅FM后端接口接收到此 Cookie 字段值后，将采用更严格的防盗链策略，同时验证由`skey`计算而来的`g_tk`值，造成请求失败
 
 音频资源文件协议仅支持 http，若页面为 https 协议，会造成部分浏览器下载功能异常
</details>

## 开发中
界面和功能参考[企鹅 FM](https://fm.qq.com) 网页端 & Android 版本 APP

由于是边学边做的项目，某些方法或技术可能不是最优解或业内通行做法；一些相似的组件和功能可能会换用不同的方法实现；项目目录内可能遗留临时或无效文件

## 技术栈
- Vue.js
- vue-cli
- vuex
- vue-router
- vant
- better-scroll
- axios
- fetch-jsonp
- lodash
- moment

## 功能

- [x] 分类列表
- [x] 专辑列表
- [x] 播放界面
- [x] 单节目播放

## TODO
- [x] 播放列表
- [ ] 历史记录
- [x] 上一曲/下一曲
- [x] 音量调整
- [x] 定时关闭
- [ ] 收藏
- [x] 下载
- [x] 进度拖拽
- [ ] 逻辑优化
- [ ] 异常处理


## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
