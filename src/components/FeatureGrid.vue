<template>
  <section>
    <div class="feature-grid" :class="backgroundColor">
      <div class="feature">
        <a :href="learnMoreLink" :aria-label="title">
          <img :src="image" :alt="altText"/>
          <div class="description">
            <p class="title">{{title}}</p>
            <p class="copy">{{description}}</p>
            <a class="caret-right" href="#" :aria-label="title">{{learnMoreLinkTitle}}</a>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
    export default {
        name: 'FeatureGrid',
        props: {
            image: String,
            altText: String,
            title: String,
            description: String,
            textAlign: String,
            imageAlign: String,
            backgroundColor: String,            
            numOfCols: [1, 2, 3, 4, 5],
            isMobileCarousel: Boolean,
            learnMoreLink: String,
            learnMoreLinkTitle: String
        }
    }
</script>
