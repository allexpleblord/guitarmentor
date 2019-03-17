<template>
  <div class="game-page">
    <transition name="slide" mode="out-in">
      <!-- Game introduction screen -->
      <game-intro
        key="intro"
        v-if="game.state === 'intro' && !game.active"
        @initGame="initGame"
      />
      <!-- Game active screen -->
      <game-active
        key="active"
        v-if="game.state === 'game' && game.active"
        @gameOver="gameOver"
      />
      <!-- Game over screen -->
      <game-over
        key="over"
        v-if="game.state === 'gameOver' && !game.active"
        :lastScore="game.lastScore"
        @restartGame="restartGame"
      />
    </transition>
  </div>
</template>

<script>
import GameIntro from "../components/GameIntro";
import GameActive from "../components/GameActive";
import GameOver from "../components/GameOver";

export default {
  components: {
    GameIntro,
    GameActive,
    GameOver
  },
  data() {
    return {
      game: {
        state: "intro",
        active: false,
        lastScore: 0
      }
    };
  },
  methods: {
    initGame() {
      this.game.active = true;
      this.game.state = "game";
    },
    gameOver(score) {
      this.game.lastScore = score;
      this.game.active = false;
      this.game.state = "gameOver";
    },
    restartGame() {
      this.game.active = true;
      this.game.state = "game";
    }
  }
};
</script>

<style lang="scss" scoped>
// Transition
.slide-enter-active {
  transition: all 0.3s ease;
}
.slide-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-enter,
.slide-leave-to {
  transform: translateX(10px);
  opacity: 0;
}

// Whole page
.game-page {
  min-height: 100vh;
  display: grid;
  align-content: center;
  justify-content: center;
  background: url("../assets/background.svg") no-repeat center;
}
</style>
