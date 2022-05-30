<!-- Teamplate mobile -->
<template>
  <div class="layout">
    <header>
      <!-- <img class="header__img" src="../../public/img/smallLogo.png" alt="" /> -->
      <h3 class="header__heading">
        <router-link class="header__link" to="/"
          >Дзержинский психоневрологический интернат</router-link
        >
      </h3>
      <!-- burger -->
      <div class="header__btn burger">
        <button @click="toggleMenu" class="nav-toggle">
          <span class="bar-top"></span>
          <span class="bar-mid"></span>
          <span class="bar-bot"></span>
        </button>
      </div>
    </header>
    <SmallMenu class="small-menu" v-show="isMenuOpen" />
    <router-view class="context" />
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
  padding: 15px;
  margin-top: 75px;
}
</style>
