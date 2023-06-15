import { createApp } from "vue";
import router from "./router"; // router 불러오기
import App from "./App.vue";

import "./assets/main.css";

const app = createApp(App);

app.use(router); // router 사용!

app.mount("#app");
