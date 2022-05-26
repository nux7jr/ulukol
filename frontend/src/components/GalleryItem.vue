<template>
  <div class="gallery__item">
    <div class="gallery__item" v-for="item in img_data" :key="item.id">
      <h3 class="gallery__heading">
        <router-link
          @click="setGallertID"
          :to="`/GalleryTemplate/${item.id}`"
          >{{ item.attributes.title }}</router-link
        >
      </h3>
      <p class="galleryID">{{ item.id }}</p>
      <!-- <p>{{ item.attributes.titileImg.data.attributes.url }}</p> -->
      <img
        class="gallery__title-img"
        :src="`http://localhost:1337${item.attributes.titileImg.data.attributes.url}`"
        alt="title image"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: "GalleryItem",
  data() {
    return {};
  },
  props: {
    img_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>
<style scoped>
.gallery__title-img {
  width: 240px;
  height: 200px;
}
</style>
