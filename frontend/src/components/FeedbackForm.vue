<template>
  <div class="feedback__from">
    <form @submit.prevent="sendData">
      <div>
        <label for="name">Ваше имя</label>
        <input type="text" id="name" v-model="UserFormData.name" />
      </div>
      <div>
        <label for="email">Ваш email</label>
        <input type="email" id="email" v-model="UserFormData.email" />
      </div>
      <div>
        <label for="title">Тема сообщения</label>
        <input type="text" id="title" v-model="UserFormData.title" />
      </div>
      <div>
        <label for="message">Сообщение</label>
        <input type="text" id="message" v-model="UserFormData.message" />
      </div>
      <button>Отправить обращение</button>
    </form>
  </div>
</template>
<script>
import axios from "@/axios/axios.js";
export default {
  name: "FeedbackFrom",
  data() {
    return {
      UserFormData: {
        name: "",
        email: "",
        title: "",
        message: "",
      },
    };
  },
  methods: {
    sendData() {
      axios
        .post("/feedbacks", this.UserFormData)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error.response);
        });
    },
  },
};
</script>
<style scoped></style>
