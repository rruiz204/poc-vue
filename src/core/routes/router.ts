import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@modules/home/HomePage.vue";

export const Router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: HomePage },
  ],
});