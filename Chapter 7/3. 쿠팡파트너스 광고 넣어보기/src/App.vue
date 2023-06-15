<template>
  <MenuBar @click-category="changeCategory" />
  <iframe
    src="https://ads-partners.coupang.com/widgets.html?id=669505&template=carousel&trackingCode=AF7692121&subId=&width=680&height=140&tsource="
    width="680"
    height="140"
    frameborder="0"
    scrolling="no"
    referrerpolicy="unsafe-url"
  ></iframe>
  <p class="coupang-text">
    ♢ 이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를
    제공받습니다.
  </p>
  <RouterView />
</template>

<script setup>
import { RouterView } from "vue-router";
import MenuBar from "./components/MenuBar.vue";
</script>

<style scoped>
iframe {
  width: 100%;
  height: 200px;
  margin-top: 10px;
}
.coupang-text {
  font-size: 12px;
  text-align: right;
  color: gray;
  margin: 0;
}
</style>
