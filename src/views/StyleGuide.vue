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
        <p><a class="caret-right">.caret-right</a></p>
        <p><a class="caret-down">.caret-down</a></p>
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
        <p>.button</p>
        <p>.button ghost</p>
        <div class="black-container">
          <a class="button">view tickets</a>
          <a class="button ghost">browse concerts</a>
        </div>
        <p>.button gray</p>
        <p>.button blue</p>
        <a class="button gray">learn more</a>
        <a class="button blue">buy tickets</a>
      </section>

      <h2 class="padding">layouts</h2>

      <p class="subhead5">
        <router-link to="/HomePage">home page</router-link>
      </p>

      <h2 class="padding">components</h2>

      <p class="subhead5">
        Hero Component |
        <router-link to="/Hero">view examples</router-link>
      </p>

      <div class="padding-smaller"></div>

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

    <div class="container">

      <p class="subhead5 padding">
        Mini Hero Component |
        <router-link to="/MiniHero">view examples</router-link>
      </p>

      <mini-hero
        image="/static/images/mini-hero1.jpg"
        font="headline"
        accentColor="#7ecb69"
        preheader="Education"
      >
        <span slot="header" class="like-h3">Music Education for</span>
        <span slot="colorHeader" class="like-h3">Every Public School Child!</span>
        <a class="button" href="#" slot="cta">education initiatives</a>
      </mini-hero>

      <p class="subhead5 padding">
        Upcoming Shows Card Component |
        <router-link to="/UpcomingShowsCard">view in a grid</router-link>
      </p>

      <div style="width: 300px">
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

      <p class="subhead5 padding">
        Performances Card Component |
        <router-link to="/PerformancesCard">view in a grid</router-link>
      </p>

      <div class="performances-cards three">
        <div class="grid-x">
          <div class="cell large-4 medium-6 small-12">
            <performances-card
              image="/static/images/performances-card-image.png"
              category="family"
              subtitle="great performances"
              title="Phenomenal artists perform with the SF symphony"
              learnMoreLink="http://www.google.com"
            >
            </performances-card>
          </div>
        </div>
      </div>

      <p class="subhead5 padding">Press Release Card Component</p>

      <div class="grid-x grid-margin-x grid-margin-y">
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
          <press-release-card
            color="purple"
            title="June 5, 2018 - San Francisco Symphony announces new Summer With the Symphony performance: actor and hip hop artist Common, August 1 "
            learnMoreLink="http://www.google.com"
          >
          </press-release-card>
        </div>
      </div>

      <p class="subhead5 padding">
        News Card Component
      </p>

      <div class="grid-x grid-margin-x grid-margin-y">
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

      <div class="grid-x grid-margin-x grid-margin-y">
        <div class="cell large-4 medium-6 small-12">
          <feature-grid
            image="/static/images/feature-grid1.jpg"
            altText="The Neighbourhood"
            title="The Neighbourhood"
            description="Make the most of your night dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt egestas lectus nec feugiat."
            learnMoreLink="http://www.google.com"   
            learnMoreLinkTitle="Learn More"
          >            
          </feature-grid>
        </div>
      </div>

    </div>

  </div>
</template>

<style scoped lang="scss">
  .style-guide {
    background: white;
    padding: 30px 0;

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
      padding: 80px 0 20px;
    }

    .padding-smaller {
      padding: 20px 0;
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
