import AboutView from "@/views/AboutView.vue";
import HomeView from "@/views/HomeView.vue";
import PublicationsView from "@/views/PublicationsView.vue";
import ResearchView from "@/views/ResearchView.vue";
import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/research",
    name: "Research",
    component: ResearchView,
  },
  {
    path: "/publications",
    name: "Publications",
    component: PublicationsView,
  },
  {
    path: "/about",
    name: "About",
    component: AboutView,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
