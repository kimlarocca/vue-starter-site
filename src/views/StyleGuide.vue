<template>
  <div id="app" class="style-guide">
    <div class="container">
      <div class="gray-container">
        <div class="grid-x grid-margin-x grid-margin-y align-middle">
          <div class="cell large-2 medium-3">
            <h3>TeamLogic</h3>
          </div>
          <div class="cell large-2 medium-3">
            <p class="margin-0">Pattern Library</p>
          </div>
          <div class="cell auto large-text-right medium-text-right">
            <p class="margin-0"><a href="#layouts">layouts</a> | <a href="#components">components</a></p>
          </div>
        </div>
      </div>

      <section class="section-border">
        <h1>H1 Headline No. 1</h1>
        <h2>H2 Headline No. 2</h2>
        <h3>H3 Headline No. 3</h3>
        <h4>H4 Headline No. 4</h4>
        <h5>H5 Headline No. 5</h5>
        <h6>H6 Headline No. 6</h6>
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
        <p class="like-h3">Colors</p>
        <div class="grid-x grid-margin-x colors">
          <div class="cell auto bg-primary"><span>$primary .bg-primary</span></div>
          <div class="cell auto bg-secondary"><span>$secondary .bg-secondary</span></div>
          <div class="cell auto bg-tertiary"><span>$tertiary .bg-tertiary</span></div>
          <div class="cell auto bg-quaternary"><span>$quaternary .bg-quaternary</span></div>
        </div>
        <div class="grid-x grid-margin-x colors">
          <div class="cell auto bg-light-gray"><span>$light-gray .bg-light-gray</span></div>
          <div class="cell auto bg-medium-gray"><span>$medium-gray .bg-medium-gray</span></div>
          <div class="cell auto bg-dark-gray"><span>$dark-gray .bg-dark-gray</span></div>
        </div>
      </section>

      <section class="section-border">
        <p class="like-h3">Buttons</p>
        <p>.button | .button .ghost</p>
        <p><a class="button">learn more</a></p>
        <div class="bg-black padding-2">
          <p><a class="button ghost">learn more</a></p>
        </div>
      </section>

      <h2 class="section-padding-50" id="layouts">layouts and examples</h2>

      <p>coming soon</p>

      <h2 class="section-padding-50" id="components">components</h2>

      <p>coming soon</p>

      <div class="section-padding-50"></div>

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

    .section-border {
      margin-bottom: 60px;
      padding-left: 38px;
      border-left: solid 2px #0095da;
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
