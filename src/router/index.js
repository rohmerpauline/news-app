import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../views/HomePage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/", redirect: '/article/general',
    name: "home",
    component: HomePage,
  },
  {
    path: "/article/:category/:title",
    name: "news-details",
    component: () => import(/* webpackChunkName: "article" */ "@/views/ArticlePage.vue"),
    },
  {
    path: "/article/:category",
    name: "news",
    component: () => import(/* webpackChunkName: "news" */ "@/views/News.vue"),
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
  
});


export default router;
