<!-- default desktop layout -->
<template>
  <div class="layout">
    <header>
      <div class="header__item">
        <router-link class="header__link" to="/"
          ><img class="header__logo" src="@/assets/img/bigLogo.png" alt="Logo"
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
        <address>
          <div class="phone footer__text">
            <a href="tel:+7391690246" class="footer__text"
              >Тел.: (39167) 9-02-46</a
            >
          </div>
          <a class="footer__text" href="mailto:ulukol@mail.ru"
            >ulukol@mail.ru</a
          >
        </address>
      </div>
      <div class="footer__links">
        <div class="footer__img">
          <a href="https://szn24.ru/" target="_blank">
            <img src="@/assets/img/footer/soc_kras.png" alt="Соц политика" />
          </a>
        </div>
        <div class="footer__img">
          <a href="http://www.krskstate.ru/" target="_blank">
            <img
              src="@/assets/img/footer/kras_portal.png"
              alt="Красноярский портал"
            />
          </a>
        </div>
        <div class="footer__img">
          <a href="https://bus.gov.ru/pub/home" target="_blank">
            <img
              src="@/assets/img/footer/bus_gov.png"
              alt="Красноярский портал"
            />
          </a>
        </div>
        <div class="footer__img">
          <a
            href="https://zakupki.gov.ru/epz/main/public/home.html"
            target="_blank"
          >
            <img src="@/assets/img/footer/zakup.png" alt="Закупки" />
          </a>
        </div>
        <div class="footer__img">
          <a href="https://gosuslugi.krskstate.ru/" target="_blank">
            <img src="@/assets/img/footer/reg_usl.png" alt="Услуги" />
          </a>
        </div>
        <div class="footer__img">
          <a href="http://kartadostupnosti.ru/" target="_blank">
            <img
              src="@/assets/img/footer/kart_dost.png"
              alt="Карта доступности"
            />
          </a>
        </div>
        <div class="footer__img">
          <a href="https://24reg.roszdravnadzor.gov.ru/" target="_blank">
            <img src="@/assets/img/footer/rzn.jpg" alt="РЗН" />
          </a>
        </div>
        <div class="footer__img">
          <a href="https://24.mchs.gov.ru/" target="_blank">
            <img src="@/assets/img/footer/mhs.jpg" alt="МСЧ" />
          </a>
        </div>
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
  justify-content: center;
  gap: 20px;
}
.footer__info {
  align-self: center;
}
.footer__heading {
  margin: 0;
  color: black;
}
.footer__text {
  color: #2c3e50;
}
.footer__links {
  margin: 30px 0;
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr 1fr 1fr;
}
.footer__img {
  width: 160px;
  height: 43px;
}
</style>
