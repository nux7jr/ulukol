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
  // height: 100%;
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
.nav__item {
  padding: 20px;
  &:hover {
    background: #2c3e50b2;
  }
}
</style>
