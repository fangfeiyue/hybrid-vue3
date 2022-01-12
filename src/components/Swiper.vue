<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
const props = defineProps(["swiperImgs", "height"]);
const onSwiper = (swiper) => {};
const onSlideChange = () => {};
const swiperOptions = {
  autoplay: true,
  loop: true,
  pagination: {
    el: "swiper-pagination",
    clickable: true,
    bulletClass: "custom-bullet-class",
  },
};
const pagination = {
  el: "swiper-pagination",
  bulletClass: "custom-bullet-class",
};
</script>
<template>
  <swiper
    :loop="true"
    :autoplay="true"
    :pagination="{ clickable: true }"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide v-for="item in swiperImgs" :key="item"
      ><img :style="{ height: height }" :src="item.icon"
    /></swiper-slide>
  </swiper>
</template>
<style lang="scss" scoped>
@import "assets/style/rem.scss";
.swiper-pagination {
  .custom-bullet-class {
    box-sizing: border-box;
    border-radius: 100%;
    height: px2rem(6);
    width: px2rem(6);
    border: px2rem(1) solid #fff;
    margin: 0 px2rem(4);
    display: inline-block;
    opacity: 1;
  }
  .swiper-pagination-bullet-active {
    background-color: #fff;
  }
}
</style>