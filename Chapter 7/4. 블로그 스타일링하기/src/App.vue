<template>
  <div class="wrapper">
    <img class="bg" src="./assets/bg.jpg" alt="bg" />
    <a href="/" class="back-home">
      <img class="logo" src="./assets/logo.png" alt="logo" />
    </a>
    <input class="search" v-model="search" placeholder="Search" />
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
    <RouterView :search="search" />
    <footer>
      <span>Copyright © realmyspace.com 2023. All Rights Reserved.</span>
      <div class="sns">
        <a href=""><img src="@/assets/github.svg" /></a>
        <a href=""><img src="@/assets/twitter.svg" /></a>
        <a href=""><img src="@/assets/instagram.svg" /></a>
        <a href=""><img src="@/assets/youtube.svg" /></a>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { RouterView } from "vue-router";
import MenuBar from "./components/MenuBar.vue";

const search = ref("");
</script>

<style scoped>
.wrapper {
  position: relative;
  width: 800px;
  max-width: 100%;
  margin: 0 auto;
  min-height: 100vh;
}

.back-home {
  display: block;
  margin: 0 auto;
  text-align: center;
}
.bg {
  position: absolute;
  top: 0;
  right: 30px;
  height: 200px;
  z-index: -1;
}

.logo {
  height: 70px;
  margin-top: 30px;
}
.intro {
  text-align: center;
}

.intro strong {
  color: black;
}

iframe {
  width: 100%;
  height: 150px;
  margin-top: 10px;
}
.coupang-text {
  font-size: 12px;
  text-align: right;
  color: gray;
  margin: 0;
}

.search {
  display: block;
  margin: 10px auto;
  width: 200px;
  padding: 6px 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

footer {
  display: flex;
  white-space: nowrap;
  align-items: center;
  color: gray;
  font-size: 12px;
  border-radius: 4px;
  padding: 4px 10px;
  margin-top: auto;
}
footer .sns {
  display: flex;
  column-gap: 10px;
  margin-left: auto;
}

footer .sns img {
  height: 20px;
  filter: grayscale(1) brightness(0.5) opacity(0.5);
  transition: all 0.3s;
}

footer .sns img:hover {
  filter: none;
}
</style>
