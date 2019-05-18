import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


const Recommend = (resolve) => {
  import(/* webpackChunkName: "recommend" */ './views/Recommend.vue').then((module) => {
    resolve(module)
  })
}

const Album = (resolve) => {
  import(/* webpackChunkName: "album" */ './views/Album.vue').then((module) => {
    resolve(module)
  })
}

const Category = (resolve) => {
  import(/* webpackChunkName: "category" */ './views/Category.vue').then((module) => {
    resolve(module)
  })
}

const SubCategory = (resolve) => {
  import(/* webpackChunkName: "subCategory" */ './views/SubCategory.vue').then((module) => {
    resolve(module)
  })
}

const Me = (resolve) => {
  import(/* webpackChunkName: "me" */ './views/Me.vue').then((module) => {
    resolve(module)
  })
}

const Radio = (resolve) => {
  import(/* webpackChunkName: "radio" */ './views/Radio.vue').then((module) => {
    resolve(module)
  })
}

const About = (resolve) => {
  import(/* webpackChunkName: "about" */ './views/About.vue').then((module) => {
    resolve(module)
  })
}


export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      name: 'recommend',
      component: Recommend,
      children: [
        {
          path: ':id',
          component: Album
        }
      ]
    },
    {
      path: '/album/:id',
      name: 'album',
      component: Album
    },
    {
      path: '/category',
      name: 'category',
      component: Category,
      children: [
        {
          path: ':id',
          name: 'subCategory',
          component: SubCategory
        }
      ]
    },
    {
      path: '/me',
      name: 'me',
      component: Me
    },
    {
      path: '/radio',
      name: 'radio',
      component: Radio
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: About
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
