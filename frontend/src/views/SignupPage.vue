<template>
  <div class="layout">
    <div class="signup-component">
      <div class="signup-box">
        <SignupForm></SignupForm>
      </div>
    </div>
  </div>
</template>

<script>
import SignupForm from "@/components/SignupForm.vue";

export default {
  components: {
    SignupForm,
  },
};
</script>

<style scoped>
.layout {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  box-sizing: border-box;
}
.signup-component {
  width: 35rem;
    margin: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.signup__logo {
  width: 100%;
  height: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: black;
  margin-bottom: 1rem;
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
  color: #2854c5;
  line-height: 3rem;
  text-decoration: none;
}
.signup-box {
  width: 100%;
  margin-bottom: 2rem;
}
</style>
