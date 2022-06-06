<!-- Teamplate mobile -->
<template>
  <div class="layout">
    <header>
      <h3 class="header__heading">
        <router-link class="header__link" to="/" @click="scrolltoTop"
          >Дзержинский психоневрологический интернат</router-link
        >
      </h3>
      <!-- burger -->
      <div class="header__btn burger">
        <button @click="toggleMenu" class="nav-toggle" aria-label="menu">
          <span class="bar-top"></span>
          <span class="bar-mid"></span>
          <span class="bar-bot"></span>
        </button>
      </div>
    </header>
    <SmallMenu class="small-menu" v-show="isMenuOpen" />
    <router-view class="context" />
    <footer>
      <div class="footer__info">
        <h3 class="footer__heading">
          <i> © 2015 - 2022 </i>КГБУ СО Дзержинский психоневрологический
          интернат
        </h3>
        <p class="footer__text">
          663713, Красноярский край, Дзержинский район, д.Улюколь, ул. Озерная,
          2
        </p>
        <div class="footer__adress">
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
          <img class="footer__img" src="@/assets/img/logo2.png" alt="" />
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import SmallMenu from "@/components/Menu/SmallMenu.vue";
export default {
  name: "MobileLayout",
  components: {
    SmallMenu,
  },
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      const toggle = document.querySelector(".nav-toggle");
      toggle.classList.toggle("opened");
      this.isMenuOpen = !this.isMenuOpen;
    },
    scrolltoTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
  watch: {
    "$route.path"() {
      this.isMenuOpen = false;
      const toggle = document.querySelector(".nav-toggle");
      toggle.classList.remove("opened");
    },
  },
};
</script>
<style lang="scss" scoped>
header {
  display: flex;
  height: 75px;

  position: fixed;
  top: 0;
  width: 100%;
  z-index: 5;

  background-color: #66c665;
}
.header__heading {
  margin: 15px 60px 10px 10px;
  line-height: 0.9em;
}
.header__link {
  color: white;
}

// burger menu(button)
.burger {
  display: block;
  position: absolute;
  top: 37px;
  right: 10px;
}
.nav-toggle {
  position: relative;
  padding: 10px;
  background: transparent;
  border: 1px solid transparent;
  margin: 0;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
}

.nav-toggle:focus {
  outline-width: 0;
}

.nav-toggle [class*="bar-"] {
  background: #ffffff;
  display: block;
  -webkit-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.2s ease all;
  transition: 0.2s ease all;

  border-radius: 8px;
  height: 2px;
  width: 33px;
  margin-bottom: 6px;
}

.nav-toggle .bar-bot {
  margin-bottom: 0;
}

.opened .bar-top {
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  -webkit-transform-origin: 15% 15%;
  transform-origin: 15% 15%;
}
.opened .bar-mid {
  opacity: 0;
}
.opened .bar-bot {
  -webkit-transform: rotate(45deg);
  transform: rotate(-45deg);
  -webkit-transform-origin: 15% 95%;
  transform-origin: 15% 95%;
}
.small-menu {
  position: fixed;
  top: 75px;
  width: 100%;
  z-index: 3;
}
.context {
  min-height: 90vh;
  padding: 15px;
  margin-top: 75px;
}
footer {
  background: rgba(46, 40, 40, 0.055);

  display: flex;
  justify-content: center;
}
.footer__info {
  margin: 15px;
  align-self: center;
}
.footer__heading {
  margin: 0;
  color: black;
}
.footer__text {
  color: #2c3e50;
}
.footer__adress {
  display: flex;
  gap: 20px;
}
address {
  margin-top: 10px;
}
.footer__img {
  width: 150px;
}
</style>
