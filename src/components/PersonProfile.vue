<template>
  <div class="person-profile">

    <div class="grid-x grid-margin-x">
      <div class="quote cell large-8 medium-7 small-12" :class="backgroundColor">
        <p class="quote-text">
          <slot name="quoteText"></slot>
          <span class="quotation-mark">”</span>
        </p>
        <p>
          <span class="body-text2">&mdash;</span>
          <slot name="name"></slot>
        </p>
      </div>
      <div class="cta cell large-4 medium-5 small-12" :style="{ backgroundImage: `url('${image}')` }">
        <a :href="link" :target="target">
          <div class="content">
            <div class="play-button" v-if="hasVideo">
              <i class="fas fa-play-circle text-white fa-3x"></i>
            </div>
            <div class="category">
              <p class="subhead6">{{ category }}</p>
            </div>
            <div class="description">
              <p>
                <slot name="description"></slot>
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'PersonProfile',
        props: {
            image: String,
            category: String,
            link: String,
            openInNewWindow: {
                default: false
            },
            hasVideo: {
                default: false
            },
            backgroundColor: String
        },
        computed: {
            target () {
                let target = '_self'
                if (this.$props['openInNewWindow']) target = '_blank'
                return target
            }
        }
    }
</script>
