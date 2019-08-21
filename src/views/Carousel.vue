<template>
  <div>
    <div class="container">
      <h1>Carousels</h1>
      <p class="subhead5 padding">
        <router-link to="/">&lt; back to style guide</router-link>
      </p>

      <div class="section-padding-50"></div>

      <!--
      PROPS:

      perPage: number of slides to show per page (default is 2)

      :perPageCustom
      Mobile first
      If the window size is greater than or equal to 769px, then 2 slides are shown.
      If the width is greater than or equal to 1024, then 3 slides are shown.

      see more options at https://ssense.github.io/vue-carousel/api/
      -->

      <p class="subhead5">Hero Carousel Example:</p>

    </div>

    <section class="hero-carousel">
      <carousel perPage="1">
        <slide>
          <hero class="full-screen small-header" image="assets/images/hero1.jpg"
                mobileImage="assets/images/hero1mobile.jpg"
                accentColor="#ff8f2a" hasH1="true">
            <span slot="header">Beethoven<br>Stravinsky<br>Maher<br></span>
            <span slot="colorHeader">and more!</span>
            <p slot="subheader" class="subhead4">2019 Season Now Available</p>
            <a class="button" slot="cta1">View Tickets</a>
            <a class="button ghost" slot="cta2">Browse Concerts</a>
          </hero>
        </slide>
        <slide>
          <hero class="full-screen small-header" image="assets/images/hero2.jpg" accentColor="#f94d46"
                alignment="right">
            <span slot="header">Music matters:<br></span>
            <span slot="colorHeader">you make it possible</span>
            <p slot="subheader" class="body-text3">For over a century, the San Francisco Symphony has been a source of
              pride,
              culture, and transformation in the Bay Area. Become a donor and be instrumental to everything the San
              Francisco
              Symphony does.</p>
            <a class="button" slot="cta1">Support The Music</a>
          </hero>
        </slide>
        <slide>
          <hero class="full-screen small-header" image="assets/images/hero5.jpg" accentColor="#ffc373"
                alignment="right">
            <span slot="header">SFS </span>
            <span slot="colorHeader">Media</span>
            <p slot="subheader" class="body-text3">Recorded live in concert and engineered at Davies Symphony Hall, the
              audio
              recordings are released in high-quality digital formats.</p>
            <a class="button" slot="cta1">about sfs media</a>
          </hero>
        </slide>
      </carousel>
    </section>

    <div class="section-padding-100"></div>

    <div class="container">
      <p class="subhead5">Card Carousel Example:</p>

      <section class="card-carousel">
        <carousel perPage="1" :perPageCustom="[[769, 2], [1024, 3]]">
          <slide>
            <news-card
              image="assets/images/news-card-image.jpg"
              altText="james hetfield of metallica performing"
              learnMoreLink="http://www.google.com"
              hasTextLink="true"
              subtitle="news"
              title="Metallica reunites with SF Symphony to open Chase Center"
            >
            </news-card>
          </slide>
          <slide>
            <news-card
              image="assets/images/news-card-image.jpg"
              altText="james hetfield of metallica performing"
              learnMoreLink="http://www.google.com"
              hasTextLink="true"
              subtitle="news"
              title="Metallica reunites with SF Symphony to open Chase Center"
            >
            </news-card>
          </slide>
          <slide>
            <news-card
              image="assets/images/news-card-image.jpg"
              altText="james hetfield of metallica performing"
              learnMoreLink="http://www.google.com"
              hasTextLink="true"
              subtitle="news"
              title="Metallica reunites with SF Symphony to open Chase Center"
            >
            </news-card>
          </slide>
        </carousel>
      </section>
    </div>

    <div class="section-padding-100"></div>

  </div>
</template>
