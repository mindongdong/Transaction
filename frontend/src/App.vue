<template>
  <div id="app">
    <MainHeader class="header" v-bind:class="{
      survey: surveyPage,
      main: mainPage
    }" />
    <router-view />
    <footer class="footer" v-bind:class="{
      survey: surveyPage,
      main: mainPage
    }">
      <div class="footer__column">
        <div class="footer__logo">
          <img class="footer__logo--img" src="@/assets/logo_white.png" alt="로고" />
        </div>
        <div class="footer__content">
          <div class="footer__content__item">이용약관</div>
          <div class="footer__content__item">개인정보처리방침</div>
          <div class="footer__content__item">운영정책</div>
        </div>
        <div class="copyright">
          © 2024. 로고 all rights reserved.
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import MainHeader from "@/components/MainHeader.vue";
export default {
  name: "App",
  components: {
    MainHeader,
  },
  data() {
    return {
      surveyPage: true,
      mainPage: false,
    };
  },
  watch: {
    $route(to) {
      if (!to.path.includes("/survey")) {
        this.mainPage = true;
        this.surveyPage = false;
      }
    }
  }
};
</script>

<style>
#app {
  font-family: 'Pretendard', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  overflow-x: hidden;
  /* background-color: #060613; */
  background-image: url('@/assets/test_v5.png');
  background-position: center;
  background-size: cover;
  background-repeat: repeat-y;
}

/* reset css */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  font-family: 'Pretendard', sans-serif;
}

.header {
  position: fixed;
  z-index: 999;
  background: rgba(0, 0, 0, 0.8);
}

/* 기존의 스타일 */
.footer {
  width: 100%;
  padding: 1rem 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  /* border-top: 2px solid #ddd; */
  color: hsla(0, 0%, 100%, .65);
  background-color: #060613;
  border-top: 1px solid #1a1a1a;
}

.footer__column {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.footer__logo {
  width: 10rem;
  height: 5rem;
  margin-bottom: 1rem;
}

.footer__logo--img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.footer__content {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.footer__content__item {
  margin: 0.5rem;
}

.survey {
  display: none !important;
}

.main {
  display: flex !important;
}
</style>
