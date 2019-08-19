<template>
  <div>

    <div class="container">
      <h1>category card</h1>
      <p class="subhead5 padding">
        <router-link to="/">&lt; back to style guide</router-link>
      </p>
      <div class="section-padding-50"></div>

      <!--
      PROPS:
      name
      image: the right block's background image
      quoteText
      description
      category
      link: the entire left block will be clickable and point to this URL
      openInNewWindow: false by default - set to true if you want the link to open in a new window
      hasVideo: false by default - set to true if you want the play button to appear
      backgroundColor: can be blue or purple - blue by default
      -->

      <person-profile
        image="static/images/person-profile-image.jpg"
        category="concert"
        link="http://www.google.com"
        openInNewWindow="true"
        hasVideo="true"
      >
        <span slot="name" class="body-text2">Jane Doe</span>
        <span slot="quoteText" class="like-h3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua!</span>
        <span slot="description" class="body-text2">Lorem ipsum dolor sit amet, consectetur</span>
      </person-profile>

      <div class="section-padding-100"></div>

      <person-profile
        image="static/images/person-profile-image.jpg"
        category="concert"
        link="http://www.google.com"
        backgroundColor="purple"
      >
        <span slot="name" class="body-text2">Jane Doe</span>
        <span slot="quoteText" class="like-h3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua!</span>
        <span slot="description" class="body-text2">Lorem ipsum dolor sit amet, consectetur</span>
      </person-profile>

    </div>

  </div>
</template>
