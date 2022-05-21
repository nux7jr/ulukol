<template>
  <div id="nav">
    <ul class="nav__list">
      <li class="nav__item">
        <router-link to="/price">Цены</router-link>
      </li>
      <li class="nav__item">
        <router-link to="/feedback">Обратная связь</router-link>
      </li>
      <li class="nav__item">
        <router-link to="/price">Some link</router-link>
      </li>
      <li class="nav__item">
        <router-link to="/price">Some link</router-link>
      </li>
      <li class="nav__item dropdown-placeholder">
        <button class="dropdownBtn" @click="toggleDropDown">
          Показать еще
        </button>
      </li>
    </ul>
    <transition name="fade">
      <div v-show="isDropDownActive" class="dropdown">
        <ul class="dropdown__list">
          <li class="dropdown__item">
            <router-link to="/price">Some link</router-link>
          </li>
          <li class="dropdown__item">
            <router-link to="/price">Some link</router-link>
          </li>
          <li class="dropdown__item">
            <router-link to="/price">Some link</router-link>
          </li>
          <li class="dropdown__item">
            <router-link to="/price">Some link</router-link>
          </li>
          <li class="dropdown__item">
            <router-link to="/price">Some link</router-link>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: "RightMenu",
  data() {
    return {
      isDropDownActive: false,
    };
  },
  methods: {
    toggleDropDown() {
      this.isDropDownActive = !this.isDropDownActive;
      const dropdownPlaceholder = document.querySelector(
        ".dropdown-placeholder"
      );
      dropdownPlaceholder.classList.toggle("dropdown-placeholder--active");
    },
  },
};
</script>
<style lang="scss">
#nav {
  background-color: #66c665;
  min-width: 180px;
  text-align: center;
  font-size: large;
  a {
    font-weight: 600;
    color: #ffffff;

    &.router-link-exact-active {
      color: #000000;
    }
  }
}
.nav__item,
.dropdown__item {
  padding: 20px;
  &:hover {
    background: #2c3e5054;
  }
}
.dropdownBtn {
  background-color: transparent;
  border: none;
  padding: 0;
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.dropdown-placeholder--active {
  background: #2c3e5054;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
