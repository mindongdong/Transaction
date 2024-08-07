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
    <swiper-slide v-for="(content, idx) in contents" :key="idx">
      <div class="main-slider__title">{{ content.title }}</div>
      <div class="main-slider__content">{{ content.content }}</div>
    </swiper-slide>
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
  padding: 0 3rem;
}

/* 각 슬라이드의 크기 설정 */
.swiper-slide {
  width: calc(100% - 2rem);
  height: calc(100% - 2rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1.5rem;
  background: #ddd;
  border-radius: 8px;
  box-sizing: border-box;
}

.main-slider__title {
  font-size: 3rem;
}

.main-slider__content {
  font-size: 1.5rem;
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

/* 네비게이션 화살표 아이콘 스타일 */
.swiper-button-next:after,
.swiper-button-prev:after {
  font-family: swiper-icons;
  content: "";
  font-size: 1rem;
  color: white;
}
</style>
