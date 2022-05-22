<template>
  <div id="nav">
    <ul class="nav__list">
      <li class="nav__item">
        <router-link to="/feedback">Обратная связь</router-link>
      </li>
      <li class="nav__item">
        <router-link to="/price">Охрана труда</router-link>
      </li>
      <li class="nav__item">
        <router-link to="/price">Документы</router-link>
      </li>
      <li class="nav__item">
        <router-link to="/price">Долговременный уход</router-link>
      </li>
      <li class="nav__item">
        <router-link to="/price">Структура учреждения</router-link>
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
            <router-link to="/price">Анти-коррупционная политика</router-link>
          </li>
          <li class="dropdown__item">
            <router-link to="/price"
              >Взаимодействие с волонтерскими организациями
            </router-link>
          </li>
          <li class="dropdown__item">
            <router-link to="/price"
              >Порядок приема и рассмотрения обращений
            </router-link>
          </li>
          <li class="dropdown__item">
            <router-link to="/price"
              >Отчеты директора об итогах деятельности</router-link
            >
          </li>
          <li class="dropdown__item">
            <router-link to="/price"
              >Предмет и цели деятельности учреждения</router-link
            >
          </li>
          <li class="dropdown__item">
            <router-link to="/price">Персональные данные</router-link>
          </li>
          <li class="dropdown__item">
            <router-link to="/price">Отзывы</router-link>
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
      // Закрытие меню
      const menuCloseArea = document.querySelector(".dropdown__list");
      const closeArea = document.querySelector(".context");
      const closeMenu = () => {
        if (this.isDropDownActive) {
          dropdownPlaceholder.classList.toggle("dropdown-placeholder--active");
          this.isDropDownActive = !this.isDropDownActive;
        }
      };
      closeArea.addEventListener("click", closeMenu);
      menuCloseArea.addEventListener("click", closeMenu);
    },
  },
};
</script>
<style lang="scss" scoped>
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
.dropdown {
  position: absolute;
  top: 202px;
  right: 182px;
  background-color: #66c665;
}
.nav__item,
.dropdown__item {
  width: 140px;
  padding: 20px;
  &:hover {
    background: #2c3e5054;
  }
}
.dropdownBtn {
  position: relative;
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
