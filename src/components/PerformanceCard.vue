<template>

  <div class="performance-card">
    <div class="icon">
      <i class="fas fa-calendar-alt text-brown fa-3x"></i>
    </div>
    <div class="content">
      <p class="location subhead6"><strong>{{ location }}</strong></p>
      <p class="body-text3">{{ dateRange }}</p>
      <p><a :href="link" class="button blue">buy tickets</a></p>
    </div>
  </div>

</template>

<script>
    export default {
        name: 'PerformanceCard',
        props: {
            location: String,
            dateRange: String,
            link: String
        }
    }
</script>
