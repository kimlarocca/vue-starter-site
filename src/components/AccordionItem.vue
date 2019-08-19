<template>
  <li class="accordion-item">
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
                index: null,
                active: false,
                accordionID: null
            }
        },
        computed: {
            visible () {
                return this.active
            },
            isMobileOnly () {
                return this.mobileOnly
            }
        },
        methods: {
            open () {
                if (this.Accordion.allowMultiple) {
                    // if multiple accordions are allowed to be open at once
                    this.active = !this.visible
                } else {
                    // if only 1 accordion can be open at a time
                    if (this.visible) {
                        this.active = false
                    } else {
                        this.closeAll()
                        this.active = true
                    }
                }
            },
            closeAll () {
                for (let i = 0; i < this.$parent.$children.length; i++) {
                    this.$parent.$children[i].$data.active = false
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
            this.accordionID = this.Accordion.id
            this.mobileOnly = false

            // open all accordions on desktop
            if (this.Accordion.mobileOnly) {
                this.open()
                this.mobileOnly = true
            }

            // open the first item in each accordion
            this.$parent.$children[0].$data.active = true

            // close all accordions if closeAll prop is true
            if (this.Accordion.closeAll) {
                this.closeAll()
            }

            // check openOnLoad prop on accordion items and open any set to true
            if (this.openOnLoad) {
                this.open()
            }
        }
    }
</script>

<style lang="scss" scoped>

  // for the mobileOnly option - set this breakpoint that transforms content into accordions on mobile only
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
