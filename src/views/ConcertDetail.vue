<template>
  <div>

    <div class="container">
      <h1>concert detail page example</h1>
      <p class="subhead5 padding">
        <router-link to="/">&lt; back to style guide</router-link>
      </p>
      <div class="section-padding-100"></div>
    </div>

    <hero
      class="full-screen smallHeader"
      image="static/images/hero1.jpg"
      mobileImage="static/images/hero1mobile.jpg"
      accentColor="#ff8f2a"
      hasH1="true"
      :dropDownMenu="[
      {value:'value 1 Tuesday, August 1st, 2019 at 7:00pm',text:'Tuesday, August 1st, 2019 at 7:00pm'},
      {value:'value2',text:'Wednesday, August 1st, 2019 at 7:00pm'},
      {value:'value3',text:'Thursday, August 1st, 2019 at 7:00pm'}
      ]"
    >
      <span slot="header">Beethoven<br>Stravinsky<br>Maher<br></span>
      <span slot="colorHeader">and more!</span>
      <p slot="subheader" class="subhead4">2019 Season Now Available</p>
      <a class="button" slot="cta1">View Tickets</a>
      <a class="button ghost" slot="cta2">Browse Concerts</a>
    </hero>

    <section class="section-padding-100">
      <content-blade
        image="static/images/content-blade-image.jpg"
        altText="woman playing violin"
      >
        <template slot="content">
          <h2 class="subhead1 no-transform">Event Description</h2>
          <div class="section-padding-30"></div>
          <p class="body-text3">
            Chief Conductor of the Netherlands Radio Philharmonic Orchestra Karina Canellakis makes her San Francisco
            Symphony debut in a presentation of music by twoRussian heavyweights: Prokofiev’s ravishingly colorfuland
            percussive Piano Concerto No. 1, played by the Ukranian piano powerhouse Alexander Gavrylyuk (whoalso makes
            his SF Symphony debut at these concerts),and Shostakovich’s defiant 1941 bombshell, theLeningrad
            Symphony.</p>
          <p class="body-text3">In the twilight of Imperial Russia, a brazen 21-year-old pianist submitted his own
            concerto as a graduation piece. A sassy and whimsical fantasy written for a formidable soloist (himself),
            the
            1912 Piano Concerto No. 1 by Prokofiev scandalized the old guard. Less than thirty years later, Shostakovich
            unveiled his Seventh Symphony, but Russia was a different place. The old guard was all but extinguished;
            Stalin had prosecuted his Great Terror, and Hitler held Leningrad under siege.
          </p>
        </template>
      </content-blade>
    </section>

    <div class="section-padding-100"></div>

    <section>
      <div class="container">
        <h2 class="subhead1 no-transform">At a glance</h2>
      </div>
    </section>

    <div class="section-padding-100"></div>

    <section class="bg-light-gray section-padding-100">
      <div class="container">
        <h2 class="subhead1 no-transform">Concert Extras</h2>
        <div class="section-padding-50"></div>
        <div class="grid-x grid-margin-y grid-margin-x">
          <div class="cell large-4 medium-12 small-12">
            <p class="body-text3"><strong>Inside Music:</strong><br>An informative talk by Laura Stanfield Prichard,
              begins one hour prior to concerts.
              Free to ticket holders; doors open 15 minutes before.</p>
            <p><a class="caret-right" href="#"><strong>LEARN MORE</strong></a></p>
          </div>
          <div class="cell large-4 medium-12 small-12">
            <p class="body-text3"><strong>Off-The-Podium:</strong><br>A post-concert Q & A opportunity
              for the audience to ask questions of Lars Vogt on February 22 and 23. There will not be a post-concert Q&A
              following the Sundaymatinee on February 24, 2019..</p>
            <p><a class="caret-right" href="#"><strong>LEARN MORE</strong></a></p>
          </div>
          <div class="cell large-4 medium-12 small-12">
            <p class="body-text3"><strong>Inside Music:</strong><br>An informative talk by Laura Stanfield Prichard,
              begins one hour prior to concerts.</p>
            <p><a class="caret-right" href="#"><strong>LEARN MORE</strong></a></p>
          </div>
        </div>
      </div>
      <div class="section-padding-50"></div>
    </section>

    <section class="section-padding-100"></section>

    <section>
      <div class="container">
        <h2 class="subhead1 no-transform">Related Content</h2>
        <div class="section-padding-50"></div>

        <div class="grid-x grid-margin-y grid-margin-x">
          <div class="cell large-4 medium-12 small-12">
            <news-card
              image="static/images/news-card-image.jpg"
              altText="james hetfield of metallica performing"
              learnMoreLink="http://www.google.com"
              subtitle="news"
              title="Metallica reunites with SF Symphony to open Chase Center"
            >
            </news-card>
          </div>
          <div class="cell large-4 medium-6 small-12">
            <press-release-card
              color="purple"
              title="June 5, 2018 - San Francisco Symphony announces new Summer With the Symphony performance: actor and hip hop artist Common, August 1 "
              learnMoreLink="http://www.google.com"
            >
            </press-release-card>
          </div>
          <div class="cell large-4 medium-12 small-12">
            <news-card
              image="static/images/news-card-image.jpg"
              altText="james hetfield of metallica performing"
              learnMoreLink="http://www.google.com"
              subtitle="news"
              title="Metallica reunites with SF Symphony to open Chase Center"
            >
            </news-card>
          </div>
        </div>
      </div>
    </section>

    <section class="section-padding-100"></section>

  </div>
</template>
