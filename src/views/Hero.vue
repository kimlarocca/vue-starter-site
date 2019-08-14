<template>
  <div>

    <div class="container">
      <h1>hero component</h1>
      <p class="subhead5 padding">
        <router-link to="/">&lt; back to style guide</router-link>
      </p>
    </div>

    <!--
    CLASSES:
    full-screen: displays the larger 900px tall hero (is 700px tall by default)
    small-header: displays the hero with smaller header font (displays the larger header font variation by default)

    PROPS:
    image: the desktop background image
    mobileImage: the mobile background image. if this is not defined, mobile will display the desktop background image
    accentColor: hex value (needs to be a hex value e.g., #ffffff)
    alignment: left or right - left is the default
    hasH1: set this to true if the header/colorHeader text should be in a H1 tag
    preheader: the text in this slot will be white
    header: the text in this slot will be white
    subheader: the text in this slot will be white
    colorHeader: the text in this slot will be the color specified in accentColor above
    cta1 & cta2: these slots will be displayed as buttons
    textLink: this will be displayed as a text link instead of a button, and will be the color specified in accentColor above
    -->

    <hero class="full-screen small-header" image="/static/images/hero1.jpg" mobileImage="/static/images/hero1mobile.jpg"
          accentColor="#ff8f2a" hasH1="true">
      <span slot="header">Beethoven<br>Stravinsky<br>Maher<br></span>
      <span slot="colorHeader">and more!</span>
      <p slot="subheader" class="subhead4">2019 Season Now Available</p>
      <a class="button" slot="cta1">View Tickets</a>
      <a class="button ghost" slot="cta2">Browse Concerts</a>
    </hero>

    <hero class="full-screen small-header" image="/static/images/hero2.jpg" accentColor="#f94d46" alignment="right">
      <span slot="header">Music matters:<br></span>
      <span slot="colorHeader">you make it possible</span>
      <p slot="subheader" class="body-text3">For over a century, the San Francisco Symphony has been a source of pride,
        culture, and transformation in the Bay Area. Become a donor and be instrumental to everything the San Francisco
        Symphony does.</p>
      <a class="button" slot="cta1">Support The Music</a>
    </hero>

    <hero class="small-header" image="/static/images/hero3.jpg" accentColor="#f37930">
      <p slot="preheader" class="subhead5">we are a non-profit organization</p>
      <span slot="header">Devoted to<br></span>
      <span slot="colorHeader">music education for everybody</span>
    </hero>

    <hero class="small-header" image="/static/images/hero4.jpg" accentColor="#1870cf">
      <p slot="preheader" class="subhead5">spotlight</p>
      <span slot="header">MTT 25:<br>A</span>
      <span slot="colorHeader">celebratory season</span>
      <p slot="subheader" class="subhead4">The 2019-20 season marks the 25th &amp;amp; final season of Michael Tilson
        Thomas’s distinguished tenure as San Francisco Symphony Music Director.</p>
      <span slot="textLink">read more</span>
    </hero>

    <hero image="/static/images/hero4.jpg" accentColor="#1870cf">
      <p slot="preheader" class="subhead5">In the 2017/18 season, over</p>
      <span slot="colorHeader">1800+</span>
      <p slot="subheader" class="subhead4">People have given over 25,000 hours</p>
    </hero>

    <hero image="/static/images/hero5.jpg" accentColor="#ffc373" alignment="right">
      <span slot="header">SFS </span>
      <span slot="colorHeader">Media</span>
      <p slot="subheader" class="body-text3">Recorded live in concert and engineered at Davies Symphony Hall, the audio
        recordings are released in high-quality digital formats.</p>
      <a class="button" slot="cta1">about sfs media</a>
    </hero>

    <hero image="/static/images/hero5.jpg" accentColor="#ffc373" alignment="right">
      <span slot="header">Getting<br>here</span>
      <p slot="subheader" class="body-text3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.</p>
      <a class="button" slot="cta1">getting here details</a>
      <span slot="textLink">directions &amp; transportation</span>
    </hero>

    <hero image="/static/images/hero6.jpg" accentColor="#fc6013">
      <span slot="header">Archives<br>&amp; </span>
      <span slot="colorHeader">history</span>
      <p slot="subheader" class="body-text3">We collect, preserve, and provide current and historical records of the San
        Francisco Symphony.</p>
      <a class="button" slot="cta1">archives &amp; history</a>
    </hero>

    <hero image="/static/images/hero6.jpg" accentColor="#fc6013">
      <span slot="header">Archives<br>&amp; </span>
      <span slot="colorHeader">history</span>
      <p slot="subheader" class="body-text3">We collect, preserve, and provide current and historical records of the San
        Francisco Symphony.</p>
      <span slot="textLink">read more</span>
    </hero>

  </div>
</template>
