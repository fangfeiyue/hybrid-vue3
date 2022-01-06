<script setup>
import { ref } from "@vue/reactivity";
const getImgPath = (name) => {
  return new URL("../assets/img/" + name, import.meta.url).href;
};

const tabBarData = ref([
  {
    name: "首页",
    nImg: `${getImgPath("home-n.svg")}`,
    hImg: `${getImgPath("home-h.svg")}`,
    component: "Home",
  },
  {
    name: "购物车",
    nImg: `${getImgPath("shopping-n.svg")}`,
    hImg: `${getImgPath("shopping-h.svg")}`,
    component: "Shopping",
  },
  {
    name: "我的",
    nImg: `${getImgPath("my-n.svg")}`,
    hImg: `${getImgPath("my-h.svg")}`,
    component: "My",
  },
]);
const selectedIndex = ref(0);

const emit = defineEmits(["changeTab"]);
const changeTab = (item, index) => {
  selectedIndex.value = index;
  emit("changeTab", item);
};
</script>
<template>
  <div class="tab-bar">
    <div
      class="tab-bar-item"
      v-for="(item, index) in tabBarData"
      :key="item.name"
      @click="changeTab(item, index)"
    >
      <img
        class="tab-bar-item-img"
        :src="selectedIndex === index ? item.hImg : item.nImg"
      />
      <p
        class="tab-bar-item-name"
        :class="{ 'tab-bar-item-name-h': index === selectedIndex }"
      >
        {{ item.name }}
      </p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "assets/style/rem.scss";
@import "assets/style/color.scss";
.tab-bar {
  width: 100%;
  height: 46px;
  display: flex;
  justify-content: space-around;
  background-color: #fff;
  box-shadow: 0 0 px2rem(16) 0 rgba(0, 0, 0, 0.2);
  border-top: px2rem(1) solid $lineColor;
  &-item {
    text-align: center;
    padding: px2rem(4) px2rem(12);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &-img {
      width: px2rem(22);
      height: px2rem(22);
    }
    &-name {
      font-size: px2rem(14);
      margin-top: px2rem(4);
      &-h {
        color: $mainColor;
      }
    }
  }
}
</style>