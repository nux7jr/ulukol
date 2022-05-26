<template>
  <div class="gallery">
    <div class="gallery__item" v-for="item in posts" :key="item.id">
      <h3 class="gallery__heading">
        <router-link @click="setGallertID" :to="`/gallery/${item.id}`">{{
          item.attributes.title
        }}</router-link>
      </h3>
      <p class="galleryID">{{ item.id }}</p>
      <img
        class="gallery__title-img"
        :src="`http://localhost:1337${item.attributes.titileImg.data.attributes.url}`"
        alt="title image"
      />
    </div>
  </div>
</template>
<script>
import axios from "@/axios/axios.js";
import GalleryItem from "@/components/GalleryItem";
export default {
  name: "GalleryList",
  components: {
    GalleryItem,
  },
  data() {
    return {
      search: "",
      posts: [],
    };
  },
  async created() {
    const res = await axios.get("galleries/?populate=*&sort=createdAt:desc");
    this.posts = res.data.data;
  },
  methods: {
    setGallertID() {
      const itemID = document.querySelectorAll(".galleryID");
      console.log(itemID);

      // const text = itemID[0].innerHTML;
      // console.log(text);
    },
  },
};
</script>
<style scoped>
.gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}
.gallery__title-img {
  width: 240px;
  height: 200px;
}
</style>
