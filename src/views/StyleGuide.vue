<template>
  <div id="app" class="style-guide">
    <div class="container">
      <div class="gray-container">
        <div class="grid-x align-middle">
          <div class="cell large-2"><img src="../../static/images/logo-bw.png" alt="san francisco symphony logo"></div>
          <div class="cell large-auto">
            <div class="subhead6">pattern library</div>
          </div>
        </div>
      </div>

      <section class="section-border">
        <h1>H1 Headline No. 1</h1>
        <h2>H2 Headline No. 2</h2>
        <h3>H3 Headline No. 3</h3>
      </section>

      <section class="section-border">
        <p class="subhead1">.subhead4 Subhead No. 1</p>
        <p class="subhead2">.subhead4 Subhead No. 2</p>
        <p class="subhead3">.subhead4 Subhead No. 3</p>
        <p class="subhead4">.subhead4 Subhead No. 4</p>
        <p class="subhead5">.subhead4 Subhead No. 5</p>
        <p class="subhead6">.subhead4 Subhead No. 6</p>
      </section>

      <section class="section-border">
        <p class="body-text1">.body-text1 Body Text No. 1</p>
        <p class="body-text2">.body-text2 Body Text No. 1</p>
        <p class="body-text3">.body-text3 Body Text No. 1</p>
        <p class="body-text4">.body-text4 Body Text No. 1</p>
      </section>

      <section class="section-border">
        <p>Normal paragraph text! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
          esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum.</p>
        <p><a>This is an inline link</a></p>
        <p><a class="caret-right">.caret-right a link with a right caret</a></p>
        <p><a class="caret-down">.caret-down a link with a down caret</a></p>
      </section>

      <section class="section-border">
        <div class="grid-x grid-margin-x colors">
          <div class="cell auto bg-yellow"><span>$yellow .bg-yellow</span></div>
          <div class="cell auto bg-brown"><span>$brown .bg-brown</span></div>
          <div class="cell auto bg-purple"><span>$purple .bg-purple</span></div>
          <div class="cell auto bg-blue"><span>$blue .bg-blue</span></div>
        </div>
        <div class="grid-x grid-margin-x colors">
          <div class="cell auto bg-light-gray"><span>$light-gray .bg-light-gray</span></div>
          <div class="cell auto bg-medium-gray"><span>$medium-gray .bg-medium-gray</span></div>
          <div class="cell auto bg-dark-gray"><span>$dark-gray .bg-dark-gray</span></div>
        </div>
      </section>

      <section class="section-border">
        <p class="subhead5">Buttons</p>
        <div class="black-container">
          <a class="button">view tickets</a>
          <a class="button ghost">browse concerts</a>
        </div>
        <a class="button gray">learn more</a>
        <a class="button blue">buy tickets</a>
      </section>

      <p class="subhead5 padding">Hero Component:
        <router-link to="/Hero">see examples</router-link>
      </p>

    </div>

    <hero class="large smallHeader" image="/static/images/hero1.jpg" mobileImage="/static/images/hero1mobile.jpg"
          accentColor="#ff8f2a" hasH1="true">
      <span slot="header">Beethoven<br>Stravinsky<br>Maher<br></span>
      <span slot="colorHeader">and more!</span>
      <p slot="subheader" class="subhead4">2019 Season Now Available</p>
      <a class="button" slot="cta1">View Tickets</a>
      <a class="button ghost" slot="cta2">Browse Concerts</a>
    </hero>

    <div class="container">
      <p class="subhead5 padding">
        <router-link to="/UpcomingShowsCard">Upcoming Shows Card Component</router-link>
      </p>

      <div style="width: 300px">
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

      <p class="subhead5 padding">
        <router-link to="/PerformancesCard">Performances Card Component</router-link>
      </p>

      <section class="performances-cards" style="width: 33vw; height: 33vw">
        <performances-card
          image="/static/images/performances-card-image.png"
          category="family"
          subtitle="great performances"
          title="Phenomenal artists perform with the SF symphony"
          learnMoreLink="htt://www.google.com"
        >
        </performances-card>
      </section>

    </div>

  </div>
</template>

<style scoped lang="scss">
  .style-guide {
    background: white;
    padding-top: 30px;

    .gray-container {
      background: #f0f0f0;
      padding: 20px;
      margin-bottom: 60px;
    }

    .black-container {
      background: black;
      padding: 20px;
      margin-bottom: 60px;
    }

    .padding {
      padding: 60px 0;
    }

    .section-border {
      margin-bottom: 60px;
      padding-left: 38px;
      border-left: solid 2px #ffc373;
    }

    .colors {
      margin-bottom: 30px;

      .cell {
        height: 100px;

        span {
          padding: 10px;
          background: white;
        }
      }
    }

    .button {
      margin-right: 2rem;
    }
  }
</style>
