<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
const props = defineProps(["swiperImgs", "height"]);
const onSwiper = (swiper) => {};
const onSlideChange = () => {};

const pagination = {
  clickable: true,
};
</script>
<template>
  <Swiper
    :modules="[Pagination, Autoplay]"
    :loop="true"
    :autoplay="true"
    :pagination="pagination"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide v-for="item in swiperImgs" :key="item"
      ><img :style="{ height: height, width: '100%' }" :src="item.icon"
    /></swiper-slide>
  </Swiper>
</template>
<style lang="scss" scoped>
@import "assets/style/rem.scss";
.swiper {
  --swiper-theme-color: #fff;
  // --swiper-pagination-color: #00ff33; /* 两种都可以 */
}
</style>