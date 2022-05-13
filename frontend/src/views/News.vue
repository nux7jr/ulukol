<template>
  <div class="news">
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
