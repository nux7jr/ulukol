<!-- Teamplate mobile -->
<template>
  <div class="layout">
    Mobile layout
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
.context {
  min-height: 90vh;
  min-width: 10px;
  padding: 15px;
}
</style>
