<template>
  <div class="layout">
    <div class="login-component">
      <div class="login-box">
        <LoginForm></LoginForm>
      </div>
      <div class="login-help">
        <div class="login-help__column">
          <router-link class="login-help__text" to="/signup"
            >회원가입</router-link
          >
        </div>
        <div class="login-help__column">
          <router-link class="login-help__text" to="/main">아이디 찾기</router-link>
        </div>
        <div class="login-help__column">
          <router-link class="login-help__text" to="/main"
            >비밀번호 찾기</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LoginForm from "@/components/LoginForm.vue";

export default {
  components: {
    LoginForm,
  },
};
</script>

<style scoped>
.layout {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  box-sizing: border-box;
}
.login-component {
  width: 35rem;
  margin: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.login__logo {
  width: 100%;
  height: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: black;
  margin-bottom: 2rem;
}
.logo__img {
  width: 6rem;
  height: 6rem;
  object-fit: contain;
}
.logo__text {
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 3rem;
  color: rgb(40, 84, 197);
  line-height: 3rem;
  text-decoration: none;
}
.login-box {
  width: 100%;
}
.login-help {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;
}
.login-help__column {
  width: auto;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.login-help__column:nth-child(2) {
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
}
.login-help__text {
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1rem;
  padding: 0 1rem;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.6);
}
.login-footer {
  width: 100%;
  height: 3rem;
  border-top: 1px solid rgba(204, 204, 204, 0.5);
}
</style>
