<template>
  <div class="gallery">
    <div class="gallery__item" v-for="item in posts" :key="item.id">
      <router-link :to="`/gallery/${item.id}`">
        <h3 class="gallery__heading">
          <router-link class="gallery__link" :to="`/gallery/${item.id}`">{{
            item.attributes.title
          }}</router-link>
        </h3>
        <img
          class="gallery__title-img"
          :src="`https://fathomless-bayou-43387.herokuapp.com${item.attributes.titileImg.data.attributes.url}`"
          alt="title image"
        />
      </router-link>
    </div>
  </div>
</template>
<script>
import axios from "@/axios/axios.js";
export default {
  name: "GalleryList",
  components: {},
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
  methods: {},
};
</script>
<style scoped>
.gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: left;

  gap: 20px;
}
.gallery__link {
  color: black;
  margin-top: 5px;
}
.gallery__item {
  justify-items: center;
  text-align: center;
  justify-self: flex-end;
  border: 2px solid #000000;
  border-radius: 0px;
}
.gallery__title-img {
  width: 240px;
}
</style>
