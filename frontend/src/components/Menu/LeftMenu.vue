<template>
  <div id="nav">
    <ul class="nav__list">
      <li class="nav__item">
        <router-link to="/">Главная</router-link>
      </li>
      <li class="nav__item">
        <router-link to="/about">О нас</router-link>
      </li>
      <li class="nav__item">
        <router-link to="/news">Новости</router-link>
      </li>
      <li class="nav__item">
        <router-link to="/gallery">Галерея</router-link>
      </li>
      <li class="nav__item">
        <router-link to="/contacts">Контакты</router-link>
      </li>
      <li class="nav__item">
        <router-link to="/jobs">Вакансии</router-link>
      </li>
      <li class="nav__item">
        <router-link to="/price">Цены</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "LeftMenu",
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
      color: #ffffff;
      background-color: #2c3e5054;
    }
  }
}
a {
  display: block;
  padding: 20px;
  &:hover {
    background: #2c3e5038;
  }
}
</style>
