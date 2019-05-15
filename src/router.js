import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/categoryList'
    },
    {
      path: '/album',
      name: 'album',
      component: () => import(/* webpackChunkName: "album" */ './views/Album.vue')
    },
    {
      path: '/category',
      name: 'category',
      component: () => import(/* webpackChunkName: "category" */ './views/Category.vue')
    },
    {
      path: '/categoryList',
      redirect: '/categoryList/39092'
    },
    {
      path: '/categoryList/:id',
      name: 'categoryList',
      component: () => import(/* webpackChunkName: "categoryList" */ './views/CategoryList.vue')
    },
    {
      path: '/radio',
      name: 'radio',
      component: () => import(/* webpackChunkName: "radio" */ './views/Radio.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
