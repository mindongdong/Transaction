<template>
  <div class="signup-layout">
    <header class="signup-header">
      <h1 class="header-text">회원가입</h1>
    </header>
    <form class="signup-form" @submit.prevent="submitForm">
      <div class="signup__field">
        <input
          class="signup__input"
          type="text"
          placeholder="아이디를 입력해주세요"
          v-model="userId"
        />
      </div>

      <div class="signup__field">
        <input
          class="signup__input"
          type="name"
          placeholder="연락처를 입력해주세요"
          v-model="contact"
        />
      </div>

      <div class="signup__field">
        <input
          class="signup__input"
          type="password"
          placeholder="비밀번호를 8자리 이상으로 입력해주세요"
          v-model="password"
        />
      </div>

      <div class="signup__field">
        <input
          class="signup__input"
          type="password"
          placeholder="비밀번호를 다시 입력해주세요"
          v-model="re_password"
        />
      </div>

      <div class="signup__error" v-if="isError">{{ errorMessage }}</div>

      <div class="signup__signup">
        <button
          class="signup__button"
          :disabled="!userId || !contact || !password || !re_password || password !== re_password"
        >
          회원가입
        </button>
      </div>
    </form>
  </div>
</template>

<script>
// import { registerUser } from "@/api/index";

export default {
  data() {
    return {
      userId: "",
      password: "",
      contact: "",
      re_password: "",
      modal: false,
      errorMessage: "",
      isError: false,
    };
  },
  methods: {
    // async submitForm() {
    //   try {
    //     const userData = {
    //       userId: this.userId,
    //       password: this.password,
    //       contact: this.contact,
    //     };
    //     console.log(userData);
    //     this.modal = true;
    //     const response = await registerUser(userData);
    //     console.log(response);
    //     this.$router.push("/login");
    //   } catch (error) {
    //     console.error(error.response.data.detail);
    //     this.errorMessage = error.response.data.detail;
    //     this.isError = true;
    //   } finally {
    //     this.initForm();
    //   }
    // },
    initForm() {
      this.userId = "";
      this.password = "";
      this.contact = "";
      this.re_password = "";
    },
  },
};
</script>

<style scoped>
.signup-layout {
  width: 100%;
  height: 100%;
  border-radius: 0.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.signup-header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5%;
}
.header-text {
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 3rem;
  line-height: 2rem;
  text-decoration: none;
  color: rgb(81, 81, 81);
}
.signup-form {
  width: 100%;
  height: 100%;
}
.signup__field {
  width: 100%;
  position: relative;
  margin-bottom: 5.5%;
}
.signup__input {
  width: 100%;
  height: 100%;
  border: 1px solid #ccc;
  border-radius: 0.4rem;
  padding: 2rem 1rem;
  box-sizing: border-box;
  font-size: 1rem;
}
.signup__signup {
  width: 100%;
}
.signup__button {
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
.error-message {
  width: 100%;
  height: 5%;
  left: 0.5rem;
  top: calc(100% + 0.3rem);
  position: absolute;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 0.75rem;
}
.signup__error {
  width: 100%;
  margin-bottom: 1.5rem;
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
