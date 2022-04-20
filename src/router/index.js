import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Error from "@/views/Error";
import mylink from "@/views/NewLink.vue";
import News from "@/views/News.vue";
import Auth from "@/views/Auth.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/*",
    name: "not-found",
    component: Error,
    // Надо настроить
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/About.vue");
    },
  },
  {
    path: "/mylink",
    name: "Mylink",
    component: mylink,
  },
  {
    path: "/news",
    name: "News",
    component: News,
  },
  {
    path: "/auth",
    name: "Auth",
    component: Auth,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
