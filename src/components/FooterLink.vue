<template>
<li>
  <a :href="link">{{name}}</a>
</li>
</template>

<script>
export default {
  name: 'FooterLink',
  props: {
    id: Number,
    link: String,
    name: String
  }
}
</script>
