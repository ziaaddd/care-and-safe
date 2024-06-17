// import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import store from "./store/index.js";
import { createI18n } from "vue-i18n";
import enLocale from "./locales/en.json";
import arLocale from "./locales/ar.json";

const messages = {
  en: enLocale,
  ar: arLocale,
};

const i18n = createI18n({
  locale: "en",
  messages,
});

const app = createApp(App);

app.use(router);
app.use(store);
app.use(i18n);

app.mount("#app");
