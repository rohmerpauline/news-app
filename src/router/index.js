import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../views/HomePage.vue";
import ArticlePage from "@/views/ArticlePage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "top-news",
    component: HomePage,
  },
  {
    path: "/article/:title",
    name: "news-details",
    component: ArticlePage,
  },
  /* {
    path: "/article",
    name: "news-details",
    component: NewsDetails,
  }, */
];

const router = new VueRouter({
  routes,
});

export default router;
