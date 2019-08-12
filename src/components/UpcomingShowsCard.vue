<template>
  <section class="upcoming-shows-card">

    <div class="card">
      <a :href="ticketLink">
        <img :src="image" :alt="altText">
          <ul>
            <li v-for="(upcomingDate, index) in upcomingDates" :key="index">
              <div class="month">{{ upcomingDate.month }}</div>
              <div class="day">{{ upcomingDate.day }}</div>
            </li>
          </ul>
        <div class="title">
          <p class="body-text3">{{ title }}</p>
          <p class="body-text4">{{ dateRange }}</p>
        </div>
        <div class="buy-tickets">
          <p class="subhead6">buy tickets</p>
        </div>
      </a>
    </div>

  </section>
</template>

<script>
    export default {
        name: 'UpcomingShowsCard',
        props: {
            image: String,
            altText: String,
            title: String,
            dateRange: String,
            ticketLink: String,
            upcomingDates: Array
        }
    }
</script>
