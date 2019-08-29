<template>
  <div>

    <div class="container">
      <h1>content blinds (accordions)</h1>
      <p class="subhead5 padding">
        <router-link to="/">&lt; back to style guide</router-link>
      </p>

      <div class="section-padding-50"></div>

      <!--
      <accordion>
      PROPS:
      allowMultiple - set to true if multiple accordions are allowed to be open at once
      mobileOnly - set to true to transform content into accordions appear on mobile only
      closeAll - set to true if all accordions are closed on load (by default the first item is open)

      STYLES:
      event-blinds - use this class to apply the event blind styles to the accordion

      <accordion-item>
      PROPS:
      openOnLoad - set to true if you want this item to be open - only the first item is open by default

      SLOTS:
      header
      content
      -->

      <p class="subhead5">Standard Accordion Example 1:</p>

      <div class="section-padding-50"></div>

      <accordion>
        <accordion-item>
          <template slot="header">
            <p>
              <span class="subhead6"><strong>Schumann</strong></span>
              <br>
              <span class="body-text4">Manfred overture | 12 mins</span>
            </p>
          </template>
          <template slot="content">
            <p class="body-text3">Robert Schumann told Franz Liszt that he considered the Manfred Overture to be one of
              his “most powerful children.” Schumann’s music for Lord Byron’s dramatic poem Manfred stressed the musical
              medium most deferential to poetry: the melodrama, in which text is recited over an accompanying score. The
              result is an odd musical hybrid, and of Schumann’s Manfred music only the Overture has found an enduring
              place in the repertory. In this somber work we find Schumann at his most demonic, setting the scene for
              Byron’s tortured hero with music of wide fluctuation, passionately designed melodies, and insistent
              rhythms.</p>
            <p class="body-text3"><strong>Listen for:</strong><br>This is a marvelously imagined piece of scoring—hear,
              for example, the economical and stunningly effective use of the trombones.</p>
            <p class="body-text3"><a class="caret-right" href="#"><strong>LEARN MORE</strong></a></p>
          </template>
        </accordion-item>
        <accordion-item>
          <template slot="header">
            Header 2
          </template>
          <template slot="content">
            <p class="body-text1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.</p>
          </template>
        </accordion-item>
        <accordion-item>
          <template slot="header">
            Header 3
          </template>
          <template slot="content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.</p>
          </template>
        </accordion-item>
      </accordion>

      <div class="section-padding-100"></div>

      <p class="subhead5">Standard Accordion Example 2:</p>

      <div class="section-padding-50"></div>

    </div>

    <section class="bg-light-gray">
      <div class="container section-padding-50">
        <h3 class="subhead3 text-center">VOLUNTEER LEAGUES</h3>
        <div class="section-padding-50"></div>
        <accordion allowMultiple="true">
          <accordion-item>
            <template slot="header">
              <p>Marin League</p>
            </template>
            <template slot="content">
              <div class="grid-x grid-margin-x grid-margin-y">
                <div class="cell large-4 medium-4 small-12">
                  <img src="assets/images/news-card-image.jpg" alt="alt tag goes here">
                </div>
                <div class="cell large-5 medium-5 small-12">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci atque commodi corporis culpa
                    delectus ea et fugit impedit incidunt inventore laborum magnam natus neque, quidem quisquam sapiente
                    tempora temporibus voluptatibus!</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci atque commodi corporis culpa
                    delectus ea et fugit impedit incidunt inventore laborum magnam natus neque, quidem quisquam sapiente
                    tempora temporibus voluptatibus!</p>
                </div>
                <div class="cell large-3 medium-3 small-12">
                  <p class="body-text4"><strong>Chair</strong><br>Jane Doe</p>
                  <p class="body-text4"><strong>Vice Chair</strong><br>John Doe</p>
                  <p class="body-text4"><a class="caret-right" href="#"><strong>CONTACT US TO JOIN</strong></a></p>
                </div>
              </div>
            </template>
          </accordion-item>
          <accordion-item>
            <template slot="header">
              <p>Marin League</p>
            </template>
            <template slot="content">
              <div class="grid-x grid-margin-x grid-margin-y">
                <div class="cell large-4 medium-4 small-12">
                  <img src="assets/images/news-card-image.jpg" alt="alt tag goes here">
                </div>
                <div class="cell large-5 medium-5 small-12">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci atque commodi corporis culpa
                    delectus ea et fugit impedit incidunt inventore laborum magnam natus neque, quidem quisquam sapiente
                    tempora temporibus voluptatibus!</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci atque commodi corporis culpa
                    delectus ea et fugit impedit incidunt inventore laborum magnam natus neque, quidem quisquam sapiente
                    tempora temporibus voluptatibus!</p>
                </div>
                <div class="cell large-3 medium-3 small-12">
                  <p class="body-text4"><strong>Chair</strong><br>Jane Doe</p>
                  <p class="body-text4"><strong>Vice Chair</strong><br>John Doe</p>
                  <p class="body-text4"><a class="caret-right" href="#"><strong>CONTACT US TO JOIN</strong></a></p>
                </div>
              </div>
            </template>
          </accordion-item>
          <accordion-item>
            <template slot="header">
              <p>Marin League</p>
            </template>
            <template slot="content">
              <div class="grid-x grid-margin-x grid-margin-y">
                <div class="cell large-4 medium-4 small-12">
                  <img src="assets/images/news-card-image.jpg" alt="alt tag goes here">
                </div>
                <div class="cell large-5 medium-5 small-12">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci atque commodi corporis culpa
                    delectus ea et fugit impedit incidunt inventore laborum magnam natus neque, quidem quisquam sapiente
                    tempora temporibus voluptatibus!</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci atque commodi corporis culpa
                    delectus ea et fugit impedit incidunt inventore laborum magnam natus neque, quidem quisquam sapiente
                    tempora temporibus voluptatibus!</p>
                </div>
                <div class="cell large-3 medium-3 small-12">
                  <p class="body-text4"><strong>Chair</strong><br>Jane Doe</p>
                  <p class="body-text4"><strong>Vice Chair</strong><br>John Doe</p>
                  <p class="body-text4"><a class="caret-right" href="#"><strong>CONTACT US TO JOIN</strong></a></p>
                </div>
              </div>
            </template>
          </accordion-item>
          <accordion-item>
            <template slot="header">
              <p>Marin League</p>
            </template>
            <template slot="content">
              <div class="grid-x grid-margin-x grid-margin-y">
                <div class="cell large-4 medium-4 small-12">
                  <img src="assets/images/news-card-image.jpg" alt="alt tag goes here">
                </div>
                <div class="cell large-5 medium-5 small-12">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci atque commodi corporis culpa
                    delectus ea et fugit impedit incidunt inventore laborum magnam natus neque, quidem quisquam sapiente
                    tempora temporibus voluptatibus!</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci atque commodi corporis culpa
                    delectus ea et fugit impedit incidunt inventore laborum magnam natus neque, quidem quisquam sapiente
                    tempora temporibus voluptatibus!</p>
                </div>
                <div class="cell large-3 medium-3 small-12">
                  <p class="body-text4"><strong>Chair</strong><br>Jane Doe</p>
                  <p class="body-text4"><strong>Vice Chair</strong><br>John Doe</p>
                  <p class="body-text4"><a class="caret-right" href="#"><strong>CONTACT US TO JOIN</strong></a></p>
                </div>
              </div>
            </template>
          </accordion-item>
          <accordion-item>
            <template slot="header">
              <p>Marin League</p>
            </template>
            <template slot="content">
              <div class="grid-x grid-margin-x grid-margin-y">
                <div class="cell large-4 medium-4 small-12">
                  <img src="assets/images/news-card-image.jpg" alt="alt tag goes here">
                </div>
                <div class="cell large-5 medium-5 small-12">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci atque commodi corporis culpa
                    delectus ea et fugit impedit incidunt inventore laborum magnam natus neque, quidem quisquam sapiente
                    tempora temporibus voluptatibus!</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci atque commodi corporis culpa
                    delectus ea et fugit impedit incidunt inventore laborum magnam natus neque, quidem quisquam sapiente
                    tempora temporibus voluptatibus!</p>
                </div>
                <div class="cell large-3 medium-3 small-12">
                  <p class="body-text4"><strong>Chair</strong><br>Jane Doe</p>
                  <p class="body-text4"><strong>Vice Chair</strong><br>John Doe</p>
                  <p class="body-text4"><a class="caret-right" href="#"><strong>CONTACT US TO JOIN</strong></a></p>
                </div>
              </div>
            </template>
          </accordion-item>
        </accordion>
        <div class="section-padding-50"></div>
      </div>
    </section>

    <div class="container">

      <div class="section-padding-100"></div>

      <p class="subhead5">grid on desktop, accordions on mobile:</p>

      <div class="section-padding-50"></div>

      <accordion mobileOnly="true" class="no-border-on-desktop">
        <div class="grid-x grid-margin-x">
          <div class="cell large-4 medium-12 small-12">
            <accordion-item>
              <template slot="header">
                <p>
                  <span class="subhead6"><strong>Schumann</strong></span>
                  <br>
                  <span class="body-text4">Manfred overture | 12 mins</span>
                </p>
              </template>
              <template slot="content">
                <p class="body-text3">Robert Schumann told Franz Liszt that he considered the Manfred Overture to be one
                  of
                  his “most powerful children.” Schumann’s music for Lord Byron’s dramatic poem Manfred stressed the
                  musical
                  medium most deferential to poetry: the melodrama, in which text is recited over an accompanying score.
                  The
                  result is an odd musical hybrid, and of Schumann’s Manfred music only the Overture has found an
                  enduring
                  place in the repertory. In this somber work we find Schumann at his most demonic, setting the scene
                  for
                  Byron’s tortured hero with music of wide fluctuation, passionately designed melodies, and insistent
                  rhythms.</p>
                <p class="body-text3"><strong>Listen for:</strong><br>This is a marvelously imagined piece of
                  scoring—hear,
                  for example, the economical and stunningly effective use of the trombones.</p>
                <p class="body-text3"><a class="caret-right" href="#"><strong>LEARN MORE</strong></a></p>
              </template>
            </accordion-item>
          </div>
          <div class="cell large-4 medium-12 small-12">
            <accordion-item>
              <template slot="header">
                Header 2
              </template>
              <template slot="content">
                <p class="body-text1">header 2 content</p>
              </template>
            </accordion-item>
          </div>
          <div class="cell large-4 medium-12 small-12">
            <accordion-item>
              <template slot="header">
                Header 3
              </template>
              <template slot="content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex
                  ea commodo consequat.</p>
              </template>
            </accordion-item>
          </div>
        </div>

      </accordion>

      <div class="section-padding-100"></div>

      <p class="subhead5">Event Blinds:</p>

      <div class="section-padding-50"></div>

      <accordion closeAll class="event-blinds">
        <accordion-item>
          <template slot="header">
            <div class="grid-x">
              <div class="cell large-2 medium-4">
                <event-card
                  image="assets/images/upcoming-shows-card-image.png"
                  link="http://www.google.com"
                  :upcomingDates="[{month:'Feb',day:'27'},{month:'Feb',day:'28'},{month:'Mar',day:'1'}]"
                >
                </event-card>
              </div>
              <div class="cell large-auto medium-auto padding-2">
                <p class="body-text1 margin-bottom-2">Gil Shaham and Tchaikovsky's Fourth Symphony</p>
                <a class="button purple margin-right-1">Thus, May 10, 8pm</a> <a class="button purple margin-right-1">Thus,
                May 10, 8pm</a> <a class="button purple margin-right-1">Thus, May 10, 8pm</a>
              </div>
            </div>
          </template>
          <template slot="content">

            <div class="grid-x">
              <div class="cell large-2 medium-4">
                <div class="padding-1">
                  <p>more content</p>
                </div>
              </div>

              <div class="cell large-auto medium-auto padding-left-2">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aspernatur at earum eum eveniet ipsa
                  iste itaque iusto laborum, maxime minima modi necessitatibus nemo nihil odio quae sapiente sit
                  unde?</p>
              </div>
            </div>
          </template>
        </accordion-item>
      </accordion>

      <div class="section-padding-50"></div>

    </div>

  </div>
</template>
