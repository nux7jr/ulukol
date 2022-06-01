<template>
  <div class="news">
    <h2>Новости</h2>
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
