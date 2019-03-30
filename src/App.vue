<template>
  <v-app>
    <!-- Navigation -->
    <v-toolbar app flat class="primary">
      <v-toolbar-side-icon
        @click="drawer = !drawer"
        class="ma-0 white--text"
      ></v-toolbar-side-icon>
      <v-toolbar-title class="white--text">
        <span>GUITAR</span>
        <span class="font-weight-light">MENTOR</span>
      </v-toolbar-title>
    </v-toolbar>

    <v-navigation-drawer temporary fixed v-model="drawer">
      <v-toolbar flat class="primary">
        <v-toolbar-title class="white--text">Menu</v-toolbar-title>
      </v-toolbar>
      <v-list>
        <v-list-tile v-for="link in links" :key="link.name" :to="link.route">
          <v-list-tile-action>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ link.name }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <!-- Main content -->
    <v-content class="pa-0">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      drawer: false,
      links: [
        { name: "Home", route: "/", icon: "home" },
        { name: "Game", route: "/game", icon: "games" },
        { name: "Chords", route: "/chords", icon: "view_list" },
        { name: "Songs", route: "/songs", icon: "library_music" }
      ],
      preload: [
        "https://i.ibb.co/zrnqq9Q/Gm.png",
        "https://i.ibb.co/3yJjFYy/G.png",
        "https://i.ibb.co/NCDzxSw/Fm.png",
        "https://i.ibb.co/jvyRj1R/F.png",
        "https://i.ibb.co/fFM8p3k/Em.png",
        "https://i.ibb.co/h1BfcXY/E.png",
        "https://i.ibb.co/chsHTRV/Dm.png",
        "https://i.ibb.co/jWcKHQk/D.png",
        "https://i.ibb.co/FhYFm8s/Cm.png",
        "https://i.ibb.co/C7ZSDFh/C.png",
        "https://i.ibb.co/2dV0gcV/Bm.png",
        "https://i.ibb.co/N9HGx5n/B.png",
        "https://i.ibb.co/kXgYxNt/A.png",
        "https://i.ibb.co/kJCJgvX/Am.png"
      ]
    };
  },
  mounted() {
    // Preload chord images
    var chords = [];
    for (let i = 0; i < this.preload.length; i++) {
      chords[i] = new Image();
      chords[i].src = this.preload[i];
    }
  }
};
</script>

<style lang="scss">
.line {
  line-height: 100%;
}
a {
  text-decoration: none;
}
button {
  outline: none;
  border: none;
}
.wow {
  visibility: hidden;
}
</style>
