<template>
  <header>
    <a href="#">
      <img src="" alt="logo" />
    </a>
    <h1>Ulukol</h1>
  </header>
  <div class="container">
    <div id="nav">
      <ul class="nav__list">
        <li class="nav__item">
          <router-link to="/">Home</router-link>
        </li>
        <li class="nav__item">
          <router-link to="/about">About</router-link>
        </li>
        <li class="nav__item">
          <router-link to="/news">News</router-link>
        </li>
        <li class="nav__item">
          <router-link to="/gallery">Gallery</router-link>
        </li>
      </ul>
    </div>
    <router-view class="context" />
    <div id="nav">
      <ul class="nav__list">
        <li class="nav__item">
          <router-link to="/">Home</router-link>
        </li>
        <li class="nav__item">
          <router-link to="/about">About</router-link>
        </li>
        <li class="nav__item">
          <router-link to="/news">News</router-link>
        </li>
        <li class="nav__item">
          <router-link to="/gallery">Gallery</router-link>
        </li>
      </ul>
    </div>
  </div>
  <footer>
    <h2>some footer</h2>
  </footer>
</template>
<script></script>
<style lang="scss">
#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
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
header {
  background: rgba(0, 0, 0, 0.055);
}
.container {
  display: flex;
}
.context {
  flex-grow: 1;
  min-height: 100vh;
  background-color: #66616117;
}
#nav {
  background-color: #b5d43c;
  min-width: 120px;
  height: 100%;
  margin: 0 10px;
  a {
    font-weight: 600;
    color: #ffffff;

    &.router-link-exact-active {
      color: #666161;
    }
  }
}
.nav__item {
  padding: 20px;
  &:hover {
    background: #2c3e50;
  }
}
footer {
  background: rgb(189, 129, 129);
  height: 100px;
}
// section,
// header,
// footer {
//   padding: 0 15px;
// }
// @media (min-width: 575.98px) {
//   section,
//   header,
//   footer {
//     padding: 0 calc(50vw - 270px);
//   }
// }
// @media (min-width: 767.98px) {
//   section,
//   header,
//   footer {
//     padding: 0 calc(50vw - 360px);
//   }
// }
// @media (min-width: 991.98px) {
//   section,
//   header,
//   footer {
//     padding: 0 calc(50vw - 480px);
//   }
// }
// @media (min-width: 1199.98px) {
//   section,
//   header,
//   footer {
//     padding: 0 calc(50vw - 590px);
//   }
// }
</style>
