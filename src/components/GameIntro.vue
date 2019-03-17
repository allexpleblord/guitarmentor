<template>
  <div class="intro text-xs-center">
    <h1 class="intro__title">THE CHORD GAME</h1>
    <p class="intro__body font-weight-light pa-2 ma-0">
      You will have to pick the corresponding chord to the one you see on the
      screen.
    </p>
    <button id="startButton" v-ripple @click="$emit('initGame')">
      NEW GAME
    </button>
  </div>
</template>

<style lang="scss" scoped>
#startButton {
  justify-self: center;
  text-align: center;
  font-size: 1.5rem;
  padding: 11px 30px;
  margin: 10px;
  border-radius: 6px;
  background: #7d53de;
  color: white;
  @media screen and (max-width: 968px) {
    padding: 9px 20px;
    font-size: 1rem;
    border-radius: 5px;
  }
}
</style>
