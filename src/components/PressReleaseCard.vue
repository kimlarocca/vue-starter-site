<template>

  <a :href="learnMoreLink" :aria-label="title">
    <div class="press-release-card" :class="color">
      <p class="subtitle subhead6">press release</p>
      <p class="title subhead3">{{ title }}</p>
      <p class="body body-text3">{{ body }}</p>
    </div>
  </a>

</template>

<script>
    export default {
        name: 'PressReleaseCard',
        props: {
            color: String,
            title: String,
            body: String,
            learnMoreLink: String
        }
    }
</script>
