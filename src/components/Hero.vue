<template>
  <section class="hero">

    <div class="desktop-background" :style="{ backgroundImage: `url('${image}')` }"></div>

    <!-- mobile image is optional, show desktop image if the mobile image doesn't exist -->
    <div class="mobile-background" v-if="mobileImage" :style="{ backgroundImage: `url('${mobileImage}')` }"></div>
    <div class="mobile-background" v-if="!mobileImage" :style="{ backgroundImage: `url('${image}')` }"></div>

    <div class="container" :class="alignment">
      <div class="content" :class="fontColor">
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

          <template v-if="hasDropdown">
            <label for="select1" class="hide-ally-element">choose a date and time</label>
            <select id="select1" class="ghost">
              <option v-for="(option, index) in dropDownMenu" :key="index" :value="option.value">{{ option.text }}
              </option>
            </select>
          </template>

          <slot name="cta1"></slot>
          <slot name="cta2"></slot>

          <!-- check if textLink slot is empty -->
          <template v-if="hasTextLink">
            <a class="text-link caret-right" :style="{ color: accentColor }">
              <slot name="textLink"></slot>
            </a>
          </template>

          <!-- check if socialLinks are provided -->
          <ul v-if="hasSocialLinks" class="social-links">
            <social-link
              v-for="(link, index) in socialLinks"
              :key="index"
              :icon="link.icon"
              :link="link.link"
              :altText="link.altText"
              color="black"
              backgroundColor="white"
            >
            </social-link>
          </ul>

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
            fontColor: String,
            accentColor: String,
            alignment: String,
            hasH1: {
                default: false
            },
            dropDownMenu: Array,
            socialLinks: Array
        },
        computed: {
            hasTextLink () {
                return !!this.$slots['textLink']
            },
            hasDropdown () {
                return !!this.$props['dropDownMenu']
            },
            hasSocialLinks () {
                return !!this.$props['socialLinks']
            }
        }
    }
</script>
