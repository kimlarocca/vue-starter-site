<template>
  <section class="news-card">

    <div class="card">
      <a :href="learnMoreLink" :aria-label="title">
        <img :src="image" :alt="altText">
        <div class="title">
          <p class="subhead6">{{ subtitle }}</p>
          <p class="body-text2">{{ title }}</p>
        </div>
      </a>
    </div>

  </section>
</template>

<script>
    export default {
        name: 'NewsCard',
        props: {
            image: String,
            altText: String,
            subtitle: String,
            title: String,
            learnMoreLink: String
        }
    }
</script>
