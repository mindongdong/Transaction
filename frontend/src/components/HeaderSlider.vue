<template>
  <swiper
    :modules="modules"
    :slides-per-view="slidesPerView"
    :space-between="50"
    navigation
    loop
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide class="main-slider" v-for="(content, idx) in contents" :key="idx">
      <img class="main-slider__img" :src="content.content">
    </swiper-slide>
    <!-- <img class="background-img" src="@/assets/game.png"> -->
  </swiper>
</template>

<script>
// import Swiper core and required modules
import { Navigation, A11y } from "swiper/modules";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    contents: {
      type: Array,
      required: true,
    },
    styles: {
      type: Object,
      required: true,
    },
    slidesPerView: {
      type: Number,
      default: 3,
    },
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, A11y],
    };
  },
};
</script>

<style>
/* 기존의 스타일 */
/* Swiper 스타일 */
.swiper {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 0 5rem;
  position: relative;
}

.background-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  z-index: -1;
}

/* 각 슬라이드의 크기 설정 */
.swiper-slide {
  width: calc(100%);
  height: calc(100% - 2rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 8px;
  box-sizing: border-box;
  border-radius: 1rem;
}

.swiper-slide:hover {
  transform: scale(1);
  transition: transform 0.5s;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.main-slider{
  position: relative;
}

.main-slider__title {
  height: 10%;
  margin-top: 1rem;
  font-size: 1.5rem;
  color: rgb(197, 197, 197);
}

.main-slider__content {
  font-size: 1.5rem;
}

.main-slider__img{
  width: calc(100% - 2rem);
  height: 85%;
  object-fit: cover;
  border-radius: 1rem;
  margin-bottom: 5%;
}

/* 네비게이션 버튼 스타일 */
.swiper-button-next,
.swiper-button-prev {
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

.swiper-button-next {
  background-image: url("@/assets/next.png");
}

.swiper-button-prev {
  background-image: url("@/assets/before.png");
}

.swiper-button-next,
.swiper-button-prev {
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
}

/* .swiper-button-next:hover {
  transform: translateX(-30%);
}

.swiper-button-prev:hover {
  transform: translateX(30%);
} */

.swiper-button-next:hover,
.swiper-button-prev:hover {
  transform: scale(1.05);
  transition: transform 0.5s;
}

/* 네비게이션 화살표 아이콘 스타일 */
.swiper-button-next:after,
.swiper-button-prev:after {
  font-family: swiper-icons;
  content: "";
  font-size: 1rem;
  color: white;
}
</style>
