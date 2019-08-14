<template>
  <div class="container">

    <h1>event cards</h1>
    <p class="subhead5">
      <router-link to="/">&lt; back to style guide</router-link>
    </p>

    <div class="grid-x grid-margin-x grid-margin-y section-padding-50">
      <div class="cell large-3 medium-6 small-12">
        <event-card
          image="/static/images/upcoming-shows-card-image.png"
          altText="man and woman dancing"
          link="http://www.google.com"
          cta="buy tickets"
          :upcomingDates="[{month:'Feb',day:'27'},{month:'Feb',day:'28'},{month:'Mar',day:'1'}]"
          dateRange="Sunday, March 3"
        >
          <span slot="title" class="body-text2">SF Symphony Youth Orchestra plays Mozart and Debussy featuring SF Opera Adler Fellows</span>

        </event-card>
      </div>
      <div class="cell large-3 medium-6 small-12">
        <event-card
          image="/static/images/upcoming-shows-card-image.png"
          altText="man and woman dancing"
          link="http://www.google.com"
          cta="buy tickets"
          :upcomingDates="[{month:'Feb',day:'27'}]"
          dateRange="Sunday, March 3"
        >
          <span slot="title" class="body-text2">SF Symphony Youth Orchestra plays Mozart and Debussy featuring SF Opera Adler Fellows</span>

        </event-card>
      </div>
      <div class="cell large-3 medium-6 small-12">
        <event-card
          image="/static/images/upcoming-shows-card-image.png"
          altText="man and woman dancing"
          link="http://www.google.com"
          cta="buy tickets"
          dateRange="Sunday, March 3"
        >
          <span slot="title" class="body-text2">SF Symphony Youth Orchestra plays Mozart and Debussy featuring SF Opera Adler Fellows</span>

        </event-card>
      </div>
      <div class="cell large-3 medium-6 small-12">
        <event-card
          image="/static/images/upcoming-shows-card-image.png"
          altText="man and woman dancing"
          link="http://www.google.com"
          cta="buy tickets"
          :upcomingDates="[{month:'Feb',day:'27'},{month:'Feb',day:'28'}]"
          dateRange="Sunday, March 3"
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
          cta="event details"
          dateRange="Sunday, March 3"
          category="free community event"
        >
          <span slot="title" class="body-text2">SF Symphony Youth Orchestra plays Mozart and Debussy featuring SF Opera Adler Fellows</span>
        </event-card>
      </div>
      <div class="cell large-3 medium-6 small-12">
        <event-card
          link="http://www.google.com"
          cta="event details"
          dateRange="Sunday, March 3"
          category="free community event"
        >
          <span slot="title" class="body-text2">SF Symphony Youth Orchestra plays Mozart and Debussy featuring SF Opera Adler Fellows</span>
        </event-card>
      </div>
      <div class="cell large-3 medium-6 small-12">
        <event-card
          link="http://www.google.com"
          cta="event details"
          dateRange="Sunday, March 3"
          category="free community event"
        >
          <span slot="title" class="body-text2">SF Symphony Youth Orchestra plays Mozart and Debussy featuring SF Opera Adler Fellows</span>
        </event-card>
      </div>
      <div class="cell large-3 medium-6 small-12">
        <event-card
          link="http://www.google.com"
          cta="event details"
          dateRange="Sunday, March 3"
          category="free community event"
        >
          <span slot="title" class="body-text2">SF Symphony Youth Orchestra plays Mozart and Debussy featuring SF Opera Adler Fellows</span>
        </event-card>
      </div>
    </div>

  </div>
</template>
