import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Game from "./views/Game.vue";
import Chords from "./views/Chords.vue";
import Songs from "./views/Songs.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/game",
      name: "game",
      component: Game
      // component: () =>
      //   import(/* webpackChunkName: "about" */ "./views/Game.vue")
    },
    {
      path: "/chords",
      name: "chords",
      component: Chords
    },
    {
      path: "/songs",
      name: "songs",
      component: Songs
    }
  ]
});
