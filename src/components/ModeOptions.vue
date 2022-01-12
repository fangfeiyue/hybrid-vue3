<script setup>
import { getImgPath } from "../utils/utils";

const imgName = [
  "jingDongChaoShi.png",
  "haiTunQuanQiu.png",
  "jingDongFuShi.png",
  "jingDongShengXian.png",
  "jingDongDaoJia.png",
  "chongZhiJiaoFei.png",
  "jingDongPinGou.png",
  "lingJuan.png",
  "zhuanQian.png",
  "quanBu.png",
];
const options = [
  "京东超市",
  "海屯全球",
  "京东服饰",
  "京东生鲜",
  "京东到家",
  "充值缴费",
  "9.9元拼",
  "领劵",
  "赚钱",
  "全部",
].map((item, index) => ({
  id: item,
  name: item,
  icon: getImgPath(imgName[index]),
}));
</script>
<template>
  <div class="mode-options">
    <div v-for="item in options" :key="item.name" class="mode-options-item">
      <img :src="item.icon" />
      <p>{{ item.name }}</p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "assets/style/rem.scss";
.mode-options {
  display: flex;
  flex-wrap: wrap;
  background-color: #fff;
  padding-bottom: px2rem(14);
  &-item {
    width: 20%;
    text-align: center;
    margin-top: px2rem(10);
    img {
      width: px2rem(40);
      height: px2rem(40);
    }
    p {
      font-size: $minInfoSize;
      margin-top: px2rem(6);
    }
  }
}
</style>