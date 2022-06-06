<template>
  <div class="feedback__from">
    <form @submit.prevent="sendData">
      <div class="form__item">
        <label class="form__label" for="name">Ваше имя</label>
        <input
          class="form__input"
          type="text"
          id="name"
          v-model="formData.name"
          required
        />
      </div>
      <div class="form__item">
        <label class="form__label" for="email">Ваш email</label>
        <input
          class="form__input"
          type="email"
          id="email"
          v-model="formData.email"
          required
        />
      </div>
      <div class="form__item">
        <legend class="form__legend" for="title">Тема сообщения</legend>
        <input
          class="form__input"
          type="text"
          id="title"
          v-model="formData.title"
          required
        />
      </div>
      <div class="form__item">
        <legend class="form__legend" for="message">Сообщение</legend>
        <textarea
          class="form__input message__input"
          type="text"
          id="message"
          v-model="formData.message"
          required
          rows="4"
          cols="50"
        ></textarea>
      </div>
      <button class="form__btn">Отправить обращение</button>
      <div class="form__message" v-show="isSend">Сообщение отправлено</div>
    </form>
    <router-link class="form__link" to="/"
      >Порядок приема и рассмотрения обращений
    </router-link>
  </div>
</template>
<script>
import axios from "@/axios/axios.js";
export default {
  name: "FeedbackFrom",
  data() {
    return {
      formData: {
        name: "",
        email: "",
        title: "",
        message: "",
      },
      isSend: false,
    };
  },
  methods: {
    sendData() {
      axios
        .post("/feedbacks", {
          data: {
            name: this.formData.name,
            email: this.formData.email,
            title: this.formData.title,
            message: this.formData.message,
          },
        })
        .then(() => {
          this.isSend = true;
        })
        .catch(() => {
          this.isSend = false;
        });
    },
  },
};
</script>
<style lang="scss" scoped>
.form__label {
  margin-right: 10px;
}
.form__input {
  margin: 0;
  padding: 7px;
}
.form__item {
  margin: 15px 0;
}
.message__input {
  height: 100px;
  width: 75%;
}
.form__legend {
  margin-bottom: 10px;
}
.form__btn {
  border: none;
  font-weight: 600;
  font-size: 18px;
  font-family: "Roboto", sans-serif;

  padding: 20px;

  color: #ffffff;
  background-color: #66c665;
  &:hover {
    background: #4e854d;
  }
}
.form__link {
  display: block;

  color: black;

  margin-top: 25px;
}
</style>
