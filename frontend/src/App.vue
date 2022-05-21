<template>
  <header>
    <!-- <a href="#">
      <img class="header__logo" src="../public/img/logo.png" alt="logo" />
    </a> -->
    <div class="header__item">
      <img class="header__logo" src="../public/img/logonew2.png" alt="" />
      <h2 class="header__heading">Дзержинский психоневрологический интернат</h2>
    </div>

    <!-- <button class="header__btn btnChangeMenu">X</button> -->
  </header>
  <div class="container">
    <LeftMenu />
    <router-view class="context" />
    <RightMenu />
  </div>
  <footer>
    <h2 class="footer__heading">some footer</h2>
  </footer>
</template>

<script>
import LeftMenu from "@/layout/Menu/LeftMenu";
import RightMenu from "@/layout/Menu/RightMenu";
import SmallMenu from "@/layout/Menu/SmallMenu";
export default {
  name: "Layout",
  components: {
    RightMenu,
    LeftMenu,
    SmallMenu,
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss">
#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
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
header {
  background: rgba(46, 40, 40, 0.055);
  display: flex;
  text-align: center;
  justify-content: center;
  margin: 0;
  padding: 0;
}
.header__heading {
  color: #000;
}
.header__logo {
  width: 340px;
  // height: 140px;
  margin-top: 14px;
}
.header__btn {
  width: 30px;
  height: 30px;
}
.container {
  display: flex;
}
.context {
  flex-grow: 1;
  min-height: 90vh;
  min-width: 10px;
  padding: 15px;
}
footer {
  background: rgba(46, 40, 40, 0.055);
  height: 80px;
}
.footer__heading {
  margin: 0;
}
@media (max-width: 1199.98px) {
  #nav {
    display: none;
  }
}
</style>
