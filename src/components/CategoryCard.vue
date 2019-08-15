<template>

  <div class="category-card" :style="{ backgroundImage: `url('${image}')` }">
    <a :href="learnMoreLink" :aria-label="title">
      <div class="category">{{ title }}</div>
      <div class="overlay">
        <div>
          <p class="subtitle subhead6">{{ category }}</p>
          <p class="title">
            <slot name="shortDescription"></slot>
          </p>
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
            title: String,
            learnMoreLink: String
        }
    }
</script>
