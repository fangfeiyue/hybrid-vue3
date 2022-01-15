<script setup>
import { fetchSwiper, fetchActivity, fetchSeconds } from "../api/index";
import Swiper from "./Swiper.vue";
import Activity from "./Activity.vue";
import Seconds from "./Seconds.vue";
import ModeOptions from "./ModeOptions.vue";
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";

// const getImgPath = (name) => {
//   return new URL("../assets/img/" + name, import.meta.url).href;
// };
// const swiperImgs = new Array(8)
//   .fill(1)
//   .map((item, index) => getImgPath("swiper-" + (index + 1) + ".jpg"));

const activityData = ref([]);
const swiperImgs = ref([]);

const getSwiper = async () => {
  const res = await fetchSwiper();
  swiperImgs.value = res.list;
};

const getActivity = async () => {
  const res = await fetchActivity();
  activityData.value = res.list;
};

const secondsData = ref([]);
const getSeconds = async () => {
  const res = await fetchSeconds();
  secondsData.value = res.list;
};

onMounted(() => {
  getSwiper();
  getActivity();
  getSeconds();
});
</script>
<template>
  <div class="home">
    <div class="home-content">
      <Swiper :swiperImgs="swiperImgs" height="184px" />
      <Activity>
        <div class="activity-item">
          <img v-for="item in activityData" :src="item.icon" :key="item.src" />
        </div>
      </Activity>
      <ModeOptions />
      <Seconds :secondsData="secondsData" />
      <Activity>
        <div class="activity-buying">
          <img src="../assets/img/haoHuoQiang.gif" />
        </div>
      </Activity>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "assets/style/rem.scss";
.home {
  width: 100%;
  height: 100%;
  &-content {
    height: 100%;
    .activity-item {
      margin-top: px2rem(-8);
      border-top-left-radius: px2rem(8);
      border-top-right-radius: px2rem(8);
      img {
        display: inline-block;
        width: 33.3%;
      }
    }
    .activity-buying {
      background-color: white;
      margin-top: $marginSize;
      img {
        width: 100%;
      }
    }
  }
}
</style>