<template>
  <div id="app" class="style-guide">
    <div class="container">
      <div class="gray-container">
        <div class="grid-x grid-margin-x grid-margin-y align-middle">
          <div class="cell large-2 medium-3">
            <img src="assets/images/logo-bw.png" alt="san francisco symphony logo">
          </div>
          <div class="cell large-2 medium-3">
            <div class="subhead6">pattern library</div>
          </div>
          <div class="cell auto large-text-right medium-text-right">
            <div class="subhead6"><a href="#layouts">Layouts</a> | <a href="#components">components</a></div>
          </div>
        </div>
      </div>

      <section class="section-border">
        <h1>H1 Headline No. 1</h1>
        <h2>H2 Headline No. 2</h2>
        <h3>H3 Headline No. 3</h3>
      </section>

      <section class="section-border">
        <p class="subhead1">.subhead1 Subhead No. 1</p>
        <p class="subhead2">.subhead2 Subhead No. 2</p>
        <p class="subhead3">.subhead3 Subhead No. 3</p>
        <p class="subhead4">.subhead4 Subhead No. 4</p>
        <p class="subhead5">.subhead5 Subhead No. 5</p>
        <p class="subhead6">.subhead6 Subhead No. 6</p>
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
        <p>.button | .button ghost</p>
        <div class="black-container">
          <p><a class="button">view tickets</a></p>
          <p><a class="button ghost">browse concerts</a></p>
        </div>
        <p>.button gray | .button blue | .button light-gray | .button ghost-black</p>
        <p><a class="button gray">learn more</a></p>
        <p><a class="button blue">buy tickets</a></p>
        <p><a class="button light-gray">view tickets</a></p>
        <p><a class="button ghost-black">view tickets</a></p>
      </section>

      <h2 class="padding" id="layouts">layouts and examples</h2>

      <p class="subhead5 padding-smaller">
        <router-link to="/HomePage">home page with the news mosaic</router-link>
      </p>
      <p class="subhead5 padding-smaller">
        <router-link to="/AboutPage">about page</router-link>
      </p>
      <p class="subhead5 padding-smaller">
        <router-link to="/ConcertDetail">concert detail page with "at a glance", "concert extras", &amp; "related
          content"
        </router-link>
      </p>
      <p class="subhead5 padding-smaller">
        <router-link to="/MediaBlocks">media blocks</router-link>
      </p>
      <p class="subhead5 padding-smaller">
        <router-link to="/Accordions">content blinds (accordions)</router-link>
      </p>
      <p class="subhead5 padding-smaller">
        <router-link to="/Carousel">carousels</router-link>
      </p>

      <h2 class="padding" id="components">components</h2>

      <p class="subhead5 padding-smaller">
        Hero Component |
        <router-link to="/Hero">view examples</router-link>
      </p>
      <p>Used for: standard hero, event detail hero, article hero, statement hero, impact hero, feature widget</p>

      <div class="padding-smaller"></div>

    </div>

    <hero
      class="full-screen smallHeader"
      image="assets/images/hero1.jpg"
      mobileImage="assets/images/hero1mobile.jpg"
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
        image="assets/images/mini-hero1.jpg"
        font="headline"
        accentColor="#7ecb69"
        preheader="Education"
      >
        <span slot="header" class="like-h3">Music Education for</span>
        <span slot="colorHeader" class="like-h3">Every Public School Child!</span>
        <a class="button" href="#" slot="cta">education initiatives</a>
      </mini-hero>

      <p class="subhead5 padding">
        Announcement Callout Component
      </p>

      <!--
      PROPS:
      backgroundColor: can be white or gray - default is white

      SLOTS:
      title
      description
      cta1 (optional)
      cta2 (optional)
      -->
      <announcement-callout backgroundColor="gray">
        <span slot="title" class="body-text1">Support education in music</span>
        <span slot="description" class="body-text3">You can help a child get an instrument or an entire class see a performance live, your contribution is critical.</span>
        <a class="button blue" slot="cta1" href="#">make a gift</a>
        <a class="button ghost-black" slot="cta2" href="#">other ways to give</a>
      </announcement-callout>

      <div class="padding"></div>

      <p class="subhead5">
        Event Card Component |
        <router-link to="/EventCard">view examples</router-link>
      </p>
      <p>Used for: event grid, story grid, event cards widget, calendar grid, calendar cards</p>

      <div class="grid-x padding-smaller">
        <div class="cell large-3 medium-6 small-12">
          <event-card
            image="assets/images/upcoming-shows-card-image.png"
            altText="man and woman dancing"
            link="http://www.google.com"
            cta="buy tickets"
            alignment="left"
            :upcomingDates="[{month:'Feb',day:'27'},{month:'Feb',day:'28'},{month:'Mar',day:'1'}]"
            dateRange="Sunday, March 3"
          >
            <span slot="title" class="body-text2">SF Symphony Youth Orchestra plays Mozart and Debussy featuring SF Opera Adler Fellows</span>
          </event-card>
        </div>
      </div>

      <p class="subhead5 padding">
        Category Card Component |
        <router-link to="/CategoryCard">view in a grid</router-link>
      </p>

      <div class="category-cards three">
        <div class="grid-x">
          <div class="cell large-4 medium-6 small-12">
            <category-card
              image="assets/images/category-card-image.png"
              title="family"
              category="great performances"
              learnMoreLink="http://www.google.com"
            >
              <span slot="shortDescription" class="body-text2">Phenomenal artists perform with the SF symphony</span>
            </category-card>
          </div>
        </div>
      </div>

      <p class="subhead5 padding">Media Blocks</p>

      <div class="grid-x grid-margin-x">
        <div class="cell large-6 medium-6">
          <div class="responsive-embed widescreen">
            <iframe width="1240" height="700" src="https://www.youtube.com/embed/krCiR04u8Ig" frameborder="0"
                    allowfullscreen></iframe>
          </div>
        </div>
        <div class="cell large-6 medium-6">
          <div class="responsive-embed widescreen">
            <iframe src="https://player.vimeo.com/video/42325868" width="1240" height="700" frameborder="0"
                    allow="autoplay; fullscreen" allowfullscreen></iframe>
          </div>
        </div>
      </div>

      <p class="subhead5 padding">Press Release Card Component</p>
      <p>Used for: news mosaic, related content</p>

      <div class="grid-x grid-margin-x grid-margin-y padding-smaller">
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

      <div class="padding"></div>

      <p class="subhead5">
        News Card Component
      </p>
      <p>Used for: news mosaic, related content, content cards</p>

      <!--
      PROPS:
      image
      altText
      subtitle
      title
      learnMoreLink - entire card will be clickable
      hasTextLink - if set to true, the card will display a "learn more" link (the default is false)
      -->

      <div class="grid-x grid-margin-x grid-margin-y padding-smaller">
        <div class="cell large-4 medium-6 small-12">
          <news-card
            image="assets/images/news-card-image.jpg"
            altText="james hetfield of metallica performing"
            learnMoreLink="http://www.google.com"
            subtitle="news"
            title="Metallica reunites with SF Symphony to open Chase Center"
          >
          </news-card>
        </div>
        <div class="cell large-4 medium-6 small-12">
          <news-card
            image="assets/images/news-card-image.jpg"
            altText="james hetfield of metallica performing"
            learnMoreLink="http://www.google.com"
            hasTextLink="true"
            subtitle="news"
            title="Metallica reunites with SF Symphony to open Chase Center"
          >
          </news-card>
        </div>
      </div>

      <p class="subhead5 padding">
        Feature Grid Card Component
      </p>

      <!--
      PROPS:
      image
      altText
      title
      description
      learnMoreLink
      learnMoreTitle
      background-color: can be gray or white (gray by default)
      -->

      <div class="grid-x grid-margin-x grid-margin-y">
        <div class="cell large-4 medium-6 small-12">
          <feature-grid
            image="assets/images/feature-grid1.jpg"
            altText="The Neighbourhood"
            title="The Neighbourhood"
            description="Make the most of your night dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt egestas lectus nec feugiat."
            learnMoreLink="http://www.google.com"
            learnMoreLinkTitle="Learn More"
            background-color="gray"
          >
          </feature-grid>
        </div>
      </div>

      <p class="subhead5 padding">
        Person Profile Component |
        <router-link to="/PersonProfile">view examples</router-link>
      </p>

      <person-profile
        image="assets/images/person-profile-image.jpg"
        category="concert"
        link="http://www.google.com"
        openInNewWindow="true"
        hasVideo="true"
        backgroundColor="blue"
      >
        <span slot="name" class="body-text2">Jane Doe</span>
        <span slot="quoteText" class="like-h3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua!</span>
        <span slot="description" class="body-text2">Lorem ipsum dolor sit amet, consectetur</span>
      </person-profile>

      <p class="subhead5 padding">
        Content Blade Component |
        <router-link to="/ContentBlade">view examples</router-link>
      </p>

    </div>

    <content-blade
      image="assets/images/content-blade-image.jpg"
      altText="man conducting the san francisco symphony"
    >
      <template slot="content">
        <h2 class="body-text1">Event Description</h2>
        <div class="section-padding-30"></div>
        <p class="body-text3">
          Chief Conductor of the Netherlands Radio Philharmonic Orchestra Karina Canellakis makes her San Francisco
          Symphony debut in a presentation of music by twoRussian heavyweights: Prokofiev’s ravishingly colorfuland
          percussive Piano Concerto No. 1, played by the Ukranian piano powerhouse Alexander Gavrylyuk (whoalso makes
          his SF Symphony debut at these concerts),and Shostakovich’s defiant 1941 bombshell, theLeningrad Symphony.</p>
        <p class="body-text3">In the twilight of Imperial Russia, a brazen 21-year-old pianist submitted his own
          concerto as a graduation piece. A sassy and whimsical fantasy written for a formidable soloist (himself), the
          1912 Piano Concerto No. 1 by Prokofiev scandalized the old guard. Less than thirty years later, Shostakovich
          unveiled his Seventh Symphony, but Russia was a different place. The old guard was all but extinguished;
          Stalin had prosecuted his Great Terror, and Hitler held Leningrad under siege.
        </p>
      </template>
    </content-blade>

    <div class="container">

      <p class="subhead5 padding">
        Misc Components
      </p>

      <p>Podcast Card / Media Player</p>

      <!--
      PROPS:
      title
      link: external link
      inlinePlayer: true or false (default is false)
      audioFile: link to audio file which will play inline if inlinePlayer is true
      -->

      <div class="grid-x grid-margin-x grid-margin-y">
        <div class="cell large-4 medium-4 small-12 bg-medium-gray">
          <podcast-card
            title="Lorem ipsum dolor sit amet con secteur adpisci"
            link="https://www.youtube.com/watch?v=VhxRrb5ojxk"
          >
          </podcast-card>
        </div>
      </div>

      <div class="grid-x grid-margin-x grid-margin-y">
        <div class="cell large-4 medium-4 small-12">
          <podcast-card
            inlinePlayer
            title="Lorem ipsum dolor sit amet con secteur adpisci"
            link="https://www.youtube.com/watch?v=VhxRrb5ojxk"
            audioFile="https://s3.amazonaws.com/podcasts.sfsymphony.org/Bet6mix.mp3"
          >
          </podcast-card>
        </div>
      </div>

      <div class="padding-smaller margin-bottom-2"></div>

      <p>Performance Card</p>

      <!--
      PROPS:
      class - can be any class but the intent is to set the desired bottom margin
      location
      dateRange
      link - the link for the "buy tickets" button
      -->

      <div class="grid-x grid-margin-x grid-margin-y">
        <div class="cell large-4 medium-4 small-12">
          <performance-card
            class="margin-bottom-2"
            location="davies symphony hall"
            dateRange="Fri, Feb 22, 2019 at 8:00pm"
            link="http://www.google.com"
          >
          </performance-card>
        </div>
      </div>

      <div class="padding-smaller"></div>

      <p>Sponsorship Callout</p>
      <div class="padding-smaller"></div>

      <!--
      PROPS:
      image
      altText
      hasText - if this is set, plain text will display
      -->

    </div>

    <section class="bg-medium-gray">
      <div class="container smaller">
        <div class="grid-x grid-margin-x grid-margin-y sponsorship">
          <div class="cell large-3 small-12 sponsorship-text">
            <p class="text-brown">BROUGHT TO YOU BY</p>
          </div>
          <div class="cell large-9 sponsorship-container">
            <sponsorship-callout
              image="https://i.ibb.co/rkqb4SV/neiman-marcus.png"
              altText="Neiman Marcus Logo"
            >
            </sponsorship-callout>
            <sponsorship-callout
              image="https://i.ibb.co/GFG4Wwy/chase.png"
              altText="Chase Logo"
            >
            </sponsorship-callout>
            <sponsorship-callout
              image="https://i.ibb.co/XVB8KRW/chevron.png"
              altText="Chevron Logo"
            >
            </sponsorship-callout>
            <sponsorship-callout
              image="https://i.ibb.co/4msnjPx/first-republic-bank.png"
              altText="First Republic Bank"
            >
            </sponsorship-callout>
            <sponsorship-callout
              image="https://i.ibb.co/CsfRDXx/air-bnb.png"
              altText="Airbnb Logo"
            >
            </sponsorship-callout>
            <sponsorship-callout
              hasText="LOREM IPSUM"
            >
            </sponsorship-callout>

          </div>
        </div>
      </div>
    </section>

    <div class="container">

      <p class="subhead5 padding">Social Links</p>

      <!--
      PROPS:
      icon: the font awesome class name e.g. "fab fa-facebook-f"
      link
      altText
      iconColor: will set the icon color as inline css - use keywords or hex values (default is black)
      backgroundColor: will set the background color as inline css - use keywords or hex values (default is transparent)
      -->

      <ul class="social-links">
        <social-link
          icon="fab fa-facebook-f"
          link="https://www.facebook.com/sfsymphony"
          altText="facebook"
          color="black"
        >
        </social-link>
        <social-link
          icon="fab fa-twitter"
          link="https://www.facebook.com/sfsymphony"
          altText="facebook"
          color="black"
        >
        </social-link>
        <social-link
          icon="fab fa-youtube"
          link="https://www.facebook.com/sfsymphony"
          altText="facebook"
          color="black"
        >
        </social-link>
        <social-link
          icon="fab fa-spotify"
          link="https://www.facebook.com/sfsymphony"
          altText="facebook"
          color="black"
        >
        </social-link>
        <social-link
          icon="fab fa-instagram"
          link="https://www.facebook.com/sfsymphony"
          altText="facebook"
          color="black"
        >
        </social-link>
      </ul>

      <div class="padding-smaller"></div>

      <div class="black-container">
        <ul class="social-links">
          <social-link
            icon="fab fa-facebook-f"
            link="https://www.facebook.com/sfsymphony"
            altText="facebook"
            color="black"
            backgroundColor="white"
          >
          </social-link>
          <social-link
            icon="fab fa-twitter"
            link="https://www.facebook.com/sfsymphony"
            altText="facebook"
            color="black"
            backgroundColor="white"
          >
          </social-link>
          <social-link
            icon="fab fa-youtube"
            link="https://www.facebook.com/sfsymphony"
            altText="facebook"
            color="black"
            backgroundColor="white"
          >
          </social-link>
          <social-link
            icon="fab fa-spotify"
            link="https://www.facebook.com/sfsymphony"
            altText="facebook"
            color="black"
            backgroundColor="white"
          >
          </social-link>
          <social-link
            icon="fab fa-instagram"
            link="https://www.facebook.com/sfsymphony"
            altText="facebook"
            color="black"
            backgroundColor="white"
          >
          </social-link>
        </ul>
      </div>

      <p class="subhead5 padding">Footer</p>
      <div class="padding-smaller"></div>


    </div>

    <footer-component
      logoAltText="San Francisco Symphony"
      address="Davies Symphony Hall 201 Van Ness Ave. SF, CA 94102"
      phoneNumber="(415) 864-6000"
      copywrite="2018 San Fransisco Symphony"
      privacy="Privacy & Terms"
      privacyLink="#"
      donateCopy="Your gift makes concerts possible."
      donateButton="#"
      donateButtonText="Donate Today"
    >
    </footer-component>
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
      padding: 80px 0 1rem;
    }

    .padding-smaller {
      padding: 1rem 0;
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
  }
</style>
