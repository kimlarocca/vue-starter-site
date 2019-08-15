<template>
  <div class="content-blade" :class="backgroundColor">

    <div class="grid-x">
      <div class="content-cell cell" :class="layoutCell1">
        <div class="content-container" :class="border">
          <div class="content">
            <slot name="content"></slot>
          </div>
        </div>
      </div>
      <div class="image-cell cell" :class="layoutCell2">
        <img :src="image" :alt="altText">
      </div>
    </div>

  </div>
</template>

<script>
    export default {
        name: 'PersonProfile',
        props: {
            image: String,
            altText: String,
            backgroundColor: String,
            layoutOption: String,
            hasBorder: Boolean
        },
        computed: {
            layoutCell1 () {
                let layoutCell1 = 'large-5 medium-12 small-12 large-order-1 medium-order-2 small-order-2'
                if (this.$props['layoutOption'] === '2') layoutCell1 = 'large-12 medium-12 small-12 large-order-2 medium-order-2 small-order-2'
                return layoutCell1
            },
            layoutCell2 () {
                let layoutCell2 = 'large-7 medium-12 small-12 large-order-2 medium-order-1 small-order-1'
                if (this.$props['layoutOption'] === '2') layoutCell2 = 'large-12 medium-12 small-12 large-order-1 medium-order-1 small-order-1'
                return layoutCell2
            },
            border () {
                let border = ''
                if (this.$props['hasBorder']) border = 'border'
                return border
            }
        }
    }
</script>
