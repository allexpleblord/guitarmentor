<template>
  <div class="game">
    <h1 class="game__title text-uppercase text-xs-center mb-2">
      Which chord is this?
    </h1>
    <h2 class="game__socre text-uppercase text-xs-center mb-3">
      Score: {{ score }}
    </h2>

    <div class="game-grid wow zoomIn" data-wow-duration="700ms">
      <img :src="correctChord.image" class="game-image" />
      <div class="game-controls">
        <button
          v-ripple
          :class="`game-button ${button.name}`"
          v-for="button in buttons"
          :key="button.name"
          @click="buttonClick(button.correct, button.name)"
        >
          {{ button.name }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      score: 0,
      buttons: [],
      correctChord: {},
      chords: [
        { name: "A", image: "https://i.ibb.co/kXgYxNt/A.png" },
        { name: "Am", image: "https://i.ibb.co/kJCJgvX/Am.png" },
        { name: "B", image: "https://i.ibb.co/N9HGx5n/B.png" },
        { name: "Bm", image: "https://i.ibb.co/2dV0gcV/Bm.png" },
        { name: "C", image: "https://i.ibb.co/C7ZSDFh/C.png" },
        { name: "Cm", image: "https://i.ibb.co/FhYFm8s/Cm.png" },
        { name: "D", image: "https://i.ibb.co/jWcKHQk/D.png" },
        { name: "Dm", image: "https://i.ibb.co/chsHTRV/Dm.png" },
        { name: "E", image: "https://i.ibb.co/h1BfcXY/E.png" },
        { name: "Em", image: "https://i.ibb.co/fFM8p3k/Em.png" },
        { name: "F", image: "https://i.ibb.co/jvyRj1R/F.png" },
        { name: "Fm", image: "https://i.ibb.co/NCDzxSw/Fm.png" },
        { name: "G", image: "https://i.ibb.co/3yJjFYy/G.png" },
        { name: "Gm", image: "https://i.ibb.co/zrnqq9Q/Gm.png" }
      ]
    };
  },
  methods: {
    getChords() {
      // Get 3 random chords
      let chords = new Set();
      while (chords.size < 3) {
        // Add a random chord
        let index = Math.floor(Math.random() * this.chords.length);
        chords.add(this.chords[index]);

        // Check for duplicates
        if (chords.has(this.correctChord)) {
          chords.delete(this.correctChord);
        }
      }

      // Return an array of those
      return Array.from(chords);
    },
    gameIteration() {
      // Get 3 random chords
      let chords = this.getChords();

      // Pick a correct chord and set it
      let correctChord = chords[Math.floor(Math.random() * chords.length)];
      this.correctChord = correctChord;

      // Make buttons and set them
      let buttons = [];
      chords.forEach(chord => {
        // If the current chord is the correct chord
        let correct = false;
        if (chord === this.correctChord) {
          correct = true;
        }
        // Push an object with the needed properties
        buttons.push({
          name: chord.name,
          correct: correct
        });
      });
      this.buttons = buttons;
    },
    // Handle correct and incorrect guesses
    buttonClick(correct, button) {
      // Get the button element that is calilng the function
      let btn = document.querySelector(`.${button}`);

      // Check if correct or not
      if (correct) {
        btn.classList.add("success");
        this.score++;
        setTimeout(() => {
          btn.classList.remove("success");
          this.gameIteration();
        }, 400);
      } else {
        btn.classList.add("error");
        setTimeout(() => {
          btn.classList.remove("error");
          this.$emit("gameOver", this.score);
        }, 400);
      }
    }
  },
  mounted() {
    this.gameIteration();
  }
};
</script>

<style lang="scss" scoped>
// Game container
.game {
  &__title {
    font-size: 2.5rem;
  }
  @media screen and (max-width: 960px) {
    margin-top: 50px;
    &__title {
      font-size: 2rem;
    }
  }
}

// Game grid, controls go in here too
.game-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 35px;
  .game-image {
    height: 275px;
    justify-self: center;
  }
  .game-controls {
    display: grid;
    align-content: center;
    .game-button {
      margin: 15px 0;
      border-radius: 6px;
      font-size: 1.2rem;
      width: 100%;
      height: 40px;
      color: white;
      transition: 200ms ease-in-out;
      background-color: #7d53de;
    }
  }
}
@media screen and (max-width: 968px) {
  .game-grid {
    grid-template-columns: 1fr;
    grid-gap: 0;
    .game-image {
      height: 200px;
    }
    .game-controls {
      justify-items: center;
      .game-button {
        margin: 5px 0;
        max-width: 200px;
        height: 35px;
        font-size: 1rem;
      }
    }
  }
}
</style>
