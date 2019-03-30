<template>
  <div class="home">
    <!-- Header -->
    <header class="header">
      <h1 class="header__title mb-3 text-xs-center line wow zoomIn">
        Guitarmentor
      </h1>
      <p
        class="header__subtitle font-weight-light text-xs-center wow fadeInUp"
        data-wow-delay="300ms"
      >
        Learn to play guitar chords with ease
      </p>
      <div class="header__buttons mt-2 wow fadeInUp" data-wow-delay="700ms">
        <router-link to="/game" v-ripple class="button">
          PLAY THE GAME
        </router-link>
        <router-link to="/chords" v-ripple class="button outlined">
          VIEW CHORDS
        </router-link>
      </div>
    </header>

    <!-- Content -->
    <div class="section">
      <h2 class="section__title text-xs-center font-weight-medium">
        About Guitarmentor
      </h2>
      <p class="section__body">
        Guitarmentor is a web application made for people who want to learn the
        guitar chords in a fun and enjoyable way. You can find all the chords
        listed on a page, a game for learning the chords and songs where you can
        put the chords to use.
      </p>
    </div>
    <div class="section">
      <h2 class="section__title text-xs-center font-weight-medium">
        How does this work?
      </h2>
      <p class="section__body">
        You can visit the chords page where you will find all the chords neatly
        presented. Once you have learnt them and want to put your skill to the
        test, you can visit the game where you will have to pick the
        corresponding name of the chord shown to you.
      </p>
      <p class="section__body">
        If you want to learn some songs with the chords you learnt then you can
        visit the songs page where you will find a variety of songs that you can
        start playing on your guitar, right now!
      </p>
    </div>
    <div class="section">
      <h2 class="section__title text-xs-center font-weight-medium">
        Contribution
      </h2>
      <p class="section__body">
        Guitarmentor is created with VueJS and is still under development. It is
        open source so everyone can contribute on
        <a
          href="https://github.com/allexpleblord/guitar-vue-app"
          target="_blank"
          >GitHub</a
        >. If you have any enquiries you can email me
        <a href="mailto:contact_allex@yahoo.com" target="_top">here</a>.
      </p>
    </div>
    <div style="height: 10vh;"></div>
  </div>
</template>

<style lang="scss" scoped>
// Header
.header {
  height: 100vh;
  background: url("../assets/background.svg") no-repeat center;
  display: grid;
  justify-content: center;
  align-content: center;
  &__title {
    font-size: 6rem;
  }
  &__subtitle {
    font-size: 1.75rem;
  }
  &__buttons {
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    @media screen and (max-width: 359px) {
      grid-template-columns: 1fr;
    }
    .button {
      text-align: center;
      font-size: 1.5rem;
      padding: 13px 25px;
      margin: 5px 15px;
      border-radius: 7px;
      background: #7d53de;
      color: white;
      &.outlined {
        padding: 11px 25px;
        border: 2px solid #7d53de;
        color: #7d53de;
        background: transparent;
      }
    }
  }
  // Responsiveness
  @media screen and (max-width: 960px) {
    &__title {
      font-size: 3.5rem;
    }
    &__subtitle {
      font-size: 1.5rem;
    }
    .button {
      padding: 10px 20px;
      margin: 5px 10px;
      font-size: 1rem;
      &.outlined {
        padding: 8px 25px;
      }
    }
  }
}

// Content
.section {
  padding: 5vh 0;
  display: grid;
  justify-content: center;
  &__title {
    font-size: 2.5rem;
    padding-bottom: 3vh;
    color: #383838;
  }
  &__body {
    max-width: 650px;
    font-size: 1.55rem;
    color: #5e5e5e;
    a {
      color: #4280ca;
    }
  }
  @media screen and (max-width: 968px) {
    &__title {
      font-size: 2rem;
    }
    &__body {
      font-size: 1.25rem;
      padding: 0 15px;
    }
  }
}
</style>
