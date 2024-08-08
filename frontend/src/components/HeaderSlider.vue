<template>
  <swiper :modules="modules" :slides-per-view="slidesPerView" :space-between="50" :autoplay="{ delay: 100 }" navigation loop @swiper="onSwiper"
    @slideChange="onSlideChange">
    <swiper-slide class="main-slider" v-for="(content, idx) in contents" :key="idx">
      <div class="main-slider__text">
        <span style="display: block; text-align: left; font-weight: bold">회원님과 비슷한</span>
        <span style="display: block; text-align: center; font-weight: bolder;">
          <span style="text-align: center; font-weight: bolder; font-size: 3.5rem; color: #BF3D28;">{{ content.percent}}</span>의 유저들이</span>
        <span style="display: block; text-align: right;">플레이 하고 있어요</span>
      </div>
      <img class="header-slider__img" :width="widthSlider" :src="content.content">
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
    widthSlider: {
      type: String,
      default: "100%",
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
  height: calc(100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 8px;
  box-sizing: border-box;
  border-radius: 1rem;
  cursor: pointer;
}

.swiper-slide:hover {
  transform: scale(1);
  transition: transform 0.5s;
}

.main-slider {
  position: relative;
  border-radius: 1rem;
}

.main-slider__text {
  position: absolute;
  top: 0;
  left: 5%;
  font-weight: bolder;
  font-size: 3rem;
}

.main-slider__content {
  font-size: 1.5rem;
}

.header-slider__img {
  width: 84.5rem;
  object-fit: contain;
  border-radius: 1rem;
}

.main-slider__img {
  width: 25rem;
  object-fit: contain;
  border-radius: 1rem;
}

.main-slider__img:hover {
  transform: scale(1.05);
  transition: transform 0.5s;
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
  transform: translateX(-200%);
  transition: transform 0.5s;
}

.swiper-button-next:hover {
  transform: scale(1.1) translateX(-200%);
  opacity: 1;
}

.swiper-button-prev {
  background-image: url("@/assets/before.png");
  transform: translateX(200%);
  transition: transform 0.5s;
}

.swiper-button-prev:hover {
  transform: scale(1.1) translateX(200%);
  opacity: 1;
}

.swiper-button-next,
.swiper-button-prev {
  width: 3rem;
  height: 3rem;
  opacity: 0.3;
  cursor: pointer;
}

/* .swiper-button-next:hover {
  transform: translateX(-30%);
}

.swiper-button-prev:hover {
  transform: translateX(30%);
} */

/* 네비게이션 화살표 아이콘 스타일 */
.swiper-button-next:after,
.swiper-button-prev:after {
  font-family: swiper-icons;
  content: "";
  font-size: 1rem;
  color: white;
}
</style>
