<script setup>
import Search from "./Search.vue";
defineProps(["titleName", "isShowBack", "navBarStyle"]);
</script>
<template>
  <div
    class="nav-bar"
    :class="[{ 'bottom-line': titleName }]"
    :style="navBarStyle"
  >
    <div class="left">
      <!-- <img src="../assets/img/more-white.svg" /> -->
      <slot name="nav-left">
        <img v-if="isShowBack" src="../assets/img/back.svg" />
      </slot>
    </div>
    <div class="center">
      <slot name="nav-center">
        <span class="nav-title">{{ titleName }}</span>
      </slot>
    </div>
    <div class="right">
      <slot name="nav-right"></slot>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "assets/style/rem.scss";
@import "assets/style/color.scss";
.nav-bar {
  width: 100%;
  height: $navBarHeight;
  line-height: $navBarHeight;
  display: flex;
  justify-content: space-between;
  z-index: 999;

  .left,
  .right {
    display: flex;
    height: 100%;
    width: px2rem(26);
    padding: 0 px2rem(8);
    ::v-deep img {
      width: 100%;
    }
  }
  .center {
    display: flex;
    height: 100%;
    flex-grow: 1;
    .nav-title {
      align-self: center;
      margin: 0 auto;
      font-size: $titleSize;
    }
  }
}
.bottom-line {
  border-bottom: 1px solid $lineColor;
}
</style>