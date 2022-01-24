<script setup>
import { fetchSwiper, fetchActivity, fetchSeconds } from "../api/index";
import NavBar from "./NavBar.vue";
import Swiper from "./Swiper.vue";
import Activity from "./Activity.vue";
import Seconds from "./Seconds.vue";
import Goods from "./Goods.vue";
import ModeOptions from "./ModeOptions.vue";
import Search from "./Search.vue";
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import { getImgPath, throttle } from "../utils/utils";

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

const criticalValue = 160;
const navBarStyle = ref({
  backgroundColor: "",
  position: "fixed",
});
const navBarData = {
  normal: {
    leftIcon: getImgPath("more-white.svg"),
    rightIcon: getImgPath("message-white.svg"),
    searchStyle: {
      bgColor: "#ffffff",
      hintColor: "#999999",
      icon: getImgPath("search.svg"),
    },
  },
  highlight: {
    leftIcon: getImgPath("more.svg"),
    rightIcon: getImgPath("message.svg"),
    searchStyle: {
      bgColor: "#d7d7d7",
      hintColor: "#ffffff",
      icon: getImgPath("search-white.svg"),
    },
  },
};
const navBarCurStyle = ref({});
onMounted(() => {
  navBarCurStyle.value = navBarData.normal;
});
const calNavBarStyle = (e) => {
  const scrollTop = e.target.scrollTop;
  const opacity = scrollTop / criticalValue;
  if (scrollTop >= criticalValue) {
    navBarCurStyle.value = navBarData.highlight;
    navBarStyle.value = {
      ...navBarStyle.value,
      backgroundColor: `rgba(255, 255, 255, ${opacity})`,
    };
  } else {
    navBarCurStyle.value = navBarData.normal;
    navBarStyle.value = {
      ...navBarStyle.value,
      backgroundColor: `rgba(255, 255, 255, ${opacity})`,
    };
  }
};
const onScroll = throttle(calNavBarStyle, 200);
</script>
<template>
  <div class="home" @scroll="onScroll">
    <div class="home-content">
      <nav-bar :isShowBack="false" :navBarStyle="navBarStyle">
        <template v-slot:nav-left>
          <img :src="navBarCurStyle.leftIcon" alt="更多" />
          <!-- <img src="../assets/img/more-white.svg" /> -->
        </template>

        <template v-slot:nav-center>
          <Search v-bind="navBarCurStyle.searchStyle" />
        </template>
        <template v-slot:nav-right>
          <img :src="navBarCurStyle.rightIcon" alt="信息" />
        </template>
      </nav-bar>
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
      <Goods />
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "assets/style/rem.scss";
.home {
  width: 100%;
  height: 100%;
  overflow-y: auto;
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