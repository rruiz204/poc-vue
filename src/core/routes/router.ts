import { createRouter, createWebHistory } from "vue-router";
import ProjectPage from "@modules/project/ProjectPage.vue";

export const Router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/project" },
    { path: "/project", component: ProjectPage },
  ],
});