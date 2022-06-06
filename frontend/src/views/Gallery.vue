<template>
  <div class="gallery">
    <h3 class="gallery__heading">Фотогалерея</h3>
    <GalleryList />
  </div>
</template>
<script>
import GalleryList from "@/components/GalleryList";
export default {
  name: "Gallery",
  components: {
    GalleryList,
  },
};
</script>
<style scoped>
.gallery__heading {
  margin-top: 0;
}
</style>
