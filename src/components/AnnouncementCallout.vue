<template>

  <div class="announcement-callout" :class="backgroundColor">
    <div class="content">
      <p>
        <slot name="title"></slot>
      </p>
      <p>
        <slot name="description"></slot>
      </p>
      <slot name="cta1"></slot>
      <slot name="cta2"></slot>

    </div>
  </div>

</template>

<script>
    export default {
        name: 'AnnouncementCallout',
        props: {
            title: String,
            description: String,
            cta1: String,
            link1: String,
            cta2: String,
            link2: String,
            backgroundColor: String
        }
    }
</script>
