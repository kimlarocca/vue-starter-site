<template>
  <ul class="accordion">
    <slot></slot>
  </ul>
</template>

<script>
    export default {
        props: {
            allowMultiple: {
                default: false
            },
            mobileOnly: {
                default: false
            }
        },
        data () {
            return {
                Accordion: {
                    count: 0,
                    active: [],
                    allowMultiple: this.$props.allowMultiple,
                    mobileOnly: this.$props.mobileOnly
                }
            }
        },
        provide () {
            return {Accordion: this.Accordion}
        }
    }
</script>

<style lang="scss" scoped>
  .accordion {
    list-style: none;
    margin: 0;
    padding: 0;
  }
</style>
