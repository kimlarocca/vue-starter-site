<template>
  <div class="container">

    <h1>upcoming shows card</h1>
    <p class="subhead5 padding">
      <router-link to="/">&lt; back to style guide</router-link>
    </p>

    <div class="grid-x grid-margin-x">
      <div class="cell auto">
        <upcoming-shows-card
          image="/static/images/upcoming-shows-card-image.png"
          altText="man and woman dancing"
          ticketLink="htt://www.google.com"
          :upcomingDates="[{month:'Feb',day:'27'},{month:'Feb',day:'28'},{month:'Mar',day:'1'}]"
          title="SF Symphony Youth Orchestra plays Mozart and Debussy featuring SF Opera
            Adler Fellows"
          dateRange="Sunday, March 3"
        >
        </upcoming-shows-card>
      </div>
      <div class="cell auto">
        <upcoming-shows-card
          image="/static/images/upcoming-shows-card-image.png"
          altText="man and woman dancing"
          ticketLink="htt://www.google.com"
          :upcomingDates="[{month:'Feb',day:'27'},{month:'Feb',day:'28'},{month:'Mar',day:'1'}]"
          title="SF Symphony Youth Orchestra plays Mozart and Debussy featuring SF Opera
            Adler Fellows"
          dateRange="Sunday, March 3"
        >
        </upcoming-shows-card>
      </div>
      <div class="cell auto">
        <upcoming-shows-card
          image="/static/images/upcoming-shows-card-image.png"
          altText="man and woman dancing"
          ticketLink="htt://www.google.com"
          :upcomingDates="[{month:'Feb',day:'27'},{month:'Feb',day:'28'},{month:'Mar',day:'1'}]"
          title="SF Symphony Youth Orchestra plays Mozart and Debussy featuring SF Opera
            Adler Fellows"
          dateRange="Sunday, March 3"
        >
        </upcoming-shows-card>
      </div>
      <div class="cell auto">
        <upcoming-shows-card
          image="/static/images/upcoming-shows-card-image.png"
          altText="man and woman dancing"
          ticketLink="htt://www.google.com"
          :upcomingDates="[{month:'Feb',day:'27'},{month:'Feb',day:'28'},{month:'Mar',day:'1'}]"
          title="SF Symphony Youth Orchestra plays Mozart and Debussy featuring SF Opera
            Adler Fellows"
          dateRange="Sunday, March 3"
        >
        </upcoming-shows-card>
      </div>
    </div>

  </div>
</template>
