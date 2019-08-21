<template>
  <div>

    <div class="container">
      <h1>about page example</h1>
      <p class="subhead5 padding">
        <router-link to="/">&lt; back to style guide</router-link>
      </p>
      <div class="section-padding-100"></div>
    </div>

    <hero class="small-header" image="assets/images/hero3.jpg" accentColor="#f37930">
      <p slot="preheader" class="subhead5">we are a non-profit organization</p>
      <span slot="header">Devoted to<br></span>
      <span slot="colorHeader">music education for everybody</span>
    </hero>

    <div class="section-padding-100"></div>

    <section>
      <div class="container">
        <h2 class="subhead1 text-center small-text-left">who we are</h2>
        <div class="grid-x grid-margin-x grid-margin-y section-padding-50">
          <div class="cell large-6 medium-6 small-12">
            <div class="margin-bottom-2"><img src="../assets/images/who-we-are-image.jpg" alt="MTT"></div>
            <p class="subhead6">lorem ipsum dolor</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, aspernatur assumenda eius eveniet
              omnis quia similique. Ab id impedit inventore quaerat quasi quisquam soluta, voluptatibus. Natus nihil
              perspiciatis soluta ut.</p>
            <p><a :href="learnMoreLink" class="learn-more">learn more</a></p>
          </div>
          <div class="cell large-6 medium-6 small-12">
            <div class="margin-bottom-2"><img src="../assets/images/who-we-are-image.jpg" alt="MTT"></div>
            <p class="subhead6">lorem ipsum dolor</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, aspernatur assumenda eius eveniet
              omnis quia similique. Ab id impedit inventore quaerat quasi quisquam soluta, voluptatibus. Natus nihil
              perspiciatis soluta ut.</p>
            <p><a :href="learnMoreLink" class="learn-more">learn more</a></p>
          </div>
        </div>
      </div>
    </section>

    <div class="section-padding-50"></div>

    <hr class="margin-0">

    <div class="section-padding-100"></div>

    <div class="category-cards three container">
      <div class="grid-x grid-margin-x grid-margin-y">
        <div class="cell large-4 medium-6 small-12">
          <category-card
            image="assets/images/category-card-image.png"
            title="family"
            category="performances"
            learnMoreLink="http://www.google.com"
          >
            <span slot="shortDescription" class="body-text2">Phenomenal artists perform</span>
          </category-card>
        </div>
        <div class="cell large-4 medium-6 small-12">
          <category-card
            image="assets/images/category-card-image.png"
            title="family"
            category="performances"
            learnMoreLink="http://www.google.com"
          >
            <span slot="shortDescription" class="body-text2">Phenomenal artists perform</span>
          </category-card>
        </div>
        <div class="cell large-4 medium-6 small-12">
          <category-card
            image="assets/images/category-card-image.png"
            title="family"
            category="performances"
            learnMoreLink="http://www.google.com"
          >
            <span slot="shortDescription" class="body-text2">Phenomenal artists perform</span>
          </category-card>
        </div>
        <div class="cell large-4 medium-6 small-12">
          <category-card
            image="assets/images/category-card-image.png"
            title="family"
            category="performances"
            learnMoreLink="http://www.google.com"
          >
            <span slot="shortDescription" class="body-text2">Phenomenal artists perform</span>
          </category-card>
        </div>
        <div class="cell large-4 medium-6 small-12">
          <category-card
            image="assets/images/category-card-image.png"
            title="family"
            category="performances"
            learnMoreLink="http://www.google.com"
          >
            <span slot="shortDescription" class="body-text2">Phenomenal artists perform</span>
          </category-card>
        </div>
        <div class="cell large-4 medium-6 small-12">
          <category-card
            image="assets/images/category-card-image.png"
            title="family"
            category="performances"
            learnMoreLink="http://www.google.com"
          >
            <span slot="shortDescription" class="body-text2">Phenomenal artists perform</span>
          </category-card>
        </div>
      </div>
    </div>

    <div class="section-padding-100"></div>

    <section class="bg-medium-gray">
      <announcement-callout backgroundColor="gray">
        <span slot="title" class="body-text1">Support education in music</span>
        <span slot="description" class="body-text3">You can help a child get an instrument or an entire class see a performance live, your contribution is critical.</span>
        <a class="button blue" slot="cta1" href="#">make a gift</a>
      </announcement-callout>
    </section>

    <div class="section-padding-100"></div>

    <section>
      <div class="container">
        <h2 class="subhead1 text-center small-text-left">over 100 years of music for all</h2>
        <div class="category-cards two section-padding-50">
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
          </div>
        </div>
      </div>
    </section>

    <section class="section-padding-100">
      <div class="container">
        <h2 class="subhead1 text-center small-text-left">join us</h2>
        <div class="grid-x grid-margin-x grid-margin-y section-padding-50">
          <div class="cell large-4 medium-4 small-12">
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
          <div class="cell large-4 medium-4 small-12">
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
          <div class="cell large-4 medium-4 small-12">
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
      </div>
    </section>

    <div class="section-padding-100"></div>

    <section class="bg-light-gray">
      <div class="container">
        <div class="grid-x grid-margin-2x grid-margin-y section-padding-50">
          <div class="cell large-4 medium-4 small-12">
            <i class="fas fa-camera fa-3x text-brown margin-bottom-1"></i>
            <p><strong>Lorem Ipsum</strong></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab assumenda consequatur corporis earum
              quibusdam! Aliquam assumenda deleniti.</p>
            <p class="subhead5 caret-right"><a :href="learnMoreLink" class="learn-more">learn more</a></p>
          </div>
          <div class="cell large-4 medium-4 small-12">
            <i class="fas fa-camera fa-3x text-brown margin-bottom-1"></i>
            <p><strong>Lorem Ipsum</strong></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <p class="subhead5 caret-right"><a :href="learnMoreLink" class="learn-more">learn more</a></p>
          </div>
          <div class="cell large-4 medium-4 small-12">
            <i class="fas fa-camera fa-3x text-brown margin-bottom-1"></i>
            <p><strong>Lorem Ipsum</strong></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab assumenda consequatur corporis earum
              quibusdam! Aliquam assumenda deleniti.</p>
            <p class="subhead5 caret-right"><a :href="learnMoreLink" class="learn-more">learn more</a></p>
          </div>
        </div>
      </div>
    </section>

    <div class="section-padding-100"></div>

  </div>
</template>
