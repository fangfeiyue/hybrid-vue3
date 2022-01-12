<script setup>
</script>
<template>
  <div class="activity">
    <slot />
  </div>
</template>
<style lang="scss" scoped>
@import "assets/style/rem.scss";
.activity {
  position: relative;
  max-height: px2rem(160);
  z-index: 2;
}
</style>