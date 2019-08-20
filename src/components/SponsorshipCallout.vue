<template>
  <div class="sponsorship-callout">
    <div class="image-cell cell">
        <img :src="image" :alt="altText">
    </div>
  </div>
</template>

<script>
    export default {
        name: 'SponsorshipCallout',
        props: {
            image: String,
            altText: String
        }
    }
</script>
