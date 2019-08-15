<template>
  <div>

    <div class="container">
      <h1>media blocks</h1>
      <p class="subhead5 padding">
        <router-link to="/">&lt; back to style guide</router-link>
      </p>
      <div class="section-padding-50"></div>

      <p class="subhead5 padding">Responsive media embeds: youtube</p>
      <div class="responsive-embed widescreen">
        <iframe width="1240" height="700" src="https://www.youtube.com/embed/krCiR04u8Ig" frameborder="0"
                allowfullscreen></iframe>
      </div>

      <div class="section-padding-50"></div>

      <p class="subhead5 padding">Responsive media embeds: vimeo</p>
      <div class="responsive-embed widescreen">
        <iframe src="https://player.vimeo.com/video/42325868" width="1240" height="700" frameborder="0"
                allow="autoplay; fullscreen" allowfullscreen></iframe>
      </div>

      <div class="section-padding-50"></div>

      <p class="subhead5 padding">In a grid:</p>
      <div class="grid-x grid-margin-x">
        <div class="cell large-6 medium-6">
          <div class="responsive-embed widescreen">
            <iframe width="1240" height="700" src="https://www.youtube.com/embed/krCiR04u8Ig" frameborder="0"
                    allowfullscreen></iframe>
          </div>
        </div>
        <div class="cell large-6 medium-6">
          <div class="responsive-embed widescreen">
            <iframe src="https://player.vimeo.com/video/42325868" width="1240" height="700" frameborder="0"
                    allow="autoplay; fullscreen" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </div>

  </div>

</template>
