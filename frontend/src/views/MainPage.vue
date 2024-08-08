<!-- main page -->
<template>
  <div class="main-page">
    <div class="main-page__popupContent">
      <HeaderSlider :contents="popupComponents" :styles="popupStyles" :slidesPerView="1" :widthSlider="'100rem'">
      </HeaderSlider>
    </div>
    <div class="main-page__banner">
      <img class="main-page__banner-img" src="@/assets/newjeans.jpg">
    </div>
    <div class="main-page__board">
      <div class="board__title">긴장감 넘치는 액션과 도전적인 플레이 ></div>
      <div class="board__list">
        <MainSlider :contents="boardComponents1" :slidesPerView="3" :widthSlider="'15rem'"></MainSlider>
      </div>
    </div>
    <div class="main-page__board">
      <div class="board__title">몰입감 있는 스토리와 오픈 월드 탐험 ></div>
      <div class="board__list">
        <MainSlider :contents="boardComponents2" :slidesPerView="3" :widthSlider="'15rem'"></MainSlider>
      </div>
    </div>
    <div class="main-page__board">
      <div class="board__title">전략적 사고와 자원 관리 ></div>
      <div class="board__list">
        <MainSlider :contents="boardComponents3" :slidesPerView="3" :widthSlider="'15rem'"></MainSlider>
      </div>
    </div>
    <div class="main-page__banner">
      <img class="main-page__banner-img" src="@/assets/tft.png">
    </div>
    <div class="main-page__board">
      <div class="board__title">협동과 커뮤니티 플레이 ></div>
      <div class="board__list">
        <MainSlider :contents="boardComponents4" :slidesPerView="3" :widthSlider="'15rem'"></MainSlider>
      </div>
    </div>
    <div class="main-page__board">
      <div class="board__title">강력한 생존 요소와 극한의 도전 ></div>
      <div class="board__list">
        <MainSlider :contents="boardComponents5" :slidesPerView="3" :widthSlider="'15rem'"></MainSlider>
      </div>
    </div>
    <div class="main-page__board">
      <div class="board__title">창의적이고 자유로운 플레이 ></div>
      <div class="board__list">
        <MainSlider :contents="boardComponents6" :slidesPerView="3" :widthSlider="'15rem'"></MainSlider>
      </div>
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
          percent: "87%",
          content: require("@/assets/main/Artboard_1.png"),
        },
        {
          percent: "90%",
          content: require("@/assets/main/Artboard_2.png"),
        },
        {
          percent: "82%",
          content: require("@/assets/main/Artboard_3.png"),
        },
        {
          percent: "88%",
          content: require("@/assets/main/Artboard_4.png"),
        },
        {
          percent: "95%",
          content: require("@/assets/main/Artboard_5.png"),
        },
      ],
      popupStyles: {
        swiperSlide: {
          width: "30rem",
          height: "25rem",
        },
      },
      boardComponents1: [
        {
          title: "더파이널스",
          content: require("@/assets/game/더파이널스.jpg"),
        },
        {
          title: "레드데드리뎀션2",
          content: require("@/assets/game/레드데드리뎀션2.jpg"),
        },
        {
          title: "데스티니가디언즈",
          content: require("@/assets/game/데스티니가디언즈.jpg"),
        },
        {
          title: "라스트오브어스",
          content: require("@/assets/game/라스트오브어스.jpg"),
        },
        {
          title: "에이펙스레전드",
          content: require("@/assets/game/에이펙스레전드.jpg"),
        },
        {
          title: "얼티밋치킨호스",
          content: require("@/assets/game/얼티밋치킨호스.jpg"),
        }
      ],
      boardComponents2: [
        {
          title: "데이브더다이버",
          content: require("@/assets/game/데이브더다이버.jpg"),
        },
        {
          title: "리틀나이트메어",
          content: require("@/assets/game/리틀나이트메어.jpg"),
        },
        {
          title: "사이버펑크2077",
          content: require("@/assets/game/사이버펑크2077.jpg"),
        },
        {
          title: "산나비",
          content: require("@/assets/game/산나비.jpg"),
        },
        {
          title: "잇테익스투",
          content: require("@/assets/game/잇테익스투.png"),
        },
        {
          title: "테라리아",
          content: require("@/assets/game/테라리아.jpg"),
        }
      ],
      boardComponents3: [
        {
          title: "문명6",
          content: require("@/assets/game/문명6.jpg"),
        },
        {
          title: "스타듀밸리",
          content: require("@/assets/game/스타듀밸리.jpg"),
        },
        {
          title: "심즈4",
          content: require("@/assets/game/심즈4.jpg"),
        },
        {
          title: "프로스트펑크",
          content: require("@/assets/game/프로스트펑크.jpg"),
        },
        {
          title: "프로젝트좀보이드",
          content: require("@/assets/game/프로젝트좀보이드.jpg"),
        },
        {
          title: "팰월드",
          content: require("@/assets/game/팰월드.jpg"),
        }
      ],
      boardComponents4: [
        {
          title: "어몽어스",
          content: require("@/assets/game/어몽어스.jpg"),
        },
        {
          title: "에이펙스레전드",
          content: require("@/assets/game/에이펙스레전드.jpg"),
        },
        {
          title: "파피플레이타임",
          content: require("@/assets/game/파피플레이타임.jpg"),
        },
        {
          title: "데스티니가디언즈",
          content: require("@/assets/game/데스티니가디언즈.jpg"),
        },
        {
          title: "문명6",
          content: require("@/assets/game/문명6.jpg"),
        },
        {
          title: "레드데드리뎀션2",
          content: require("@/assets/game/레드데드리뎀션2.jpg"),
        }
      ],
      boardComponents5: [
        {
          title: "산나비",
          content: require("@/assets/game/산나비.jpg"),
        },
        {
          title: "사이버펑크2077",
          content: require("@/assets/game/사이버펑크2077.jpg"),
        },
        {
          title: "라스트오브어스",
          content: require("@/assets/game/라스트오브어스.jpg"),
        },
        {
          title: "잇테익스투",
          content: require("@/assets/game/잇테익스투.png"),
        },
        {
          title: "테라리아",
          content: require("@/assets/game/테라리아.jpg"),
        },
        {
          title: "파피플레이타임",
          content: require("@/assets/game/파피플레이타임.jpg"),
        }
      ],
      boardComponents6: [
        {
          title: "스타듀밸리",
          content: require("@/assets/game/스타듀밸리.jpg"),
        },
        {
          title: "심즈4",
          content: require("@/assets/game/심즈4.jpg"),
        },
        {
          title: "테라리아",
          content: require("@/assets/game/테라리아.jpg"),
        },
        {
          title: "프로젝트좀보이드",
          content: require("@/assets/game/프로젝트좀보이드.jpg"),
        },
        {
          title: "팰월드",
          content: require("@/assets/game/팰월드.jpg"),
        },
        {
          title: "프로스트펑크",
          content: require("@/assets/game/프로스트펑크.jpg"),
        }
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
  margin-top: 8rem;
}

.main-page__banner {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 4rem 0;
  cursor: pointer;
}

.main-page__banner-img {
  width: 84.5rem;
  object-fit: contain;
  object-position: center;
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
}

.main-page__board {
  height: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
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

.board__title {
  width: 84.5rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  text-align: left;
  cursor: pointer;
}

.board__list {
  width: 84.5rem;
  height: 90%;
}
</style>
