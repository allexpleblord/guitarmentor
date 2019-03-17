<template>
  <div>
    <h1>Oh no you lost..</h1>
    <h2>Your score was {{ lastScore }}</h2>
    <button @click="$emit('restartGame')">Want to try again?</button>
  </div>
</template>

<script>
export default {
  props: {
    lastScore: Number
  }
};
</script>

<style></style>
