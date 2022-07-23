import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "@/iconfont/iconfont.css";
import "vant/lib/index.css";
import Vant from "vant";
import "@/mock/index";
import { createPinia } from "pinia";
const pinia = createPinia();
const app = createApp(App);

app.use(router).use(pinia).use(Vant).mount("#app");
