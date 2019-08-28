<template>
  <div class="container">

    <h1>event cards</h1>
    <p class="subhead5">
      <router-link to="/">&lt; back to style guide</router-link>
    </p>

    <!--
    PROPS:
    image: the image displayed at the top of the card (optional)
    upcomingDates: array of objects containing the month and the day
    altText: alt text for the image (optional but highly recommended for SEO and accessibility)
    category
    title
    description
    conductor
    instrument
    dateRange: the dates for the event, displayed at the bottom of the card above the CTA
    link: the entire card will be clickable and point to this URL
    cta: the text displayed in the button
    ctaLink: only the cta button is clickable to this link
    -->

    <div class="grid-x grid-margin-x grid-margin-y">
      <div :key="index" v-for="index in eventsToShow" class="cell large-3 medium-6 small-12">
        <event-card
          image="assets/images/upcoming-shows-card-image.png"
          link="http://www.google.com"
          cta="learn more"
          category="performance"
          alignment="left"
          dateRange="Sunday, March 3 | 8:00PM"
          conductor="Jane Doe"
          :upcomingDates="[{month:'Feb',day:'27'},{month:'Feb',day:'28'},{month:'Mar',day:'1'}]"
          instrument="Piano"
        >
          <span slot="title"
                class="body-text2">Close Encounters of the Third Kind - feature file with the SF Symphony</span>
        </event-card>
      </div>
    </div>
    <hr class="margin-bottom-0">
    <div class="text-center"><a tabindex="0" class="button view-more caret-down" @click="eventsToShow += 4">view more</a></div>

    <div class="section-padding-50"></div>

    <div class="grid-x grid-margin-x grid-margin-y">
      <div class="cell large-3 medium-6 small-12">
        <event-card
          link="http://www.google.com"
          cta="event details"
          dateRange="Sunday, March 3"
          category="free community event"
          alignment="left"
        >
          <span slot="title" class="body-text2">SF Symphony Youth Orchestra plays Mozart and Debussy featuring SF Opera Adler Fellows</span>
        </event-card>
      </div>
    </div>

    <div class="section-padding-50"></div>

    <div class="grid-x grid-margin-x grid-margin-y">
      <div class="cell large-3 medium-6 small-12">
        <event-card
          link="http://www.google.com"
          cta="read more"
          category="news"
          alignment="left"
        >
          <span slot="title" class="body-text2">SF Symphony Youth Orchestra plays Mozart and Debussy featuring SF Opera Adler Fellows</span>
          <span slot="description" class="body-text4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
        </event-card>
      </div>
    </div>

    <div class="section-padding-50"></div>

    <div class="grid-x grid-margin-x grid-margin-y">
      <div class="cell large-3 medium-6 small-12">
        <event-card
          link="http://www.google.com"
          cta="learn more"
          category="performance"
          alignment="left"
          dateRange="Sunday, March 3 | 8:00PM"
          conductor="Jane Doe"
          instrument="Piano"
        >
          <span slot="title"
                class="body-text2">Close Encounters of the Third Kind - feature file with the SF Symphony</span>
        </event-card>
      </div>
    </div>

    <div class="section-padding-50"></div>

    <div class="grid-x grid-margin-x grid-margin-y">
      <div class="cell large-3 medium-6 small-12">
        <event-card
          image="assets/images/upcoming-shows-card-image.png"
          link="http://www.google.com"
          :upcomingDates="[{month:'Feb',day:'27'},{month:'Feb',day:'28'},{month:'Mar',day:'1'}]"
        >
        </event-card>
      </div>
    </div>



  </div>
</template>

<script>
    export default {
        data: function () {
            return {
                eventsToShow: 4
            }
        }
    }
</script>
