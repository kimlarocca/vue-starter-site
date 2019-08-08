import Vue from 'vue'
import Router from 'vue-router'
import StyleGuide from '../views/StyleGuide'
import Hero from '../views/Hero'
import HeroCarousel from '../views/HeroCarousel'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Style Guide',
      component: StyleGuide
    },
    {
      path: '/Hero',
      name: 'Hero',
      component: Hero
    },
    {
      path: '/Carousel',
      name: 'HeroCarousel',
      component: HeroCarousel
    }
  ]
})
