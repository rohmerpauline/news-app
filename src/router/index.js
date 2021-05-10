import Vue from "vue";
import VueRouter from "vue-router";
import NewsList from "../views/NewsList.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "top-news",
    component: NewsList,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
