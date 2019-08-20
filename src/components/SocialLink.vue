<template>
  <li>
    <a :href="link">
      <!-- <img :src="image" :alt="altText" /> -->
      <i :class="icon">&nbsp;</i>
    </a>
  </li>
</template>

<script>
export default {
  name: 'SocialLink',
  props: {
    id: Number,
    icon: String,
    link: String,
    altText: String
  }
}
</script>
