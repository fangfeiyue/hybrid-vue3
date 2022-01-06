<script setup>
import { ref } from "@vue/reactivity";
import TabBar from "../components/TabBar.vue";
import Home from "../components/Home.vue";
import Shopping from "../components/Shopping.vue";
import My from "../components/My.vue";

const currentComponent = ref(Home);

const changeTab = (item) => {
  let cmp = null;
  switch (item.component) {
    case "Home":
      cmp = Home;
      break;
    case "Shopping":
      cmp = Shopping;
      break;
    case "My":
      cmp = My;
      break;
  }
  currentComponent.value = cmp;
};
</script>
<script>
</script>
<template>
  <div class="main">
    <component :is="currentComponent"></component>
    <TabBar @changeTab="changeTab" />
  </div>
</template>
<style lang="scss" scoped>
.main {
  width: 100%;
  height: 100%;
  font-size: 20px;
}
</style>