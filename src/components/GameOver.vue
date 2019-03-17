<template>
  <div class="game-over text-xs-center">
    <h1 class="game-over__title mb-2">Oh no you lost..</h1>
    <h2 class="game-over__score mb-2 font-weight-light">
      Your score was:
      <span class="font-weight-regular">{{ lastScore }}</span>
    </h2>
    <button @click="$emit('restartGame')" class="game-over__restart primary">
      Want to try again?
    </button>
  </div>
</template>

<script>
export default {
  props: {
    lastScore: Number
  }
};
</script>

<style lang="scss" scoped>
.game-over {
  &__title {
    font-size: 3rem;
  }
  &__score {
    font-size: 2rem;
  }
  &__restart {
    font-size: 1.5rem;
    padding: 11px 20px;
    margin: 10px;
    border-radius: 6px;
    background: #7d53de;
    color: white;
    @media screen and (max-width: 968px) {
      padding: 9px 15px;
      font-size: 1rem;
      border-radius: 5px;
    }
  }
  @media screen and (max-width: 960px) {
    &__title {
      font-size: 2rem;
    }
    &__score {
      font-size: 1.5rem;
    }
  }
}
</style>
