import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ResultsData from "../components/ResultsData.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/results/:query",
    name: "ResultsData",
    component: ResultsData,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
