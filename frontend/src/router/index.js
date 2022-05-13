import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import PageNotFound from "../views/Error";
import News from "../views/News";
import Gallery from "../views/Gallery.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/:catchAll(.*)*",
    name: "PageNotFound",
    component: PageNotFound,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/news",
    name: "News",
    component: News,
  },
  {
    path: "/gallery",
    name: "Gallery",
    component: Gallery,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
