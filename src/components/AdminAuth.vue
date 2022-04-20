<template>
  <div class="auth-form">
    <form action="" @submit.prevent="login">
      <input
        type="name"
        placeholder="Name"
        maxlength="20"
        minlength="10"
        v-model="date.login"
      />
      <input
        type="password"
        placeholder="Password"
        maxlength="20"
        minlength="10"
        v-model="date.password"
      />
      <button class="login-btn">Войти</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "AuthForm",
  props: {
    MyMess: String,
  },
};
</script>
<style scoped></style>
// 1. получиние данных у пользователя (метод get) // 2. сравнить полученные
данные с настоящим паролем и логином // 3. если данные верны - дать
ключь(localStorage) или обновить станицу // 4. если у пользователь авторизован,
он может добавлять или удалять новости(не localStorage)
