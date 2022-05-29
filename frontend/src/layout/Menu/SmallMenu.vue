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
        <router-link class="nav__link" to="/price">Вакансии</router-link>
      </li>
      <li class="nav__item">
        <router-link class="nav__link" to="/price">Цены</router-link>
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
        <router-link class="nav__link" to="/price">Some link</router-link>
      </li>
      <li class="nav__item">
        <router-link class="nav__link" to="/price">Some link</router-link>
      </li>
      <li class="nav__item">
        <router-link to="/price">Some link</router-link>
      </li>
      <li class="nav__item">
        <router-link to="/price">Some link</router-link>
      </li>
      <li class="nav__item">
        <router-link to="/price">Some link</router-link>
      </li>
      <li class="nav__item">
        <router-link to="/price">Some link</router-link>
      </li>
      <li class="nav__item">
        <router-link to="/price">Some link</router-link>
      </li>
      <li class="nav__item">
        <router-link to="/price">Some link</router-link>
      </li>
      <li class="nav__item">
        <router-link to="/price">Some link</router-link>
      </li>
      <li class="nav__item">
        <router-link to="/price">Some link(Last)</router-link>
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
      color: #000000;
    }
  }
}
.nav__list {
  overflow-y: scroll;
  height: calc(100vh - 75px);
}
.nav__item {
  padding: 20px;
  &:hover {
    background: #2c3e5054;
  }
}
</style>
