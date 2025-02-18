import "./style.css";
import App from "./App.vue";
import { createApp } from "vue";
import { createPinia } from "pinia";

import { Theme } from "./theme";
import PrimeVue from "primevue/config";
import { Router } from "@core/routes/router";

const app = createApp(App);
const Pinia = createPinia();

app.use(Pinia);
app.use(Router);
app.use(PrimeVue, { theme: Theme });

app.mount("#app");
