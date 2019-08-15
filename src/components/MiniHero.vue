<template>
  <section class="mini-hero">
    <div class="desktop-background" :style="{ backgroundImage: `url('${image}')` }"></div>

    <!-- mobile image is optional, show desktop image if it doesn't exist -->
    <div class="mobile-background" v-if="mobileImage" :style="{ backgroundImage: `url('${mobileImage}')` }"></div>
    <div class="mobile-background" v-if="!mobileImage" :style="{ backgroundImage: `url('${image}')` }"></div>

    <a v-if="hasLink" :href="link" :aria-label="cta" class="container-link"></a>
    <div class="container" :class="alignment">
      <div class="content" :class="[ font, fontColor ]">
        <div>

          <p name="preheader" class="subhead5">{{ preheader }}</p>

          <p>
            <slot name="header"></slot>
            <span :style="{ color: accentColor }"><slot name="colorHeader"></slot></span>
          </p>

          <p>
            <slot name="subheader" class="subhead4"></slot>
          </p>

          <slot name="cta"></slot>

          <!-- check if textLink slot is empty -->
          <template v-if="hasTextLink">
            <a class="text-link caret-right" :style="{ color: accentColor }">
              <slot name="textLink"></slot>
            </a>
          </template>

        </div>
      </div>
    </div>

  </section>
</template>

<script>
    export default {
        name: 'MiniHero',
        props: {
            image: String,
            mobileImage: {
                default: false
            },
            font: String,
            fontColor: String,
            accentColor: String,
            alignment: String,
            preheader: String,
            link: String,
            hasTextLink: {
                default: false
            }
        },
        computed: {
            hasLink () {
                return !!this.$props['link']
            }
        }
    }
</script>
