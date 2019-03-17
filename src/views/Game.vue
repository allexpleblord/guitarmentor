<template>
  <div class="game-page">
    <!-- Game introduction screen -->
    <game-intro
      v-if="game.state === 'intro' && !game.active"
      @initGame="initGame"
    />

    <!-- Game active screen -->
    <game-active
      v-if="game.state === 'game' && game.active"
      @gameOver="gameOver"
    />

    <!-- Game over screen -->
    <game-over
      v-if="game.state === 'gameOver' && !game.active"
      :lastScore="game.lastScore"
      @restartGame="restartGame"
    />
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
.game-page {
  min-height: 100vh;
  display: grid;
  align-content: center;
  justify-content: center;
  background: url("../assets/background.svg") no-repeat center;
}
</style>
