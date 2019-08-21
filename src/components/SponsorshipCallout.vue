<template >
    <div class="sponsorship-callout">
        <div class="image-cell cell" v-if="image">
            <img :src="image" :alt="altText">
        </div>

        <div class="text-logo-cell" v-if="hasText">
            <p>{{hasText}}</p>
        </div>
    </div>
</template>




<script>
    export default {
        name: 'SponsorshipCallout',
        props: {
            image: String,
            altText: String,
            hasText: String
        }
    }
</script>
