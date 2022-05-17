<template>
  <div class="SmallMenu">
    <LeftMenu />
    <RightMenu />
  </div>
</template>
<script>
import LeftMenu from "@/layout/Menu/LeftMenu";
import RightMenu from "@/layout/Menu/RightMenu";
export default {
  name: "SmallMenu",
  components: {
    RightMenu,
    LeftMenu,
  },
};
</script>
<style lang="scss" scoped>
#nav {
  background-color: #66c665;
  min-width: 160px;
  height: 100%;
  margin: 0;
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
