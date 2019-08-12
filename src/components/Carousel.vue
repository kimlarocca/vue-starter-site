<template>
  <div>
    <div class="carousel">
      <slot name="slide">
        <div
          v-for="(slide, index) in slides"
          :key="index"
          v-show="activeIndex === index">
          {{ slide }}
        </div>
      </slot>
    </div>

    <!--    <div class="carousel">-->

    <!--      <transition-group tag="div" :name="transitionName" class="slides-group">-->
    <!--        <div v-if="show" :key="slides[current].id" class="slide" :class="slides[current].className">-->
    <!--          <p>I'm {{slides[current].className}}! {{ slides[current].id }}</p>-->
    <!--        </div>-->
    <!--      </transition-group>-->

    <!--      <div class="buttons">-->
    <!--        <div class="btn btn-prev" aria-label="Previous slide" @click="slide(-1)">&#10094;</div>-->
    <!--        <div class="btn btn-next" aria-label="Next slide" @click="slide(1)">&#10095;</div>-->
    <!--      </div>-->

    <!--      <div class="dots">-->
    <!--        <p @click="goToSlide(slides[current].id)">go to slide 1</p>-->
    <!--      </div>-->

    <!--    </div>-->

    <div class="dots"><p @click="goToIndex(0)">go to index 0</p></div>

  </div>
</template>

<script>
    export default {
        name: 'Carousel',
        data () {
            return {
                activeIndex: 0
            }
        },
        methods: {
            goToIndex (index) {
                this.activeIndex = index
            }
        }
        // data: function () {
        //     return {
        //         current: 0,
        //         direction: 1,
        //         transitionName: 'fade',
        //         show: {
        //             default: false
        //         },
        //         slides: [
        //             {className: 'blue', id: 1},
        //             {className: 'red', id: 2},
        //             {className: 'yellow', id: 3}
        //         ]
        //     }
        // },
        // methods: {
        //     slide (dir) {
        //         this.direction = dir
        //         dir === 1
        //             ? (this.transitionName = 'slide-next')
        //             : (this.transitionName = 'slide-prev')
        //         let len = this.slides.length
        //         this.current = (this.current + dir % len + len) % len
        //     },
        //     goToSlide (id) {
        //         this.current = this.slides[id]
        //     }
        // },
        // mounted () {
        //     this.show = true
        // }
    }

</script>

<style scoped lang="scss">
  /* FADE IN */
  .fade-enter-active {
    transition: opacity 1s;
  }

  .fade-enter {
    opacity: 0;
  }

  /* GO TO NEXT SLIDE */
  .slide-next-enter-active,
  .slide-next-leave-active {
    transition: transform 0.5s ease-in-out;
  }

  .slide-next-enter {
    transform: translate(100%);
  }

  .slide-next-leave-to {
    transform: translate(-100%);
  }

  /* GO TO PREVIOUS SLIDE */
  .slide-prev-enter-active,
  .slide-prev-leave-active {
    transition: transform 0.5s ease-in-out;
  }

  .slide-prev-enter {
    transform: translate(-100%);
  }

  .slide-prev-leave-to {
    transform: translate(100%);
  }

  /* SLIDER STYLES */

  .dots {
    position: absolute;
    bottom: 0;
    z-index: 10;
  }

  .slide {
    width: 100%;
    height: 900px;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

</style>
