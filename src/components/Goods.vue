<script setup>
import { ref } from "@vue/reactivity";
import { fetchGoods } from "../api/index";
import { nextTick, onMounted } from "@vue/runtime-core";

const goods = ref([]);
async function getGoods() {
  const res = await fetchGoods();
  goods.value = res.list.map((item) => ({
    ...item,
    height: setImgHeight(item),
  }));
}

const goodsItems = ref([]);
const goodsItemStyles = ref([]);
const setRef = (el) => {
  console.log(2);
  goodsItems.value.push(el);
};
function setLayoutStyle() {
  console.log(1);
  let leftHeightTotal = 0,
    rightHeightTotal = 0,
    goodsItemStyle = {};
  goodsItems.value.forEach((item) => {
    const height = item.clientHeight + 8;
    console.log(
      "🚀 ~ file: Goods.vue ~ line 26 ~ goodsItems.value.forEach ~ height",
      height
    );
    if (leftHeightTotal <= rightHeightTotal) {
      goodsItemStyle = {
        left: "0",
        top: leftHeightTotal + "px",
      };
      leftHeightTotal += height;
    } else {
      goodsItemStyle = {
        right: "0",
        top: rightHeightTotal + "px",
      };
      rightHeightTotal += height;
    }
    console.log(goodsItemStyle);
    goodsItemStyles.value.push(goodsItemStyle);
  });
}

function setImgHeight() {
  const maxHeight = 230,
    minHeight = 178;
  const height =
    Math.floor(Math.random() * (maxHeight - minHeight)) + minHeight + "px";
  return height;
}

onMounted(async () => {
  await getGoods();
  setLayoutStyle();
});
</script>
<template>
  <div class="goods">
    <div
      v-for="(item, index) in goods"
      :key="item.img"
      class="goods-item"
      :ref="setRef"
      :style="goodsItemStyles[index]"
    >
      <img :style="{ height: item.height }" :src="item.img" alt="" />
      <div class="goods-desc">
        <div class="goods-name">{{ item.name }}</div>
        <div class="goods-sale-info">
          <span>{{ item.price }}</span>
          <span>销量{{ item.volume }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "assets/style/rem.scss";
@import "assets/style/color.scss";
.goods {
  position: relative;
  margin: $marginSize;
  background-color: $bgColor;
  .goods-item {
    background-color: white;
    padding: $marginSize;
    box-sizing: border-box;

    position: absolute;
    width: 49%;
    border-radius: $radiusSize;
    img {
      width: 100%;
    }
    .goods-desc {
      width: 100%;
      .goods-name {
        font-size: $infoSize;
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-word;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        display: -webkit-box;
        line-height: px2rem(18);
      }
      .goods-sale-info {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: $marginSize;
        span:first-child {
          font-size: $titleSize;
          color: $mainColor;
          font-weight: 500;
        }
        span:last-child {
          font-size: $infoSize;
          color: $textHintColor;
        }
      }
    }
  }
}
</style>