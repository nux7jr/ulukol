<template>
  <div class="news__list">
    <input
      class="search__input"
      type="search"
      v-model="search"
      placeholder="Поиск"
    />
    <div class="post" v-for="item in searchHandler" :key="item.id">
      <h3 class="post__heading">{{ item.attributes.Name }}</h3>

      <div class="img" v-for="img in item.attributes.Photos.data" :key="img.id">
        <div>name {{ img.attributes.name }}</div>
        <!-- <img class="img__item"
        :src="require("`../../uploads/${img.attributes.name}`")" alt="" /> -->
      </div>
      <p class="post__text">{{ item.attributes.Description }}</p>
      <p class="post__date">{{ item.attributes.Date }}</p>
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
      Error: true,
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
<style scoped>
.post {
  position: relative;
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
/* .img__item {
  width: 100px;
  height: 100px;
} */
</style>
