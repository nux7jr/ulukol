<template>
  <div class="gallery">
    <h2>Фотогалерея</h2>
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
