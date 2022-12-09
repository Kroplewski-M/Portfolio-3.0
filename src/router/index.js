import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import SkillsProjects from "@/views/Skills&ProjectsView.vue";
import Contact from "@/views/ContactView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", component: HomeView },
    { path: "/About", component: AboutView },
    { path: "/SkillsProjects", component: SkillsProjects },
    { path: "/Contact", component: Contact },
  ],
});

export default router;
