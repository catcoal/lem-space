import { createApp } from "vue";
import "./styles.css";
import "./styles/scrollbar.css";
import "./styles/ant.css";
import App from "./App.vue";
import router from "./router";

createApp(App).use(router).mount("#app");
