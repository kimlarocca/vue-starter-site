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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="46px"
                height="46px"
              >
                <image x="0px" y="0px" width="46px" height="46px"
                       xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAQAAAD9sOO8AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfjCA8FKwatzwKsAAACnUlEQVRYw73XTWgUZxgH8F8mITFaYkVrRWz0oFAMvfgVxIK5aQ5ipawKi0r9QATBgyAoKhF6FnI1CrYSRZuao/bU9GAlBm9BhSho1BITW0nwo6tEPQzrajQ78+4uPqd3Z/7z493ZnWfet+qNhGqwwgrfmmumqXjuX/+4pU+vseKXVhXBa7X6wfeqJzk/7opul7wMxafI2mFO0tfCIyd1+j893qJNYwo4X4Pa9KTB6xyWDYDz1elnueL4LKd8VwIN/bZ7PDne6BfzS6Thnq3ufxqf44J5ZdDwwEZD+Q/Ru8P1OsqmmadD/cf4EU1l09Dk6ES8xeaK0LBJSzyI73mdP4L+10k1aI1cfubZitI0xk9K1Rtq/eXriuIMWy0XoTWRbjcQiM+2Nr4tGxKjnfa7GchvINJgVWKwWr8tznsdgK/SEGmetF8Xqgr/OehA4elLMaHmyLKA2Vy07VOtdZJaHlkYgDNgt3bPU2UXRhYE4bzSbm+qn3d+5KtAHHrs0JWYmhH5ogScIQcd8KhoZlqUEvu4xnX5tXikxtMS5z7DHj8VTTyrMVISvsQhSxIyTyJ3g+Fq251KpLkXuRNIz3XcYdNTJG9H+oLoNU5blzLbV6PXeIruAlPts1VdSnrctciYK4nBl2hy2q7UNH8bjdCdGGywzpmgFkd3/LK4bDghuN5eXwbRwy7FeM6JhOg+i4JoOuQ+y9Iip62CNMfixXS+cfW4UDG6y5/xoLDKrfebxRWgb8h4EQ8LLfeFnR6WTT+0M0+/jzMka7AselD2/fVBNOFkRn/JdL/Mh5Ob+CYakXGuJPqsjJEPD33mrWJcU2TtMjsFPKwjbJMbV61WP1pZZHt+1e+lbM8LNV2zpRb5xizT8Mxj9w24rtdo8UvfAmTOpx1zx5EQAAAAAElFTkSuQmCC"/>
              </svg>
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
            openInNewWindow: Boolean,
            hasVideo: Boolean,
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
