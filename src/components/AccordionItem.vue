<template>
  <li
    class="accordion-item"
  >
    <div
      class="accordion-header"
      :class="{'accordion-header-active': visible, 'mobile-only': isMobileOnly}"
      @click="open"
    >

      <slot name="header"></slot>
      <div class="accordion-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="22px" height="13px">
          <image x="0px" y="0px" width="22px" height="13px"
                 xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAANCAMAAACae25RAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAe1BMVEUqDg0qDg0qDg0qDg0qDg0qDg0qDg0qDg0qDg0qDg0qDg0qDg0qDg0qDg0qDg0qDg0qDg0qDg0qDg0qDg0qDg0qDg0qDg0qDg0qDg0qDg0qDg0qDg0qDg0qDg0qDg0qDg0qDg0qDg0qDg0qDg0qDg0qDg0qDg0qDg3///8cBFVRAAAAJ3RSTlMAvl+9fTM0fIAhf6ALDOvsvN3T1AL1srH0E5OUJngnQFo/WStvl5aaK4PUAAAAAWJLR0QovbC1sgAAAAd0SU1FB+MIDwoxCPEGkk0AAABuSURBVBjTbY9VDoBADESLu7svOve/ISEEdpH+zMtL03RIkukzskIqtLfVYRCZsJ7Wgn2EA1e0HpwTFF/UQXhRFHObRDemWX5hUaZ8pUJ9QoNKPNiiO6JD//xqACNiGN8dJswzpm/jBVjoZ9aN8w4YHwZTxDE/JgAAAABJRU5ErkJggg=="/>
        </svg>
      </div>
    </div>

    <transition
      name="accordion"
      @enter="start"
      @after-enter="end"
      @before-leave="start"
      @after-leave="end">

      <div class="accordion-content"
           v-show="visible">
        <ul>
          <slot name="content"></slot>
        </ul>
      </div>
    </transition>
  </li>
</template>


<script>
    export default {
        props: {
            openOnLoad: {
                Boolean: false
            }
        },
        inject: ['Accordion'],
        data () {
            return {
                index: null
            }
        },
        computed: {
            visible () {
                return this.Accordion.active.includes(this.index)
            },
            isMobileOnly () {
                console.log(this.mobileOnly)
                return this.mobileOnly
            }
        },
        methods: {
            open () {
                if (this.Accordion.allowMultiple) {
                    // if multiple accordions are allow to be open at once
                    if (this.visible) {
                        let itemIndex = this.Accordion.active.indexOf(this.index)
                        this.Accordion.active.splice(itemIndex, 1)
                    } else {
                        this.Accordion.active.push(this.index)
                    }
                } else {
                    // if only 1 accordion can be open at a time
                    if (this.visible) {
                        let itemIndex = this.Accordion.active.indexOf(this.index)
                        this.Accordion.active.splice(itemIndex, 1)
                    } else {
                        this.Accordion.active = []
                        this.Accordion.active.push(this.index)
                    }
                }
            },
            start (el) {
                el.style.height = el.scrollHeight + 'px'
            },
            end (el) {
                el.style.height = ''
            }
        },
        created () {
            this.index = this.Accordion.count++
            this.mobileOnly = false
            if (this.Accordion.mobileOnly) {
                this.open()
                this.mobileOnly = true
            }
            if (this.openOnLoad) {
                this.open()
            }
        }
    }
</script>

<style lang="scss" scoped>

  $breakpoint-mobile: 1240px;

  .accordion-item {
    position: relative;

    .accordion-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;

      &.mobile-only {
        pointer-events: none;
        cursor: default;
        @media all and (max-width: $breakpoint-mobile) {
          pointer-events: auto;
          cursor: pointer;
        }

        .accordion-icon {
          display: none;
          @media all and (max-width: $breakpoint-mobile) {
            display: block;
          }
        }
      }
    }

    .accordion-header-active {
      .accordion-icon {
        transform: rotate(180deg);
      }
    }

    .accordion-enter-active,
    .accordion-leave-active {
      will-change: height, opacity;
      transition: height 0.3s ease, opacity 0.3s ease;
      overflow: hidden;
    }

    .accordion-enter,
    .accordion-leave-to {
      height: 0 !important;
      opacity: 0;
    }
  }

</style>
