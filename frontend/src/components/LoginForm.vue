<template>
  <div class="login-layout">
    <header class="login-header">
      <h1 class="header-text">회원 로그인</h1>
    </header>
    <form class="login-form" @submit.prevent="submitForm">
      <div class="login__field">
        <input
          class="login__input"
          type="userId"
          placeholder="아이디를 입력해주세요"
          v-model="userId"
        />
      </div>

      <div class="login__field">
        <input
          class="login__input"
          type="password"
          placeholder="비밀번호를 입력해주세요"
          v-model="password"
        />
      </div>

      <div class="login__error" v-if="isError">{{ errorMessage }}</div>

      <div class="login__login">
        <button
          class="login__button"
          :disabled="!userId || !password"
          type="submit"
        >
          로그인
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userId: "",
      password: "",
      errorMessage: "",
      isError: false,
    };
  },
  methods: {
    async submitForm() {
      try {
        const userData = {
          username: this.userId,
          password: this.password,
        };
        console.log(userData);
        await this.$store.dispatch("LOGIN", userData);
        this.$router.push("/");
      } catch (error) {
        console.error(error.response.data.detail);
        this.errorMessage = error.response.data.detail;
        this.isError = true;
      } finally {
        this.initForm();
      }
    },
    initForm() {
      this.userId = "";
      this.password = "";
    },
  },
};
</script>

<style scoped>
.login-layout {
  width: 100%;
  border-radius: 0.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.login-header {
  width: 90%;
  padding: 3rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.header-text {
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 2rem;
  line-height: 2rem;
  text-decoration: none;
  color: rgb(81, 81, 81);
}
.login-form {
  width: 90%;
}
.login__field {
  width: 100%;
  position: relative;
  margin-bottom: 1rem;
}
.login__input {
  width: 100%;
  height: 100%;
  padding: 2rem 1rem;
  border: 1px solid #ccc;
  border-radius: 0.4rem;
  box-sizing: border-box;
  font-size: 1.2rem;
}
.login__input:focus {
  border: 1px solid rgb(40, 84, 197);
}
.login__login {
  width: 100%;
  margin: 1rem 0;
}
.login__button {
  width: 100%;
  padding: 2rem 1rem;
  border-radius: 0.4rem;
  background: #007bff;
  color: white;

  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 1rem;
  text-decoration: none;
}
.login__error {
  width: 100%;
  margin: 1rem 0 0.5rem 0;
  display: flex;
  align-items: center;
  color: red;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1rem;
  text-decoration: none;
}
</style>
