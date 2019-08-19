<template>
  <div>

    <div class="container">

      <h1>mini hero component</h1>

      <p class="subhead5 padding">
        <router-link to="/">&lt; back to style guide</router-link>
      </p>

      <!-- props:
      image: the desktop background image
      mobileImage: the mobile background image. if this is not defined, mobile will display the desktop background image
      font: can be 'headline' or 'regular' - headline is the default
      fontColor: can be white or gray - white is the default
      accentColor: hex value (default is white or gray depending on the fontColor value) (needs to be a hex value e.g., #ffffff)
      alignment: left or right - left is the default
      link: if this prop is defined, the entire component will be click-able
      preheader: the text in this slot will be white or gray depending on the fontColor value
      header: the text in this slot will be white or gray depending on the fontColor value
      subheader: the text in this slot will be white or gray depending on the fontColor value
      colorHeader: the text in this slot can be any color depending on the accentColor value
      cta: the text in this slot will be displayed as a button
      -->

      <mini-hero
        image="static/images/mini-hero1.jpg"
        accentColor="#7ecb69"
        preheader="Education"
      >
        <span slot="header" class="like-h3">Music Education for</span>
        <span slot="colorHeader" class="like-h3">Every Public School Child!</span>
        <a class="button" href="#" slot="cta">education initiatives</a>
      </mini-hero>

      <br>

      <mini-hero
        image="static/images/mini-hero1.jpg"
        font="regular"
        accentColor="#7ecb69"
      >
        <span slot="header" class="like-h3">Music Education for</span>
        <span slot="colorHeader" class="like-h3">Every Public School Child!</span>
        <a class="button ghost" href="#" slot="cta">education initiatives</a>
      </mini-hero>

      <br>

      <mini-hero
        image="static/images/mini-hero2.jpg"
        mobileImage="static/images/mini-hero2mobile.jpg"
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

  </div>
</template>
