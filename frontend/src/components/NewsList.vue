<template>
  <div class="news__list">
    <input
      class="search__input"
      type="search"
      v-model="search"
      placeholder="Писать сюда.."
    />
    <div class="post" v-for="item in searchHandler" :key="item.id">
      <h2 class="post__heading">{{ item.attributes.Name }}</h2>
      <p class="post__text">{{ item.attributes.Description }}</p>
      <!-- <img
        :src="`../../backend/public/uploads/${item.attributes.Photos.data.name}`"
        alt=""
      /> -->
      <!-- <p>{{ item.attributes.Date }}</p> -->
      <p>
        {{ item.attributes.Photos.data }}
      </p>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "NewsList",
  data() {
    return {
      search: "",
      posts: [],
    };
  },
  created() {
    axios
      .get("http://localhost:1337/api/catalognews/?populate=*")
      .then((response) => {
        this.posts = response.data.data;
        console.log(this.posts);
      });
  },
  computed: {
    searchHandler() {
      return this.posts.filter((elem) => {
        return elem.attributes.Name.toLowerCase().includes(
          this.search.toLowerCase()
        );
      });
    },
  },
};
</script>
