<template>
  <section class="hero">

    <div class="desktop-background" :style="{ backgroundImage: `url('${image}')` }"></div>

    <!-- mobile image is optional, show desktop image if it doesn't exist -->
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
            <h2 class="likeH1">
              <slot name="header"></slot>
              <span :style="{ color: accentColor }"><slot name="colorHeader"></slot></span>
            </h2>
          </template>

          <slot name="subheader" class="subhead4"></slot>
          <slot name="cta1"></slot>
          <slot name="cta2"></slot>
          <slot name="link" :style="{ color: accentColor }"></slot>
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
    }
  }
</script>

<style scoped lang="scss">
  @import "../assets/scss/variables";

  .hero {
    height: 700px;
    width: 100%;
    display: flex;
    position: relative;

    .desktop-background,
    .mobile-background {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: top center;
      @media all and (max-width: $breakpoint-mobile) {
        display: none;
      }
    }

    .mobile-background {
      display: none;
      @media all and (max-width: $breakpoint-mobile) {
        display: block;
      }
    }

    .container {
      display: flex;
      z-index: 1;

      &.center {
        justify-content: center;
      }

      &.right {
        justify-content: flex-end;

        .content {
          border-left: none;
        }
      }
    }

    .content {
      width: 100%;
      max-width: 480px;
      display: flex;
      text-align: left;
      border-left: solid 1px white;
      padding: 0 0 0 32px;
      align-self: flex-start;
      @media all and (max-width: $breakpoint-mobile) {
        max-width: 100%;
        padding: 0 0 0 32px;
        div {
          width: 100%;
        }
      }

      h1,
      .likeH1 {
        color: white;
        margin-top: -6px; // accounts for empty space in font so it lines up with the white line
        margin-bottom: .5rem;
      }

      p {
        color: white;
        margin-bottom: 3rem;

        @media all and (max-width: $breakpoint-mobile) {
          font-weight: 700;
        }

        &.subhead5 {
          margin: 0 0 1rem;
        }

        &.bodytext1,
        &.bodytext2,
        &.bodytext3,
        &.bodytext4 {
          font-weight: 700;
        }
      }

      &.right {
        align-self: flex-end;
      }

      .button {
        margin: 0 2rem 0 0;
        @media all and (max-width: $breakpoint-mobile) {
          width: calc(100% - 54px); // 54 = 50px padding plus 4px border
          margin: 0 0 2rem 0;
        }
      }

      .text {
        &:hover {
          color: white;
          opacity: 1;
        }
      }
    }

    &.large {
      height: 900px;

      @media all and (max-width: $breakpoint-mobile) {
        height: 100vh;
      }

    }

    &.smallHeader {
      h1,
      .likeH1 {
        font-size: 3.5rem;
        line-height: 4.125rem;
        font-weight: normal;
        @media all and (max-width: $breakpoint-mobile) {
          font-weight: 700;
        }
      }
    }

  }
</style>
