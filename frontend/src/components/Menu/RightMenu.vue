<template>
  <div id="nav">
    <ul class="nav__list">
      <li class="nav__item">
        <router-link to="/feedback">Обратная связь</router-link>
      </li>
      <li class="nav__item">
        <router-link to="/security">Охрана труда</router-link>
      </li>
      <li class="nav__item">
        <router-link to="/documents">Документы</router-link>
      </li>
      <li class="nav__item">
        <router-link to="/care">Долговременный уход</router-link>
      </li>
      <li class="nav__item">
        <router-link to="/structure">Структура учреждения</router-link>
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
            <router-link to="/politics"
              >Анти-коррупционная политика</router-link
            >
          </li>
          <li class="dropdown__item">
            <router-link to="/interaction"
              >Взаимодействие с волонтерскими организациями
            </router-link>
          </li>
          <li class="dropdown__item">
            <router-link to="/admission-procedure"
              >Порядок приема и рассмотрения обращений
            </router-link>
          </li>
          <li class="dropdown__item">
            <router-link to="/reports"
              >Отчеты директора об итогах деятельности</router-link
            >
          </li>
          <li class="dropdown__item">
            <router-link to="/goals"
              >Предмет и цели деятельности учреждения</router-link
            >
          </li>
          <li class="dropdown__item">
            <router-link to="/personal-data">Персональные данные</router-link>
          </li>
          <li class="dropdown__item">
            <router-link to="/reviews">Отзывы</router-link>
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
          this.isDropDownActive = false;
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
      background-color: #2c3e5054;
    }
  }
}
.dropdown {
  position: absolute;
  top: 202px;
  right: 182px;
  background-color: #66c665;
}
a {
  display: block;
  width: 140px;
  padding: 20px;
  &:hover {
    background: #2c3e5038;
  }
}
.dropdownBtn {
  position: relative;
  height: 70px;

  background-color: transparent;
  border: none;
  padding: 0;
  font-size: 18px;
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
