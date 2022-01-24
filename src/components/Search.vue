<script setup>
import { getImgPath } from "utils/utils.js";
defineProps({
  icon: {
    type: String,
    default: getImgPath("search.svg"),
  },
  hint: {
    type: String,
    default: "百草味京东超级品牌日",
  },
  hintColor: {
    type: String,
    default: "#999999",
  },
  bgColor: {
    default: "#ffffff",
    type: String,
  },
});
</script>

<template>
  <div class="search" :style="{ backgroundColor: bgColor }">
    <img :src="icon" alt="搜索图标" />
    <input
      type="text"
      :placeholder="hint"
      :style="{ color: hintColor, backgroundColor: bgColor }"
    />
  </div>
</template>
<style lang="scss" scoped>
@import "assets/style/rem.scss";
@import "assets/style/color.scss";
.search {
  display: flex;
  align-items: center;
  width: 100%;
  margin: px2rem(6);
  // height: 30px;
  border-radius: px2rem(22);
  background-color: #fff;
  overflow: hidden;
  img {
    margin-left: px2rem(8);
    width: px2rem(16);
  }
  input {
    flex: 1;
    height: 100%;
    border: 0;
    outline: none;
    margin-left: px2rem(8);
    font-size: px2rem(12);
  }
}
</style>