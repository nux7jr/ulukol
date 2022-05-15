<template>
  <div class="news__list">
    <input
      class="search__input"
      type="search"
      v-model="search"
      placeholder="Писать сюда.."
    />
    <p>
      {{ search }}
    </p>
    <h2 class="news__heading">{{ info.data }}</h2>
    <img src="" alt="" />
    <p class="news__text">Some descr</p>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "NewsList",
  data() {
    return {
      search: "",
      info: {},
    };
  },
  created() {
    axios.get("http://localhost:1337/api/catalognews/").then((response) => {
      this.info = response;
      console.log(this.info.data.data);
    });
  },
  computed() {},
};
</script>
