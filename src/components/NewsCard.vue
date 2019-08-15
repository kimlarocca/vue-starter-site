<template>
  <section class="news-card">

    <div class="card">
      <a :href="learnMoreLink" :aria-label="title">
        <img :src="image" :alt="altText">
        <div class="title">
          <p class="subhead6">{{ subtitle }}</p>
          <p class="body-text2">{{ title }}</p>
          <template v-if="hasTextLink">
            <p class="subhead5 caret-right"><a :href="learnMoreLink" class="learn-more">learn more</a></p>
          </template>
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
            learnMoreLink: String,
            hasTextLink: {
                default: false
            }
        }
    }
</script>
