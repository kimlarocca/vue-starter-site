import Vue from 'vue'
import Router from 'vue-router'
import StyleGuide from '../views/StyleGuide'
import HomePage from '../views/HomePage'
import Hero from '../views/Hero'
import MiniHero from '../views/MiniHero'
import EventCard from '../views/EventCard'
import PerformancesCard from '../views/PerformancesCard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Style Guide',
      component: StyleGuide
    },
    {
      path: '/HomePage',
      name: 'Home Page',
      component: HomePage
    },
    {
      path: '/Hero',
      name: 'Hero',
      component: Hero
    },
    {
      path: '/MiniHero',
      name: 'MiniHero',
      component: MiniHero
    },
    {
      path: '/EventCard',
      name: 'EventCard',
      component: EventCard
    },
    {
      path: '/PerformancesCard',
      name: 'PerformancesCard',
      component: PerformancesCard
    }
  ]
})
