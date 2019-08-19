<template>
  <div>

    <div class="container">
      <h1>category card</h1>
      <p class="subhead5 padding">
        <router-link to="/">&lt; back to style guide</router-link>
      </p>
    </div>

    <div class="section-padding-50"></div>

    <!--
    PROPS:
    image
    altText: the alt text for the image
    backgroundColor: can be gray or black - gray by default
    content: can contain html elements
    hasBorder: true or false - false by default
    layoutOption: 1 or 2 - 1 by default
      (1 is for shorter description text with image to the right)
      (2 is for longer description text with image above)
    -->

    <content-blade
      image="assets/images/content-blade-image.jpg"
      altText="conductor leading an orchestra"
    >
      <template slot="content">
        <h2 class="body-text1">Event Description</h2>
        <div class="section-padding-30"></div>
        <p class="body-text3">
          Chief Conductor of the Netherlands Radio Philharmonic Orchestra Karina Canellakis makes her San Francisco
          Symphony debut in a presentation of music by twoRussian heavyweights: Prokofiev’s ravishingly colorful and
          percussive Piano Concerto No. 1, played by the Ukranian piano powerhouse Alexander Gavrylyuk (who also makes
          his SF Symphony debut at these concerts),and Shostakovich’s defiant 1941 bombshell, the Leningrad
          Symphony.</p>
        <p class="body-text3">In the twilight of Imperial Russia, a brazen 21-year-old pianist submitted his own
          concerto as a graduation piece. A sassy and whimsical fantasy written for a formidable soloist (himself), the
          1912 Piano Concerto No. 1 by Prokofiev scandalized the old guard. Less than thirty years later, Shostakovich
          unveiled his Seventh Symphony, but Russia was a different place. The old guard was all but extinguished;
          Stalin had prosecuted his Great Terror, and Hitler held Leningrad under siege.
        </p>
      </template>
    </content-blade>

    <div class="section-padding-100"></div>

    <content-blade
      image="assets/images/content-blade-image.jpg"
      altText="conductor leading an orchestra"
      background-color="black"
      hasBorder="true"
    >
      <template slot="content">
        <h2 class="body-text1">Event Description</h2>
        <div class="section-padding-30"></div>
        <p class="body-text3">
          Chief Conductor of the Netherlands Radio Philharmonic Orchestra Karina Canellakis makes her San Francisco
          Symphony debut in a presentation of music by twoRussian heavyweights: Prokofiev’s ravishingly colorful and
          percussive Piano Concerto No. 1, played by the Ukranian piano powerhouse Alexander Gavrylyuk (who also makes
          his SF Symphony debut at these concerts),and Shostakovich’s defiant 1941 bombshell, the Leningrad
          Symphony.</p>
        <p class="body-text3">In the twilight of Imperial Russia, a brazen 21-year-old pianist submitted his own
          concerto as a graduation piece. A sassy and whimsical fantasy written for a formidable soloist (himself), the
          1912 Piano Concerto No. 1 by Prokofiev scandalized the old guard. Less than thirty years later, Shostakovich
          unveiled his Seventh Symphony, but Russia was a different place. The old guard was all but extinguished;
          Stalin had prosecuted his Great Terror, and Hitler held Leningrad under siege.
        </p>
      </template>
    </content-blade>

    <div class="section-padding-100"></div>

    <content-blade
      image="assets/images/hero3.jpg"
      altText="woman playing violin"
      backgroundColor="black"
      layoutOption="2"
    >
      <template slot="content">
        <h2 class="body-text1">Event Description</h2>
        <div class="section-padding-30"></div>
        <div class="grid-x grid-margin-x grid-margin-y">
          <div class="cell large-auto">
            <p class="body-text3">
              Chief Conductor of the Netherlands Radio Philharmonic Orchestra Karina Canellakis makes her San Francisco
              Symphony debut in a presentation of music by twoRussian heavyweights: Prokofiev’s ravishingly colorfuland
              percussive Piano Concerto No. 1, played by the Ukranian piano powerhouse Alexander Gavrylyuk (whoalso
              makes his SF Symphony debut at these concerts),and Shostakovich’s defiant 1941 bombshell, theLeningrad
              Symphony.</p>
          </div>
          <div class="cell large-auto">
            <p class="body-text3">In the twilight of Imperial Russia, a brazen 21-year-old pianist submitted his own
              concerto as a graduation piece. A sassy and whimsical fantasy written for a formidable soloist (himself),
              the 1912 Piano Concerto No. 1 by Prokofiev scandalized the old guard. Less than thirty years later,
              Shostakovich unveiled his Seventh Symphony, but Russia was a different place. The old guard was all but
              extinguished;
              Stalin had prosecuted his Great Terror, and Hitler held Leningrad under siege.</p>
          </div>
        </div>
      </template>
    </content-blade>

    <div class="section-padding-100"></div>

    <content-blade
      image="assets/images/hero3.jpg"
      altText="woman playing violin"
      layoutOption="2"
      hasBorder="true"
    >
      <template slot="content">
        <h2 class="body-text1">Event Description</h2>
        <div class="section-padding-30"></div>
        <div class="grid-x grid-margin-x grid-margin-y">
          <div class="cell large-auto">
            <p class="body-text3">
              Chief Conductor of the Netherlands Radio Philharmonic Orchestra Karina Canellakis makes her San Francisco
              Symphony debut in a presentation of music by twoRussian heavyweights: Prokofiev’s ravishingly colorfuland
              percussive Piano Concerto No. 1, played by the Ukranian piano powerhouse Alexander Gavrylyuk (whoalso
              makes his SF Symphony debut at these concerts),and Shostakovich’s defiant 1941 bombshell, theLeningrad
              Symphony.</p>
          </div>
          <div class="cell large-auto">
            <p class="body-text3">In the twilight of Imperial Russia, a brazen 21-year-old pianist submitted his own
              concerto as a graduation piece. A sassy and whimsical fantasy written for a formidable soloist (himself),
              the 1912 Piano Concerto No. 1 by Prokofiev scandalized the old guard. Less than thirty years later,
              Shostakovich unveiled his Seventh Symphony, but Russia was a different place. The old guard was all but
              extinguished;
              Stalin had prosecuted his Great Terror, and Hitler held Leningrad under siege.</p>
          </div>
        </div>
      </template>
    </content-blade>


  </div>
</template>
