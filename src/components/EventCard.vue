<template>
  <div class="event-card" :class="alignment">
    <a :href="link">
      <div v-if="hasImage" class="image">
        <img :src="image" :alt="altText">
        <ul>
          <li v-for="(upcomingDate, index) in upcomingDates" :key="index">
            <div class="month">{{ upcomingDate.month }}</div>
            <div class="day">{{ upcomingDate.day }}</div>
          </li>
        </ul>
      </div>
      <div class="title">
        <p v-if="hasCategory" class="subhead6 category">{{ category }}</p>
        <p>
          <slot name="title"></slot>
        </p>
        <p>
          <slot name="description"></slot>
        </p>
        <p class="date-range">{{ dateRange }}</p>
      </div>
      <div class="buy-tickets">
        <p>{{ cta }}</p>
      </div>
    </a>
  </div>
</template>

<script>
    export default {
        name: 'UpcomingShowsCard',
        props: {
            image: String,
            altText: String,
            dateRange: String,
            link: String,
            cta: String,
            category: String,
            upcomingDates: Array,
            alignment: String
        },
        computed: {
            hasImage () {
                return !!this.$props['image']
            },
            hasCategory () {
                return !!this.$props['category']
            }
        }
    }
</script>
