<template>

  <div class="performances-card" :style="{ backgroundImage: `url('${image}')` }">
    <a :href="learnMoreLink">
      <div class="category">{{ category }}</div>
      <div class="overlay">
        <div>
          <p class="subtitle subhead6">{{ subtitle }}</p>
          <p class="title body-text2">{{ title }}</p>
          <p class="subhead6"><a :href="learnMoreLink" class="caret-right">learn more</a></p>
        </div>
      </div>
    </a>
  </div>

</template>

<script>
    export default {
        name: 'PerformancesCard',
        props: {
            image: String,
            category: String,
            subtitle: String,
            title: String,
            learnMoreLink: String
        }
    }
</script>
