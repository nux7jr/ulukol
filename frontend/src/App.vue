<template>
  <DefaultLayout v-if="layouts.desktop > 1200" />
  <MobileLayout v-else />
</template>

<script>
import DefaultLayout from "@/layout/DefaultLayout";
import MobileLayout from "@/layout/MobileLayout";
export default {
  name: "App",
  components: {
    DefaultLayout,
    MobileLayout,
  },
  data() {
    return {
      width: window.innerWidth,
      layouts: {
        desktop: window.innerWidth,
      },
    };
  },
  methods: {
    updateWidth() {
      this.width = window.innerWidth;
      if (this.width < 1200) {
        this.layouts.desktop = window.innerWidth;
      } else {
        this.layouts.desktop = window.innerWidth;
      }
    },
  },
  created() {
    window.addEventListener("resize", this.updateWidth);
  },
};
</script>
<style lang="scss">
#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
body {
  padding: 0;
  margin: 0;
}
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  border: 0;
  clip: rect(0 0 0 0);
}
ul,
li {
  margin: 0;
  padding: 0;
  list-style: none;
}
a {
  text-decoration: none;
}
img {
  width: 100%;
  height: auto;
}
</style>
