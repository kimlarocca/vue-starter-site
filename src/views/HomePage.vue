<template>
  <div>

    <div class="container">
      <h1>home page example</h1>
      <p class="subhead5 padding"><router-link to="/">&lt; back to style guide</router-link></p>
      <div class="section-padding-100"></div>
    </div>

    <hero
      class="full-screen smallHeader"
      image="/static/images/hero1.jpg"
      mobileImage="/static/images/hero1mobile.jpg"
      accentColor="#ff8f2a"
      hasH1="true"
    >
      <span slot="header">Beethoven<br>Stravinsky<br>Maher<br></span>
      <span slot="colorHeader">and more!</span>
      <p slot="subheader" class="subhead4">2019 Season Now Available</p>
      <a class="button" slot="cta1">View Tickets</a>
      <a class="button ghost" slot="cta2">Browse Concerts</a>
    </hero>

    <section class="section-padding-100">
      <div class="container">
        <h2 class="subhead1 text-center small-text-left">upcoming shows</h2>
        <div class="grid-x grid-margin-x grid-margin-y section-padding-50">
          <div class="cell large-3 medium-6 small-12">
            <upcoming-shows-card
              image="/static/images/upcoming-shows-card-image.png"
              altText="man and woman dancing"
              ticketLink="http://www.google.com"
              :upcomingDates="[{month:'Feb',day:'27'},{month:'Feb',day:'28'},{month:'Mar',day:'1'}]"
              title="SF Symphony Youth Orchestra plays Mozart and Debussy featuring SF Opera
            Adler Fellows"
              dateRange="Sunday, March 3"
            >
            </upcoming-shows-card>
          </div>
          <div class="cell large-3 medium-6 small-12">
            <upcoming-shows-card
              image="/static/images/upcoming-shows-card-image.png"
              altText="man and woman dancing"
              ticketLink="http://www.google.com"
              :upcomingDates="[{month:'Feb',day:'27'},{month:'Feb',day:'28'}]"
              title="SF Symphony Youth Orchestra plays Mozart and Debussy featuring SF Opera
            Adler Fellows"
              dateRange="Sunday, March 3"
            >
            </upcoming-shows-card>
          </div>
          <div class="cell large-3 medium-6 small-12">
            <upcoming-shows-card
              image="/static/images/upcoming-shows-card-image.png"
              altText="man and woman dancing"
              ticketLink="http://www.google.com"
              :upcomingDates="[{month:'Feb',day:'27'}]"
              title="SF Symphony Youth Orchestra plays Mozart and Debussy featuring SF Opera
            Adler Fellows"
              dateRange="Sunday, March 3"
            >
            </upcoming-shows-card>
          </div>
          <div class="cell large-3 medium-6 small-12">
            <upcoming-shows-card
              image="/static/images/upcoming-shows-card-image.png"
              altText="man and woman dancing"
              ticketLink="http://www.google.com"
              :upcomingDates="[{month:'Feb',day:'27'},{month:'Feb',day:'28'},{month:'Mar',day:'1'}]"
              title="SF Symphony Youth Orchestra plays Mozart and Debussy featuring SF Opera
            Adler Fellows"
              dateRange="Sunday, March 3"
            >
            </upcoming-shows-card>
          </div>
        </div>
        <hr>
        <p class="text-center subhead5"><a class="view-more caret-down">view more</a></p>
      </div>
    </section>

    <section class="section-padding-100">
      <div class="container">
        <h2 class="subhead1 text-center hide-for-small-only">variety of performances</h2>
      </div>
      <div class="performances-cards three section-padding-50">
        <div class="grid-x">
          <div class="cell large-4 medium-6 small-12">
            <performances-card
              image="/static/images/performances-card-image.png"
              category="family"
              subtitle="great performances"
              title="Phenomenal artists perform with the SF symphony"
              learnMoreLink="htt://www.google.com"
            >
            </performances-card>
          </div>
          <div class="cell large-4 medium-6 small-12">
            <performances-card
              image="/static/images/performances-card-image.png"
              category="family"
              subtitle="great performances"
              title="Phenomenal artists perform with the SF symphony"
              learnMoreLink="htt://www.google.com"
            >
            </performances-card>
          </div>
          <div class="cell large-4 medium-6 small-12">
            <performances-card
              image="/static/images/performances-card-image.png"
              category="family"
              subtitle="great performances"
              title="Phenomenal artists perform with the SF symphony"
              learnMoreLink="htt://www.google.com"
            >
            </performances-card>
          </div>
          <div class="cell large-4 medium-6 small-12">
            <performances-card
              image="/static/images/performances-card-image.png"
              category="family"
              subtitle="great performances"
              title="Phenomenal artists perform with the SF symphony"
              learnMoreLink="htt://www.google.com"
            >
            </performances-card>
          </div>
          <div class="cell large-4 medium-6 small-12">
            <performances-card
              image="/static/images/performances-card-image.png"
              category="family"
              subtitle="great performances"
              title="Phenomenal artists perform with the SF symphony"
              learnMoreLink="htt://www.google.com"
            >
            </performances-card>
          </div>
          <div class="cell large-4 medium-6 small-12">
            <performances-card
              image="/static/images/performances-card-image.png"
              category="family"
              subtitle="great performances"
              title="Phenomenal artists perform with the SF symphony"
              learnMoreLink="htt://www.google.com"
            >
            </performances-card>
          </div>
        </div>
      </div>
    </section>

    <section>
      <hero class="large small-header" image="/static/images/hero2.jpg" accentColor="#f94d46" alignment="right">
        <span slot="header">Music matters:<br></span>
        <span slot="colorHeader">you make it possible</span>
        <p slot="subheader" class="body-text3">For over a century, the San Francisco Symphony has been a source of
          pride,
          culture, and transformation in the Bay Area. Become a donor and be instrumental to everything the San
          Francisco
          Symphony does.</p>
        <a class="button" slot="cta1">Support The Music</a>
      </hero>
    </section>

    <!-- news and events grid -->
    <section class="section-padding-40">
      <div class="container">
        <h2 class="subhead1 show-for-small-only">news &amp; events</h2>
        <div class="show-for-small-only section-padding-30"></div>
        <div class="grid-x grid-margin-x grid-margin-y">
          <div class="cell large-12">
            <mini-hero
              image="/static/images/mini-hero2.jpg"
              mobileImage="/static/images/mini-hero2mobile.jpg"
              font="regular"
              fontColor="gray"
              alignment="right"
              preheader="album release"
              link="http://www.google.com"
            >
              <span slot="header" class="like-h1">Berlioz</span>
              <span slot="subheader" class="like-h3">Romeo et Juliette</span>
            </mini-hero>
          </div>
          <div class="cell large-8 medium-12">
            <mini-hero
              image="/static/images/mini-hero1.jpg"
              accentColor="#7ecb69"
              preheader="Education"
            >
              <span slot="header" class="like-h3">Music Education for</span>
              <span slot="colorHeader" class="like-h3">Every Public School Child!</span>
              <a class="button" href="#" slot="cta">education initiatives</a>
            </mini-hero>
          </div>
          <div class="cell large-4 medium-6 small-12">
            <news-card
              image="/static/images/news-card-image.jpg"
              altText="james hetfield of metallica performing"
              learnMoreLink="http://www.google.com"
              subtitle="news"
              title="Metallica reunites with SF Symphony to open Chase Center"
            >
            </news-card>
          </div>
          <div class="cell large-4 medium-6 small-12">
            <news-card
              image="/static/images/news-card-image.jpg"
              altText="james hetfield of metallica performing"
              learnMoreLink="http://www.google.com"
              subtitle="news"
              title="Metallica reunites with SF Symphony to open Chase Center"
            >
            </news-card>
          </div>
          <div class="cell large-4 medium-6 small-12">
            <news-card
              image="/static/images/news-card-image.jpg"
              altText="james hetfield of metallica performing"
              learnMoreLink="http://www.google.com"
              subtitle="news"
              title="Metallica reunites with SF Symphony to open Chase Center"
            >
            </news-card>
          </div>
          <div class="cell large-4 medium-6 small-12">
            <press-release-card
              color="blue"
              title="MTT inducted into the California Hall of Fame"
              body="On Tuesday December 5th, San Francisco Symphony Music Director Michael Tilson Thomas (MTT) was inducted into the California Hall of Fame along with fellow inductees Steven Spielberg, Lucille Ball and many others."
              learnMoreLink="http://www.google.com"
            >
            </press-release-card>
          </div>
          <div class="cell large-4 medium-6 small-12">
            <news-card
              image="/static/images/news-card-image.jpg"
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
          <div class="cell large-4 medium-6 small-12">
            <news-card
              image="/static/images/news-card-image.jpg"
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

  </div>
</template>
