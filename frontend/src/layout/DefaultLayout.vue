<!-- default desktop layout -->
<template>
  <div class="layout">
    <header>
      <div class="header__item">
        <router-link class="header__link" to="/"
          ><img
            class="header__logo"
            src="../../public/img/logonew2.png"
            alt="Logo"
        /></router-link>
        <h2 class="header__heading">
          Дзержинский психоневрологический интернат
        </h2>
      </div>
    </header>
    <div class="container">
      <LeftMenu />
      <router-view class="context" />
      <RightMenu />
    </div>
    <footer>
      <h2 class="footer__heading">some footer</h2>
    </footer>
  </div>
</template>

<script>
import LeftMenu from "@/layout/Menu/LeftMenu";
import RightMenu from "@/layout/Menu/RightMenu";
export default {
  name: "DefaultLayout",
  components: {
    RightMenu,
    LeftMenu,
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
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
  margin-top: 14px;
}
.header__btn {
  width: 30px;
  height: 30px;
  position: absolute;
  right: 5px;
  top: 75px;
  display: none;
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
</style>
