<template>
  <section class="hero" :style="{ backgroundImage: `url('${image}')` }">
    <div class="container">
      <div class="content">
        <div>
          <h1>
            <slot name="header"></slot>
            <br>
            <span :style="{ color: accentColor }"><slot name="subheader"></slot></span>
          </h1>
          <p><slot name="paragraph"></slot></p>
          <a class="button" href="#">view tickets 9</a>
          <a class="button ghost" href="#">browse concerts</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Hero',
    props: ['image', 'accentColor']
  }
</script>

<style scoped lang="scss">
  .hero {
    height: 900px;
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;

    h1 {
      color: white;
    }

    p {
      color: white;
      font-size: 1.375rem;
      line-height: 1.75rem;
      margin-bottom: 3.75rem;
    }

    .container {
      display: flex;

      &.center {
        justify-content: center;
      }

      &.right {
        justify-content: flex-end;
      }
    }

    .content {
      display: flex;
      text-align: left;
      border-left: solid 1px white;
      padding: 0 0 20px 32px;
      align-self: flex-start;

      &.right {
        align-self: flex-end;
      }

      .button {
        margin-right: 16px;
      }
    }
  }
</style>
