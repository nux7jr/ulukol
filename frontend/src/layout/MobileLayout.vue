<!-- Teamplate mobile -->
<template>
  <div class="layout">
    <header>
      <h3 class="header__heading">Улюколь РФ</h3>
    </header>
    <router-view class="context" />
  </div>
</template>

<script>
export default {
  name: "MobileLayout",
  methods: {},
};
</script>
<style lang="scss" scoped>
header {
  display: flex;
  height: 55px;
  background-color: #66c665;
}
.header__heading {
  margin-top: 0;
}
.context {
  padding: 15px;
}
</style>
