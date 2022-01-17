<script setup>
import { fillZero } from "utils/utils";
import { ref } from "@vue/reactivity";
import { onMounted, watch } from "@vue/runtime-core";

const props = defineProps(["endHour"]);

const displayContent = ref("活动进行中");

let timer = null;
const calTime = () => {
  if (timer) clearInterval(timer);

  const endHour = props.endHour;
  const date = new Date();
  const nowHour = date.getHours();

  if (nowHour > endHour) {
    displayContent.value = "活动已结束";
    return;
  }

  if (nowHour == endHour) {
    displayContent.value = "活动进行中";
    return;
  }

  const diffHours = endHour - nowHour - 1;
  const diffMinutes = 60 - date.getMinutes() - 1;
  const diffSeconds = 60 - date.getSeconds();
  let diffTime = diffHours * 3600 + diffMinutes * 60 + diffSeconds;

  if (diffTime <= 0) {
    clearInterval(timer);
    return;
  }

  timer = setInterval(() => {
    diffTime -= 1;
    const hours = fillZero(Math.floor(diffTime / 3600));
    const minutes = fillZero(Math.floor(diffTime / 60) % 60);
    const seconds = fillZero(Math.floor(diffTime % 60));
    displayContent.value = hours + ":" + minutes + ":" + seconds;
  }, 1000);
};

watch(
  () => props.endHour,
  () => {
    calTime();
  }
);

onMounted(() => {
  calTime();
});
</script>
<template>
  <div class="count-down">
    <span>{{ endHour }}点场</span>
    <span>{{ displayContent }}</span>
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