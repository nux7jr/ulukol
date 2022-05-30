<!-- default desktop layout -->
<template>
  <div class="layout">
    <header>
      <div class="header__item">
        <router-link class="header__link" to="/"
          ><img
            class="header__logo"
            src="../../public/img/bigLogo.png"
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
      <div class="footer__info">
        <h3 class="footer__heading">
          © 2015 - 2022 КГБУ СО Дзержинский психоневрологический интернат
        </h3>
        <p class="footer__text">
          663713, Красноярский край, Дзержинский район, д.Улюколь, ул. Озерная,
          2
        </p>
        <p class="footer__text">Тел.: (39167) 9-02-46</p>
        <p class="footer__text">ulukol@mail.ru</p>
      </div>
      <div class="footer__links">
        <h3 class="footer__heading">
          © 2015 - 2022 КГБУ СО Дзержинский психоневрологический интернат
        </h3>
        <p class="footer__text">
          663713, Красноярский край, Дзержинский район, д.Улюколь, ул. Озерная,
          2
        </p>
        <p class="footer__text">Тел.: (39167) 9-02-46</p>
        <p class="footer__text">ulukol@mail.ru</p>
      </div>
    </footer>
  </div>
</template>

<script>
import LeftMenu from "@/components/Menu/LeftMenu";
import RightMenu from "@/components/Menu/RightMenu";
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
  padding: 15px;
}
footer {
  background: rgba(46, 40, 40, 0.055);
  display: flex;
  // height: auto;
}
.footer__heading {
  margin: 0;
  color: black;
}
</style>
