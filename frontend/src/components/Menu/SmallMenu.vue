<template>
  <div id="small__Nav">
    <ul class="nav__list">
      <li class="nav__item">
        <router-link class="nav__link" to="/">Главная</router-link>
      </li>
      <li class="nav__item">
        <router-link class="nav__link" to="/about">О нас</router-link>
      </li>
      <li class="nav__item">
        <router-link class="nav__link" to="/news">Новости</router-link>
      </li>
      <li class="nav__item">
        <router-link class="nav__link" to="/gallery">Галерея</router-link>
      </li>
      <li class="nav__item">
        <router-link class="nav__link" to="/contacts">Контакты</router-link>
      </li>
      <li class="nav__item">
        <router-link class="nav__link" to="/jobs">Вакансии</router-link>
      </li>
      <li class="nav__item">
        <router-link class="nav__link" to="/price">Цены</router-link>
      </li>
      <li class="nav__item">
        <router-link class="nav__link" to="/feedback"
          >Обратная связь</router-link
        >
      </li>
      <li class="nav__item">
        <router-link class="nav__link" to="/security">Охрана труда</router-link>
      </li>
      <li class="nav__item">
        <router-link class="nav__link" to="/documents">Документы</router-link>
      </li>
      <li class="nav__item">
        <router-link class="nav__link" to="/care"
          >Долговременный уход</router-link
        >
      </li>
      <li class="nav__item">
        <router-link class="nav__link" to="/structure"
          >Структура учреждения</router-link
        >
      </li>
      <li class="nav__item">
        <router-link class="nav__link" to="/politics"
          >Анти-коррупционная политика</router-link
        >
      </li>
      <li class="nav__item">
        <router-link class="nav__link" to="/interaction"
          >Взаимодействие с волонтерскими организациями
        </router-link>
      </li>
      <li class="nav__item">
        <router-link class="nav__link" to="/admission-procedure"
          >Порядок приема и рассмотрения обращений
        </router-link>
      </li>
      <li class="nav__item">
        <router-link class="nav__link" to="/reports"
          >Отчеты директора об итогах деятельности</router-link
        >
      </li>
      <li class="nav__item">
        <router-link class="nav__link" to="/goals"
          >Предмет и цели деятельности учреждения</router-link
        >
      </li>
      <li class="nav__item">
        <router-link class="nav__link" to="/personal-data"
          >Персональные данные</router-link
        >
      </li>
      <li class="nav__item">
        <router-link class="nav__link" to="/reviews">Отзывы</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "SmallMenu",
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
#small__Nav {
  background-color: #66c665;
  min-width: 180px;
  height: 100%;
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
.nav__list {
  overflow-y: scroll;
  height: calc(100vh - 75px);
}
a {
  display: block;
  padding: 20px;
  &:hover {
    background: #2c3e5038;
  }
}
</style>
