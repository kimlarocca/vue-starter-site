<template>
  <a class="button" :class="buttonStyle" href="#"><slot name="cta"></slot></a>
</template>

<script>
  export default {
    name: 'Button',
    props: ['buttonStyle']
  }
</script>

<style scoped lang="scss">
  @import "../assets/scss/variables";


</style>
