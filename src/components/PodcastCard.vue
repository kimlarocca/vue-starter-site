<template>
  <section class="podcast-card">
    <a :href="link" class="podcast-link">
        <div class="card">
            <div class="grid-x">
                <div class="image-cell cell large-2 medium-2 small-12">
                    <img src="https://www.pinclipart.com/picdir/big/374-3749972_play-png-free-download-play-button-icon-png.png" width="50px" height="50px" alt="Play Button">
                </div>
                <div class="content-cell cell large-10 medium-10 small-12">
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
