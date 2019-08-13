<template>
  <section class="hero">

    <div class="desktop-background" :style="{ backgroundImage: `url('${image}')` }"></div>

    <!-- mobile image is optional, show desktop image if the mobile image doesn't exist -->
    <div class="mobile-background" v-if="mobileImage" :style="{ backgroundImage: `url('${mobileImage}')` }"></div>
    <div class="mobile-background" v-if="!mobileImage" :style="{ backgroundImage: `url('${image}')` }"></div>

    <div class="container" :class="alignment">
      <div class="content">
        <div>
          <slot name="preheader" class="subhead5"></slot>

          <!-- display as H1 if hasH1 flag is true, otherwise display as H2 -->
          <template v-if="hasH1">
            <h1>
              <slot name="header"></slot>
              <span :style="{ color: accentColor }"><slot name="colorHeader"></slot></span>
            </h1>
          </template>
          <template v-else>
            <h2 class="like-h1">
              <slot name="header"></slot>
              <span :style="{ color: accentColor }"><slot name="colorHeader"></slot></span>
            </h2>
          </template>

          <slot name="subheader" class="subhead4"></slot>
          <slot name="cta1"></slot>
          <slot name="cta2"></slot>

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
    name: 'Hero',
    props: {
      image: String,
      mobileImage: {
        default: false
      },
      accentColor: String,
      alignment: String,
      hasH1: {
        default: false
      }
    },
    computed: {
      hasTextLink () {
        return !!this.$slots['textLink']
      }
    }
  }
</script>
