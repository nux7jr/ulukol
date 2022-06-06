<template>
  <div class="price">
    <h3 class="price__heading">Стоимость проживания</h3>
    <div class="price__list">
      <ul>
        <li>
          <p>2-х комнатный номер с телевизором и холодильником - 1680 руб.,</p>
        </li>
        <li>
          <p>
            1 комнатный номер на два места с телевизором - 900 руб. одно место,
          </p>
        </li>
        <li>
          <p>1 комнатный номер на одно место - 350руб</p>
          .
        </li>
      </ul>
    </div>
    <router-link class="price__link" to="/contacts">Наши контакты</router-link>
  </div>
</template>
<script>
export default {
  name: "Price",
};
</script>
<style scoped>
.price__heading {
  margin-top: 0;
}
.price__link {
  color: black;
}
</style>
