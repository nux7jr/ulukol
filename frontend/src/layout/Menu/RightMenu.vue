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
      <li class="nav__item">Еще</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "RightMenu",
};
</script>
<style lang="scss">
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
