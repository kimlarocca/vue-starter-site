<template>
  <div>

    <div class="container">
      <h1>category card</h1>
      <p class="subhead5 padding">
        <router-link to="/">&lt; back to style guide</router-link>
      </p>
      <div class="section-padding-50"></div>
      <p class="subhead5 padding">3x3 grid with square cards:</p>
    </div>

    <!--
    STYLES:
    "category-cards three": for the 3x3 grid option
    "category-cards two": for the 2x2 grid option
    add "square" to the classes for square cards (will be rectangular by default)

    PROPS:
    image: the card's background image
    title: will be displayed over the image
    category: will be displayed on desktop hover
    shortDescription: will be displayed on desktop hover
    learnMoreLink: the entire card will be clickable and point to this URL
    -->

    <div class="category-cards three square">
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

    <div class="section-padding-50"></div>

    <div class="container">
      <p class="subhead5 padding">3x3 grid with rectangular cards:</p>
    </div>

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

    <div class="section-padding-50"></div>

    <div class="container">
      <p class="subhead5 padding">3x3 grid with gutters:</p>
    </div>

    <div class="category-cards three container">
      <div class="grid-x grid-margin-x grid-margin-y">
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

    <div class="section-padding-100"></div>

    <div class="container">
      <p class="subhead5 padding">2x2 grid:</p>
    </div>

    <div class="category-cards two">
      <div class="grid-x">
        <div class="cell large-6 medium-6 small-12">
          <category-card
            image="assets/images/category-card-image.png"
            title="family"
            category="great performances"
            learnMoreLink="http://www.google.com"
          >
            <span slot="shortDescription" class="body-text2">Phenomenal artists perform with the SF symphony</span>
          </category-card>
        </div>
        <div class="cell large-6 medium-6 small-12">
          <category-card
            image="assets/images/category-card-image.png"
            title="family"
            category="great performances"
            learnMoreLink="http://www.google.com"
          >
            <span slot="shortDescription" class="body-text2">Phenomenal artists perform with the SF symphony</span>
          </category-card>
        </div>
        <div class="cell large-6 medium-6 small-12">
          <category-card
            image="assets/images/category-card-image.png"
            title="family"
            category="great performances"
            learnMoreLink="http://www.google.com"
          >
            <span slot="shortDescription" class="body-text2">Phenomenal artists perform with the SF symphony</span>
          </category-card>
        </div>
        <div class="cell large-6 medium-6 small-12">
          <category-card
            image="assets/images/category-card-image.png"
            title="family"
            category="great performances"
            learnMoreLink="http://www.google.com"
          >
            <span slot="shortDescription" class="body-text2">Phenomenal artists perform with the SF symphony</span>
          </category-card>
        </div>
        <div class="cell large-6 medium-6 small-12">
          <category-card
            image="assets/images/category-card-image.png"
            title="family"
            category="great performances"
            learnMoreLink="http://www.google.com"
          >
            <span slot="shortDescription" class="body-text2">Phenomenal artists perform with the SF symphony</span>
          </category-card>
        </div>
        <div class="cell large-6 medium-6 small-12">
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

    <div class="section-padding-100"></div>

    <div class="container">
      <p class="subhead5 padding">2x2 grid with square cards:</p>
    </div>

    <div class="category-cards square two">
      <div class="grid-x">
        <div class="cell large-6 medium-6 small-12">
          <category-card
            image="assets/images/category-card-image.png"
            title="family"
            category="great performances"
            learnMoreLink="http://www.google.com"
          >
            <span slot="shortDescription" class="body-text2">Phenomenal artists perform with the SF symphony</span>
          </category-card>
        </div>
        <div class="cell large-6 medium-6 small-12">
          <category-card
            image="assets/images/category-card-image.png"
            title="family"
            category="great performances"
            learnMoreLink="http://www.google.com"
          >
            <span slot="shortDescription" class="body-text2">Phenomenal artists perform with the SF symphony</span>
          </category-card>
        </div>
        <div class="cell large-6 medium-6 small-12">
          <category-card
            image="assets/images/category-card-image.png"
            title="family"
            category="great performances"
            learnMoreLink="http://www.google.com"
          >
            <span slot="shortDescription" class="body-text2">Phenomenal artists perform with the SF symphony</span>
          </category-card>
        </div>
        <div class="cell large-6 medium-6 small-12">
          <category-card
            image="assets/images/category-card-image.png"
            title="family"
            category="great performances"
            learnMoreLink="http://www.google.com"
          >
            <span slot="shortDescription" class="body-text2">Phenomenal artists perform with the SF symphony</span>
          </category-card>
        </div>
        <div class="cell large-6 medium-6 small-12">
          <category-card
            image="assets/images/category-card-image.png"
            title="family"
            category="great performances"
            learnMoreLink="http://www.google.com"
          >
            <span slot="shortDescription" class="body-text2">Phenomenal artists perform with the SF symphony</span>
          </category-card>
        </div>
        <div class="cell large-6 medium-6 small-12">
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

    <div class="section-padding-50"></div>

    <div class="container">
      <p class="subhead5 padding">2x2 grid with gutters:</p>
    </div>

    <div class="container">
      <div class="category-cards two">
        <div class="grid-x grid-margin-y grid-margin-x">
          <div class="cell large-6 medium-6 small-12">
            <category-card
              image="assets/images/category-card-image.png"
              title="family"
              category="great performances"
              learnMoreLink="http://www.google.com"
            >
              <span slot="shortDescription" class="body-text2">Phenomenal artists perform with the SF symphony</span>
            </category-card>
          </div>
          <div class="cell large-6 medium-6 small-12">
            <category-card
              image="assets/images/category-card-image.png"
              title="family"
              category="great performances"
              learnMoreLink="http://www.google.com"
            >
              <span slot="shortDescription" class="body-text2">Phenomenal artists perform with the SF symphony</span>
            </category-card>
          </div>
          <div class="cell large-6 medium-6 small-12">
            <category-card
              image="assets/images/category-card-image.png"
              title="family"
              category="great performances"
              learnMoreLink="http://www.google.com"
            >
              <span slot="shortDescription" class="body-text2">Phenomenal artists perform with the SF symphony</span>
            </category-card>
          </div>
          <div class="cell large-6 medium-6 small-12">
            <category-card
              image="assets/images/category-card-image.png"
              title="family"
              category="great performances"
              learnMoreLink="http://www.google.com"
            >
              <span slot="shortDescription" class="body-text2">Phenomenal artists perform with the SF symphony</span>
            </category-card>
          </div>
          <div class="cell large-6 medium-6 small-12">
            <category-card
              image="assets/images/category-card-image.png"
              title="family"
              category="great performances"
              learnMoreLink="http://www.google.com"
            >
              <span slot="shortDescription" class="body-text2">Phenomenal artists perform with the SF symphony</span>
            </category-card>
          </div>
          <div class="cell large-6 medium-6 small-12">
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
    </div>

  </div>
</template>
