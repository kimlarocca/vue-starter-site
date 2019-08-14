<template>

  <div class="category-card" :style="{ backgroundImage: `url('${image}')` }">
    <a :href="learnMoreLink" :aria-label="title">
      <div class="category">{{ category }}</div>
      <div class="overlay">
        <div>
          <p class="subtitle subhead6">{{ subtitle }}</p>
          <p class="title body-text2">{{ title }}</p>
          <p class="subhead6 caret-right">learn more</p>
        </div>
      </div>
    </a>
  </div>

</template>

<script>
    export default {
        name: 'CategoryCard',
        props: {
            image: String,
            category: String,
            subtitle: String,
            title: String,
            learnMoreLink: String
        }
    }
</script>
