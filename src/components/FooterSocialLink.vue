<template>
  <li>
    <a :href="link">
      <img :src="image" :alt="altText" />
    </a>
  </li>
</template>

<script>
export default {
  name: 'FooterSocialLink',
  props: {
    id: Number,
    image: String,
    link: String,
    altText: String
  }
}
</script>
