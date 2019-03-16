<template>
  <div class="chords">
    <!-- Just some spacing -->
    <div style="height: 20vh;"></div>

    <!-- Introduction text -->
    <div class="intro text-xs-center">
      <h1 class="intro__title">Chords</h1>
      <p class="intro__body font-weight-light pa-2">
        This section includes some of the most common chords. You don't know how
        to read the chords? Here is an awesome
        <a
          href="https://www.libertyparkmusic.com/read-guitar-chord-diagrams/"
          target="_blank"
          >guide</a
        >
        for you.
      </p>
    </div>

    <!-- Chords grid -->
    <div class="chord-grid">
      <div class="chord wow zoomIn" v-for="chord in chords" :key="chord.name">
        <h1 class="chord__title line">{{ chord.name }}</h1>
        <img :src="chord.image" class="chord__image">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chords: [
        { name: "A", image: 'https://i.ibb.co/kXgYxNt/A.png'},
        { name: "Am", image: 'https://i.ibb.co/kJCJgvX/Am.png'},
        { name: "B", image: 'https://i.ibb.co/N9HGx5n/B.png'},
        { name: "Bm", image: 'https://i.ibb.co/2dV0gcV/Bm.png'},
        { name: "C", image: 'https://i.ibb.co/C7ZSDFh/C.png'},
        { name: "Cm", image: 'https://i.ibb.co/FhYFm8s/Cm.png'},
        { name: "D", image: 'https://i.ibb.co/jWcKHQk/D.png'},
        { name: "Dm", image: 'https://i.ibb.co/chsHTRV/Dm.png'},
        { name: "E", image: 'https://i.ibb.co/h1BfcXY/E.png'},
        { name: "Em", image: 'https://i.ibb.co/fFM8p3k/Em.png'},
        { name: "F", image: 'https://i.ibb.co/jvyRj1R/F.png'},
        { name: "Fm", image: 'https://i.ibb.co/NCDzxSw/Fm.png'},
        { name: "G", image: 'https://i.ibb.co/3yJjFYy/G.png'},
        { name: "Gm", image: 'https://i.ibb.co/zrnqq9Q/Gm.png'}
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
// Introduction text
.intro {
  display: grid;
  justify-content: center;
  &__title {
    font-size: 3rem;
  }
  &__body {
    max-width: 700px;
    font-size: 1.5rem;
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
    }
  }
}

// Chords grid
.chord-grid {
  margin: 5vh auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1200px;
  .chord {
    padding: 25px;
    &__title {
      color: #5e5e5e;
      font-size: 3rem;
      text-align: center;
    }
  }
}
</style>
