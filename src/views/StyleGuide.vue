<template>
  <div id="app" class="style-guide">
    <div class="container">
      <div class="white-container">
        <img src="../../static/images/logo-bw.png" alt="san francisco symphony logo">
        <p class="subhead6">pattern library</p>
      </div>

      <section>
        <h1>H1 Headline No. 1</h1>
        <h2>H2 Headline No. 2</h2>
        <h3>H3 Headline No. 3</h3>
      </section>

      <section>
        <p class="subhead1">.subhead4 Subhead No. 1</p>
        <p class="subhead2">.subhead4 Subhead No. 2</p>
        <p class="subhead3">.subhead4 Subhead No. 3</p>
        <p class="subhead4">.subhead4 Subhead No. 4</p>
        <p class="subhead5">.subhead4 Subhead No. 5</p>
        <p class="subhead6">.subhead4 Subhead No. 6</p>
      </section>

      <section>
        <p class="bodytext1">.bodytext1 Body Text No. 1</p>
        <p class="bodytext2">.bodytext2 Body Text No. 1</p>
        <p class="bodytext3">.bodytext3 Body Text No. 1</p>
        <p class="bodytext4">.bodytext4 Body Text No. 1</p>
      </section>

      <section>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p><a>This is an inline link</a></p>
      </section>

      <section>
        <p class="subhead5">Buttons</p>
        <div class="black-container">
          <a class="button">view tickets</a>
          <a class="button ghost">browse concerts</a>
        </div>
        <a class="button gray">learn more</a>
        <a class="button blue">buy tickets</a>
      </section>

      <p class="subhead5">Hero Component: <router-link to="/Hero">see examples</router-link></p>

    </div>

    <hero class="large" image="/static/images/hero1.jpg" accentColor="#ff8f2a">
      <span slot="header">Beethoven<br>Stravinsky<br>Maher<br></span>
      <span slot="colorHeader">and more!</span>
      <p slot="subheader" class="subhead4">2019 Season Now Available</p>
      <a class="button" slot="cta1">View Tickets</a>
      <a class="button ghost" slot="cta2">Browse Concerts</a>
    </hero>

  </div>
</template>

<style scoped lang="scss">
  .style-guide {
    background: #f5f3f3;

    .white-container {
      background: white;
      padding: 20px;
      margin-bottom: 60px;
    }

    .black-container {
      background: black;
      padding: 20px;
      margin-bottom: 60px;
    }

    section {
      margin-bottom: 60px;
      padding-left: 38px;
      border-left: solid 2px #ffc373;
    }

    .button {
      margin-right: 2rem;
    }
  }
</style>
