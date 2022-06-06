<template>
  <div class="GalleryTemplate">
    <div class="gallery">
      <div
        class="gallery__item"
        v-for="media in gallery.attributes.media.data"
        :key="media.id"
      >
        <img
          class="gallery__img"
          :src="`https://fathomless-bayou-43387.herokuapp.com${media.attributes.url}`"
          alt="img"
        />
      </div>
    </div>
  </div>
</template>
<script>
import axios from "@/axios/axios.js";
export default {
  name: "GalleryTemplate",
  data() {
    return {
      gallery: {},
      galleryID: this.$route.params.galleryID,
    };
  },
  components: {},
  props: {},
  async created() {
    const res = await axios.get("galleries/?populate=*&sort=createdAt:asc");
    this.gallery = res.data.data;
    this.gallery = this.gallery[this.$route.params.galleryID - 1];
  },
  mounted() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  },
};
</script>
<style lang="scss" scoped>
.GalleryTemplate {
  min-height: calc(100vh - 75px);
}
.gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  gap: 20px;
}
.gallery__img {
  max-width: 300px;
  height: fit-content;
}
</style>
