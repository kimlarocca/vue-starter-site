<template>
  <section class="podcast-card">
    <a :href="link" class="podcast-link text-black">
        <div class="card">
            <div class="grid-x">
                <div class="image-cell center cell large-2 small-2">
                    <i class="fas fa-play-circle text-brown fa-3x"></i>
                </div>
                <div class="content-cell cell large-10 small-10">
                    <div class="title">
                        <p class="subhead6">Podcasts</p>
                        <p class="podcast-title">{{ title }}</p>
                    </div>
                </div>
            </div>
        </div>
    </a>
  </section>
</template>

<script>
    export default {
        name: 'PodcastCard',
        props: {
            title: String,
            link: String
        }
    }
</script>
