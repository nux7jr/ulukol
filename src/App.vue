<template>
  <header>
    <div class="header__item">
      <img class="header__logo" src="img/logo.png" alt="" />
      <h3 class="header__item header__text">
        КГБУ СО Дзержинский психоневрологический интернат
      </h3>
    </div>
    <div class="contact__info header__item">
      <p>
        E-mail: ulukol@mail.ru<br />
        <a href="Tel:(39167)9-02-46">Тел: (39167)9-02-46</a>
      </p>
    </div>
  </header>
  <nav>
    <div class="nav__left">
      <ul>
        <li>
          <router-link to="/" class="nav__item">Home</router-link>
        </li>
        <li>
          <router-link to="/about" class="nav__item">About</router-link>
        </li>
        <li>
          <router-link to="/mylink" class="nav__item">mylink</router-link>
        </li>
        <li>
          <router-link to="/" class="nav__item">Home</router-link>
        </li>
        <li>
          <router-link to="/news" class="nav__item">News</router-link>
        </li>
      </ul>
    </div>
  </nav>
  <router-view class="container" />
  <nav>
    <div class="nav__right">
      <ul>
        <li>
          <router-link to="/" class="nav__item">Home</router-link>
        </li>
        <li>
          <router-link to="/about" class="nav__item">About</router-link>
        </li>
        <li>
          <router-link to="/mylink" class="nav__item">mylink</router-link>
        </li>
        <li>
          <router-link to="/" class="nav__item">Home</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script></script>

<style lang="scss">
/* Базавая стилистика */
body {
  padding: 0;
  margin: 0;
}
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  border: 0;
  clip: rect(0 0 0 0);
}
ul,
li {
  margin: 0;
  padding: 0;
  list-style: none;
}
a {
  text-decoration: none;
}
img {
  width: 100%;
  height: auto;
}
</style>
<style lang="scss" scoped>
header {
  background-color: rgba(111, 145, 145, 0.299);
}
.container {
  background-color: rgba(184, 192, 70, 0.381);
  margin: 0 80px;
}
.nav__left {
  position: absolute;
  top: 150px;
  left: 20px;
}
.nav__right {
  position: absolute;
  top: 150px;
  right: 20px;
}
</style>
