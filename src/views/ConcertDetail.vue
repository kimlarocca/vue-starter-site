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
      image="assets/images/hero1.jpg"
      mobileImage="assets/images/hero1mobile.jpg"
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

    <section class="bg-medium-gray">
      <div class="container smaller">
        <div class="grid-x grid-margin-x grid-margin-y sponsorship">
          <div class="cell large-3 small-12 sponsorship-text">
            <p class="text-brown">BROUGHT TO YOU BY</p>
          </div>
          <div class="cell large-9 sponsorship-container">
            <sponsorship-callout
              image="https://i.ibb.co/rkqb4SV/neiman-marcus.png"
              altText="Neiman Marcus Logo"
            >
            </sponsorship-callout>
            <sponsorship-callout
              image="https://i.ibb.co/GFG4Wwy/chase.png"
              altText="Chase Logo"
            >
            </sponsorship-callout>
            <sponsorship-callout
              image="https://i.ibb.co/XVB8KRW/chevron.png"
              altText="Chevron Logo"
            >
            </sponsorship-callout>
            <sponsorship-callout
              image="https://i.ibb.co/4msnjPx/first-republic-bank.png"
              altText="First Republic Bank"
            >
            </sponsorship-callout>
            <sponsorship-callout
              image="https://i.ibb.co/CsfRDXx/air-bnb.png"
              altText="Airbnb Logo"
            >
            </sponsorship-callout>
            <sponsorship-callout
              hasText="LOREM IPSUM"
            >
            </sponsorship-callout>

          </div>
        </div>
      </div>
    </section>

    <div class="section-padding-100"></div>

    <section>
      <div class="container">
        <div class="grid-x grid-margin-2x grid-margin-y">
          <div class="cell large-4 medium-12">
            <p class="subhead1 border-left margin-bottom-3">performers</p>
            <p class="subhead6 margin-bottom-0">conductor</p>
            <p class="subhead4"><a href="#">Manfred Honeck</a></p>
            <p class="subhead6 margin-bottom-0">piano</p>
            <p class="subhead4"><a href="#">TBD</a></p>
            <p class="body-text3">San Francisco Symphony</p>
          </div>
          <div class="cell large-4 medium-12">
            <p class="subhead1 border-left margin-bottom-3">program</p>
            <p class="subhead6 margin-bottom-0">conductor</p>
            <p class="subhead4"><a href="#">Manfred Honeck</a></p>
            <a href="#">
              <div class="play-icon">
                <p class="subhead6 margin-bottom-0">piano</p>
                <p class="subhead4">TBD</p>
              </div>
            </a>
            <p class="body-text3">San Francisco Symphony</p>
          </div>
          <div class="cell large-4 medium-12">
            <p class="subhead1 border-left margin-bottom-3">performances</p>
            <performance-card
              class="margin-bottom-2"
              location="davies symphony hall"
              dateRange="Fri, Feb 22, 2019 at 8:00pm"
              link="http://www.google.com"
            >
            </performance-card>
            <performance-card
              class="margin-bottom-2"
              location="davies symphony hall"
              dateRange="Fri, Feb 22, 2019 at 8:00pm"
              link="http://www.google.com"
            >
            </performance-card>
            <performance-card
              class="margin-bottom-2"
              location="davies symphony hall"
              dateRange="Fri, Feb 22, 2019 at 8:00pm"
              link="http://www.google.com"
            >
            </performance-card>
          </div>
        </div>
      </div>
    </section>

    <div class="section-padding-100"></div>

    <section>
      <content-blade
        image="assets/images/content-blade-image.jpg"
        altText="man conducting the san francisco symphony"
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
        <div class="section-padding-50"></div>
        <accordion mobileOnly="true" class="no-border-on-desktop">
          <div class="grid-x grid-margin-2x">
            <div class="cell large-4 medium-12 small-12">
              <accordion-item>
                <template slot="header">
                  <p>
                    <span class="subhead6"><strong>Schumann</strong></span>
                    <br>
                    <span class="body-text4">Manfred overture | 12 mins</span>
                  </p>
                </template>
                <template slot="content">
                  <p class="body-text3">Robert Schumann told Franz Liszt that he considered the Manfred Overture to be
                    one
                    of
                    his “most powerful children.” Schumann’s music for Lord Byron’s dramatic poem Manfred stressed the
                    musical
                    medium most deferential to poetry: the melodrama, in which text is recited over an accompanying
                    score.
                    The
                    result is an odd musical hybrid, and of Schumann’s Manfred music only the Overture has found an
                    enduring
                    place in the repertory. In this somber work we find Schumann at his most demonic, setting the scene
                    for
                    Byron’s tortured hero with music of wide fluctuation, passionately designed melodies, and insistent
                    rhythms.</p>
                  <p class="body-text3"><strong>Listen for:</strong><br>This is a marvelously imagined piece of
                    scoring—hear,
                    for example, the economical and stunningly effective use of the trombones.</p>
                  <p class="body-text3"><a class="caret-right" href="#"><strong>LEARN MORE</strong></a></p>
                </template>
              </accordion-item>
            </div>
            <div class="cell large-4 medium-12 small-12">
              <accordion-item>
                <template slot="header">
                  <p>
                    <span class="subhead6"><strong>Schumann</strong></span>
                    <br>
                    <span class="body-text4">Manfred overture | 12 mins</span>
                  </p>
                </template>
                <template slot="content">
                  <p class="body-text3">Robert Schumann told Franz Liszt that he considered the Manfred Overture to be
                    one
                    of
                    his “most powerful children.” Schumann’s music for Lord Byron’s dramatic poem Manfred stressed the
                    musical
                    medium most deferential to poetry: the melodrama, in which text is recited over an accompanying
                    score.
                    The
                    result is an odd musical hybrid, and of Schumann’s Manfred music only the Overture has found an
                    enduring
                    place in the repertory. In this somber work we find Schumann at his most demonic, setting the scene
                    for
                    Byron’s tortured hero with music of wide fluctuation, passionately designed melodies, and insistent
                    rhythms.</p>
                  <p class="body-text3"><strong>Listen for:</strong><br>This is a marvelously imagined piece of
                    scoring—hear,
                    for example, the economical and stunningly effective use of the trombones.</p>
                  <p class="body-text3"><a class="caret-right" href="#"><strong>LEARN MORE</strong></a></p>
                </template>
              </accordion-item>
            </div>
            <div class="cell large-4 medium-12 small-12">
              <accordion-item>
                <template slot="header">
                  <p>
                    <span class="subhead6"><strong>Schumann</strong></span>
                    <br>
                    <span class="body-text4">Manfred overture | 12 mins</span>
                  </p>
                </template>
                <template slot="content">
                  <p class="body-text3">Robert Schumann told Franz Liszt that he considered the Manfred Overture to be
                    one
                    of
                    his “most powerful children.” Schumann’s music for Lord Byron’s dramatic poem Manfred stressed the
                    musical
                    medium most deferential to poetry: the melodrama, in which text is recited over an accompanying
                    score.
                    The
                    result is an odd musical hybrid, and of Schumann’s Manfred music only the Overture has found an
                    enduring
                    place in the repertory. In this somber work we find Schumann at his most demonic, setting the scene
                    for
                    Byron’s tortured hero with music of wide fluctuation, passionately designed melodies, and insistent
                    rhythms.</p>
                  <p class="body-text3"><a class="caret-right" href="#"><strong>LEARN MORE</strong></a></p>
                </template>
              </accordion-item>
            </div>
          </div>
        </accordion>
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
          <div class="cell large-4 medium-4 small-12">
            <news-card
              image="assets/images/news-card-image.jpg"
              altText="james hetfield of metallica performing"
              learnMoreLink="http://www.google.com"
              subtitle="news"
              title="Metallica reunites with SF Symphony to open Chase Center"
            >
            </news-card>
          </div>
          <div class="cell large-4 medium-4 small-12">
            <press-release-card
              color="purple"
              title="June 5, 2018 - San Francisco Symphony announces new Summer With the Symphony performance: actor and hip hop artist Common, August 1 "
              learnMoreLink="http://www.google.com"
            >
            </press-release-card>
          </div>
          <div class="cell large-4 medium-4 small-12">
            <news-card
              image="assets/images/news-card-image.jpg"
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
