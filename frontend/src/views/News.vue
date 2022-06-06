<template>
  <div class="news">
    <h3 class="news__heading">Новости</h3>
    <NewsList />
  </div>
</template>
<script>
import NewsList from "@/components/NewsList.vue";
export default {
  name: "News",
  components: {
    NewsList,
  },
};
</script>
<style scoped>
.news__heading {
  margin-top: 0;
}
</style>
