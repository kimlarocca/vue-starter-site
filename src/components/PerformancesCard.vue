<template>

    <div class="performances-card" :style="{ backgroundImage: `url('${image}')` }">
      <div class="category">{{ category }}</div>
    </div>

</template>

<script>
    export default {
        name: 'PerformancesCard',
        props: {
            image: String,
            category: String,
            subTitle: String,
            title: String,
            learnMoreLink: String
        }
    }
</script>
