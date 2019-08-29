import Vue from 'vue'
import Router from 'vue-router'
import StyleGuide from '../views/StyleGuide'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Style Guide',
      component: StyleGuide
    }
  ]
})
