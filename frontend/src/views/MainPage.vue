<!-- main page -->
<template>
  <div class="main-page">
    <div class="main-page__popupContent">
      <HeaderSlider :contents="popupComponents" :styles="popupStyles" :slidesPerView="1"></HeaderSlider>
    </div>
    <div class="main-page__header">
      <h1 class="main-page__title">
        웹사이트 소개입니다. 웹사이트 소개입니다.
      </h1>
      <p class="main-page__subtitle">
        웹사이트 설명입니다. 웹사이트 설명입니다.
      </p>
    </div>
    <div class="main-page__board">
      <div class="board__list">
        <MainSlider :contents="boardComponents" :slidesPerView="4"></MainSlider>
      </div>
    </div>
    <div class="main-page__board">
      <div class="board__list">
        <MainSlider :contents="boardComponents" :slidesPerView="4"></MainSlider>
      </div>
    </div>
    <div class="main-page__board">
      <div class="board__list">
        <MainSlider :contents="boardComponents" :slidesPerView="4"></MainSlider>
      </div>
    </div>
    <div class="main-page__header">
      <h1 class="main-page__title">
        웹사이트 소개입니다. 웹사이트 소개입니다.
      </h1>
      <p class="main-page__subtitle">
        웹사이트 설명입니다. 웹사이트 설명입니다.
      </p>
    </div>
    <div class="main-page__board">
      <div class="board__list">
        <MainSlider :contents="boardComponents" :slidesPerView="4"></MainSlider>
      </div>
    </div>
    <div class="main-page__board">
      <div class="board__list">
        <MainSlider :contents="boardComponents" :slidesPerView="4"></MainSlider>
      </div>
    </div>
    <div class="main-page__board">
      <div class="board__list">
        <MainSlider :contents="boardComponents" :slidesPerView="4"></MainSlider>
      </div>
    </div>
    <div class="main-page__header">
      <h1 class="main-page__title">
        웹사이트 소개입니다. 웹사이트 소개입니다.
      </h1>
      <p class="main-page__subtitle">
        웹사이트 설명입니다. 웹사이트 설명입니다.
      </p>
    </div>
  </div>
</template>
<script>
import MainSlider from "@/components/MainSlider.vue";
import HeaderSlider from "@/components/HeaderSlider.vue";

export default {
  name: "MainPage",
  components: {
    MainSlider,
    HeaderSlider,
  },
  data() {
    return {
      popupComponents: [
        {
          title: "메이플",
          content: require("@/assets/game/메이플.jpeg"),
        },
        {
          title: "던파",
          content: require("@/assets/game/던파.jpeg"),
        },
        {
          title: "데스티니",
          content: require("@/assets/game/데스티니.jpeg"),
        },
        {
          title: "피파",
          content: require("@/assets/game/피파.jpeg"),
        },
        {
          title: "포트나이트",
          content: require("@/assets/game/포트나이트.jpeg"),
        },
      ],
      popupStyles: {
        swiperSlide: {
          width: "30rem",
          height: "25rem",
        },
      },
      boardComponents: [
        {
          title: "다잉라이트",
          content: require("@/assets/game/다잉라이트.jpeg"),
        },
        {
          title: "던파",
          content: require("@/assets/game/던파.jpeg"),
        },
        {
          title: "데스티니",
          content: require("@/assets/game/데스티니.jpeg"),
        },
        {
          title: "메이플",
          content: require("@/assets/game/메이플.jpeg"),
        },
        {
          title: "피파",
          content: require("@/assets/game/피파.jpeg"),
        },
      ],
    };
  },
};
</script>
<style scoped>
.main-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 3rem;
}

.main-page__header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;
}

.main-page__title {
  font-size: 3rem;
}

.main-page__subtitle {
  font-size: 1.5rem;
}

.main-page__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70%;
}

.main-page__text {
  font-size: 1.5rem;
}

.main-page__popupContent,
.main-page__board {
  width: calc(100vw);
  height: 50rem;
  margin: 2rem 0;
}

.main-page__board {
  height: 15rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.board__form {
  width: 30%;
  height: calc(100% - 2rem);
  background-color: #61e2a288;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: auto;
}

.board__form__title {
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 15px;
  font-weight: bold;
  text-align: center;
}

.board__form__content {
  border-top: 1px solid #ddd;
  padding-top: 15px;
}

.board__form__content__description {
  font-size: 1rem;
  color: #666;
  margin-bottom: 15px;
  text-align: center;
}

.board__form__content__link {
  text-align: center;
}

.board__form__content__link a {
  display: inline-block;
  background-color: #007bff;
  color: white;
  padding: 10px 15px;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.board__form__content__link a:hover {
  background-color: #0056b3;
}

.board__list {
  width: 100%;
  height: 100%;
}
</style>
