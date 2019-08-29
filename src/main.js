// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import router from './router'

import './assets/scss/main.scss'

// register global components
import StyleGuide from './views/StyleGuide.vue'
import Hero from './components/Hero.vue'
import Footer from './components/Footer.vue'
import Accordion from './components/Accordion.vue'
import AccordionItem from './components/AccordionItem.vue'
import Carousel from './components/Carousel/Carousel'
import Slide from './components/Carousel/Slide'

Vue.component('style-guide', StyleGuide)
Vue.component('hero', Hero)
Vue.component('footer', Footer)
Vue.component('accordion', Accordion)
Vue.component('accordion-item', AccordionItem)
Vue.component('carousel', Carousel)
Vue.component('slide', Slide)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
