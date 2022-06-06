<template>
  <div class="news__list">
    <input
      class="search__input"
      type="search"
      v-model="search"
      placeholder="Поиск"
    />
    <div class="post" v-for="item in searchHandler" :key="item.id">
      <h3 class="post__heading">{{ item.attributes.name }}</h3>
      <p class="post__text">{{ item.attributes.description }}</p>
      <div class="post__media">
        <div
          class="img"
          v-for="img in item.attributes.photos.data"
          :key="img.id"
        >
          <img
            class="img__item"
            :src="`https://fathomless-bayou-43387.herokuapp.com${img.attributes.url}`"
            alt="post-image"
          />
        </div>
      </div>
      <p class="post__date">{{ item.attributes.date }}</p>
      <hr />
    </div>
  </div>
</template>
<script>
import axios from "@/axios/axios.js";
export default {
  name: "NewsList",
  data() {
    return {
      search: "",
      posts: [],
    };
  },
  async created() {
    const res = await axios.get("catalognews/?populate=*&sort=createdAt:desc");
    this.posts = res.data.data;
  },
  computed: {
    searchHandler() {
      return this.posts.filter((elem) => {
        return elem.attributes.name
          .toLowerCase()
          .includes(this.search.toLowerCase());
      });
    },
  },
};
</script>
<style scoped>
.post {
  position: relative;
}
.post__media {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: left;
}
.post__date {
  position: absolute;
  top: 5px;
  right: 0;
  margin: 0;
}
.search__input {
  margin: 0 auto;
  padding: 7px;
}
.img__item {
  width: 240px;
}
.img__item--active {
  position: absolute;
  top: 20%;
}
</style>
