import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import { List, Toast, Loading } from 'vant';
import fastClick from 'fastclick'

import 'normalize.css'
import 'assets/style/index.scss'

Vue.use(List, Toast, Loading);

Vue.config.productionTip = false

fastClick.attach(document.body)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
