<!-- Teamplate без меню -->
<template>
  <div class="layout">
    <button class="returnBtn" @click="goBack">Назад</button>
    <router-view class="context" />
  </div>
</template>

<script>
export default {
  name: "DocumentsLayout",
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>
<style lang="scss" scoped>
.returnBtn {
  border: 1px #66c665 solid;
  background-color: transparent;
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  margin: 12px 0 0 10px;
}
.context {
  min-height: 90vh;
  min-width: 10px;
  padding: 15px;
}
</style>
