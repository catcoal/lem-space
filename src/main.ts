import { createApp } from "vue";
import { createPinia } from "pinia";
import "./styles.css";
import "./styles/scrollbar.css";
import "./styles/ant.css";
import App from "./App.vue";
import router from "./router";

const pinia = createPinia();

createApp(App).use(pinia).use(router).mount("#app");
