<template>
  <div class="content-blade">

    <div class="grid-x">
      <div class="cell large-5 medium-12 small-12 large-order-1 medium-order-2 small-order-2">
        <div class="title">
          <slot name="title"></slot>
        </div>
        <div class="content">
          <slot name="content"></slot>
        </div>
      </div>
      <div class="cell large-7 medium-12 small-12 large-order-2 medium-order-1 small-order-1">
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
            altText: String
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
