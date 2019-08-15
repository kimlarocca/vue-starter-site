// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/scss/main.scss'

// register global components
import Hero from './components/Hero.vue'
import MiniHero from './components/MiniHero.vue'
import UpcomingShowsCard from './components/UpcomingShowsCard.vue'
import CategoryCard from './components/CategoryCard.vue'
import PressReleaseCard from './components/PressReleaseCard.vue'
import NewsCard from './components/NewsCard.vue'
import FeatureGrid from './components/FeatureGrid.vue'
import EventCard from './components/EventCard.vue'
import AnnouncementCallout from './components/AnnouncementCallout.vue'
import PersonProfile from './components/PersonProfile.vue'

Vue.component('hero', Hero)
Vue.component('mini-hero', MiniHero)
Vue.component('upcoming-shows-card', UpcomingShowsCard)
Vue.component('category-card', CategoryCard)
Vue.component('press-release-card', PressReleaseCard)
Vue.component('news-card', NewsCard)
Vue.component('feature-grid', FeatureGrid)
Vue.component('event-card', EventCard)
Vue.component('announcement-callout', AnnouncementCallout)
Vue.component('person-profile', PersonProfile)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
