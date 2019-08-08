// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/scss/main.scss'

// register global components
import Hero from './components/Hero.vue'
import Carousel from './components/Carousel.vue'
Vue.component('hero', Hero)
Vue.component('carousel', Carousel)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
