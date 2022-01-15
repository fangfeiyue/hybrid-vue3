<script setup>
</script>
<template>
  <div class="count-down">
    <span>16:00</span>
    <span>0.60</span>
  </div>
</template>
<style lang="scss" scoped>
@import "assets/style/rem.scss";
@import "assets/style/color.scss";
.count-down {
  font-size: px2rem(14);
  margin-left: $marginSize;
  span {
    display: inline-block;
    padding: px2rem(2) px2rem(4) px2rem(2) px2rem(4);
  }
  span:first-child {
    background-color: $mainColor;
    border-top-left-radius: px2rem(4);
    border-bottom-left-radius: px2rem(4);
    border: px2rem(1) solid $mainColor;
    color: white;
  }
  span:last-child {
    background-color: white;
    border-top-right-radius: px2rem(4);
    border-bottom-right-radius: px2rem(4);
    color: $mainColor;
    border: px2rem(1) solid $mainColor;
  }
}
</style>