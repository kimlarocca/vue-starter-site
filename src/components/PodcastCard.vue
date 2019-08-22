<template>
  <section v-if="inlinePlayer" class="inlinePlayer">
    <div class="card">
      <div class="grid-x grid-margin-x">
        <div class="image-cell center cell large-2 small-2">
          <i class="fas fa-play-circle text-brown fa-3x" @click="showPlayer"></i>
        </div>
        <div class="content-cell cell large-10 small-10">
          <p class="subhead6" v-show="!visible"><strong>Play</strong></p>
          <div class="inline_player" :data-audiopath="audioFile" v-show="visible">
            <audio controls class="audio-manager">
              <source :src="audioFile" type="audio/mpeg">
            </audio>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div class="podcast-card" v-else>
    <a :href="link" class="podcast-link text-black">
      <div class="card">
        <div class="grid-x grid-margin-x">
          <div class="image-cell center cell large-2 small-2">
            <i class="fas fa-play-circle text-brown fa-3x"></i>
          </div>
          <div class="content-cell cell large-10 small-10">
            <div class="title">
              <p class="subhead6"><strong>Podcasts</strong></p>
              <p class="podcast-title">{{ title }}</p>
            </div>
          </div>
        </div>
      </div>
    </a>
  </div>

</template>

<script>
    export default {
        name: 'PodcastCard',
        props: {
            title: String,
            link: String,
            inlinePlayer: Boolean,
            audioFile: String,
            background: String
        },
        data () {
            return {
                active: false,
                window: {
                    width: 0
                }
            }
        },
        computed: {
            visible () {
                return this.active
            }
        },
        methods: {
            showPlayer: function () {
                this.active = !this.active
            }
        }
    }
</script>
