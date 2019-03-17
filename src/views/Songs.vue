<template>
  <div class="songs pa-3">
    <h1 class="songs__title">This page is still under development</h1>
    <p class="songs__body">You can contribute to this page on <a href="https://github.com/allexpleblord/guitar-vue-app" class="songs__link" target="_blank">GitHub</a>.</p>
  </div>
</template>

<style lang="scss" scoped>
.songs {
  height: 100vh;
  display: grid;
  align-content: center;
  justify-content: center;
  &__title {
    font-size: 3rem;
  }
  &__body {
    font-size: 1.5rem;
  }
  &__link {
    color: #4280ca;
  }
  @media screen and (max-width: 960px) {
    &__title {
      font-size: 2rem;
    }
    &__body {
      font-size: 1.25rem;
    }
  }
}
</style>
