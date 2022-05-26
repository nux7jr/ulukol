import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/views/Home";
import PageNotFound from "@/views/Error";
import News from "@/views/News";
import Gallery from "@/views/Gallery";
import Contacts from "@/views/Contacts";
import Feedback from "@/views/Feedback";
import GalleryTemplate from "@/views/GalleryTemplate";
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
  {
    path: "/contacts",
    name: "Contacts",
    component: Contacts,
  },
  {
    path: "/feedback",
    name: "Feedback",
    component: Feedback,
  },
  {
    path: "/galleryTemplate/:catchAll(.*)*",
    name: "GalleryTemplate",
    component: GalleryTemplate,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
