<script setup>
import { formatePrice } from "utils/utils";
import CountDown from "./CountDown.vue";
defineProps(["secondsData"]);
</script>
<template>
  <div class="seconds">
    <div class="seconds-wrap">
      京东秒杀
      <CountDown endHour="17" />
    </div>
    <div class="seconds-content-box">
      <div class="seconds-content">
        <div v-for="item in secondsData" :key="item.id" class="seconds-item">
          <img :src="item.icon" alt="" />
          <p>￥{{ formatePrice(item.price) }}</p>
          <p>￥{{ formatePrice(item.oldPrice) }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "assets/style/rem.scss";
@import "assets/style/color.scss";
.seconds {
  background-color: white;
  border-radius: $radiusSize;
  margin: $marginSize;
  &-wrap {
    display: flex;
    padding: $marginSize;
    font-size: $titleSize;
    align-items: center;
  }
  .seconds-content-box {
    height: px2rem(111);
    background-color: #fff;
    overflow: hidden;
    .seconds-content {
      display: flex;
      overflow-y: hidden;
      overflow-x: auto;
      padding: $marginSize 0;
      .seconds-item {
        padding: 0 px2rem(12);
        text-align: center;
        img {
          width: px2rem(66);
          height: px2rem(66);
        }
        p:first-of-type {
          color: $mainColor;
          font-size: $titleSize;
        }
        p:last-child {
          color: $textHintColor;
          font-size: $infoSize;
          margin-top: px2rem(6);
          text-decoration: line-through;
        }
      }
    }
  }
}
</style>